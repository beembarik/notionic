import BLOG from '@/blog.config'
import { NotionAPI } from 'notion-client'
import { idToUuid } from 'notion-utils'
import getAllPageIds from './getAllPageIds'
import getPageProperties from './getPageProperties'

/**
 * Get all projects from Notion
 */
export async function getProjects() {
  let id = BLOG.notionPageId
  const authToken = BLOG.notionAccessToken || null
  const api = new NotionAPI({ authToken })
  const response = await api.getPage(id)

  id = idToUuid(id)
  const collection = Object.values(response.collection)[0]?.value
  const collectionQuery = response.collection_query
  const block = response.block
  const schema = collection?.schema

  // Check if the page is a database
  const rawMetadata = block[id].value
  if (rawMetadata?.type !== 'collection_view_page' && rawMetadata?.type !== 'collection_view') {
    console.log(`pageId '${id}' is not a database`)
    return []
  }

  const projects = []
  if (schema) {
    const pageIds = getAllPageIds(collectionQuery)
    for (let i = 0; i < pageIds.length; i++) {
      const id = pageIds[i]
      const properties = await getPageProperties(id, block, schema, authToken)
      // Only include pages with type "Project"
      if (properties?.type && properties.type.includes('Project')) {
        // Add fullwidth to properties like getAllPosts does
        properties.fullWidth = block[id].value?.format?.page_full_width ?? false
        projects.push(properties)
      }
    }
  }
  return projects
}