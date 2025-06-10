import { idToUuid } from 'notion-utils'

function getAllPageIds(collectionQuery, viewId) {
  if (!collectionQuery) {
    console.warn('getAllPageIds: No collection query provided')
    return []
  }

  const views = Object.values(collectionQuery)[0]
  if (!views) {
    console.warn('getAllPageIds: No views found in collection query')
    return []
  }

  let pageIds = []
  
  try {
    if (viewId) {
      const vId = idToUuid(viewId)
      const view = views[vId]
      if (!view) {
        console.warn(`getAllPageIds: View not found for ID ${viewId}`)
        return []
      }

      // Handle all possible ways blockIds might be stored
      pageIds = [
        ...(view?.blockIds || []),
        ...(view?.collection_group_results?.blockIds || []),
        ...(view?.aggregationResults?.blockIds || [])
      ]
    } else {
      const pageSet = new Set()
      
      Object.values(views).forEach((view) => {
        if (!view) return

        // Handle regular views
        if (Array.isArray(view.blockIds)) {
          view.blockIds.forEach(id => {
            if (id) pageSet.add(id)
          })
        }

        // Handle gallery views and other group results
        if (view.collection_group_results?.blockIds) {
          view.collection_group_results.blockIds.forEach(id => {
            if (id) pageSet.add(id)
          })
        }

        // Handle aggregated results
        if (view.aggregationResults?.blockIds) {
          view.aggregationResults.blockIds.forEach(id => {
            if (id) pageSet.add(id)
          })
        }
      })

      pageIds = [...pageSet]
    }
  } catch (err) {
    console.error('Error in getAllPageIds:', err)
    return []
  }

  // Filter out any null/undefined/invalid values
  return [...new Set(pageIds.filter(id => id && typeof id === 'string'))]
}

export default getAllPageIds
