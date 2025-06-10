import { getTextContent, getDateValue } from 'notion-utils'
import { NotionAPI } from 'notion-client'
import { defaultMapImageUrl } from 'react-notion-x'
import BLOG from '@/blog.config'

async function getPageProperties(id, block, schema, authToken) {
  const api = new NotionAPI({ authToken })
  const rawProperties = Object.entries(block?.[id]?.value?.properties || [])
  const excludeProperties = ['date', 'select', 'multi_select', 'person']
  const properties = {}

  properties.id = id
  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val] = rawProperties[i]
    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name] = getTextContent(val)
    } else {
      switch (schema[key]?.type) {
        case 'date': {
          const dateProperty = getDateValue(val)
          delete dateProperty.type
          properties[schema[key].name] = dateProperty
          break
        }
        case 'select':
        case 'multi_select': {
          const selects = getTextContent(val)
          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(',')
          }
          break
        }
        case 'person': {
          const rawUsers = val.flat()
          const users = []
          for (let i = 0; i < rawUsers.length; i++) {
            if (!rawUsers[i] || !rawUsers[i][0] || !rawUsers[i][0][1]) {
              continue
            }
            try {
              const userId = rawUsers[i][0]
              const res = await api.getUsers(userId)
              const resValue = res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value
              if (resValue) {
                users.push({
                  id: resValue.id,
                  first_name: resValue.given_name || 'Unknown',
                  last_name: resValue.family_name || 'User',
                  profile_photo: resValue.profile_photo
                })
              } else {
                // Handle case when user exists but data is not accessible
                users.push({
                  id: userId[1],
                  first_name: 'Unknown',
                  last_name: 'User',
                  profile_photo: null
                })
              }
            } catch (err) {
              // Handle case when user lookup fails
              console.warn(`Failed to fetch user data for ${rawUsers[i][0][1]}: ${err.message}`)
              if (rawUsers[i][0] && rawUsers[i][0][1]) {
                users.push({
                  id: rawUsers[i][0][1],
                  first_name: 'Unknown',
                  last_name: 'User',
                  profile_photo: null,
                  error: err.message // Add error info for debugging
                })
              }
            }
          }
          // Only add users property if we have valid users
          if (users.length > 0) {
            properties[schema[key].name] = users
          }
          break
        }
        default:
          break
      }
    }
  }

  // Get cover image
  function getPostCover(id, block) {
    const pageCover = block[id].value?.format?.page_cover
    if (pageCover && pageCover.startsWith('/')) {
      return 'https://www.notion.so' + pageCover
    } else if (pageCover && pageCover.startsWith('http')) {
      return defaultMapImageUrl(pageCover, block[id].value)
    } else {
      return BLOG?.defaultCover
    }
  }

  properties.page_cover = getPostCover(id, block)
  delete properties.content
  return properties
}

export { getPageProperties as default }
