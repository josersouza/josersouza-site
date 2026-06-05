import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function GTMTracker() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      const dataLayer = (window as any).dataLayer
      dataLayer.push({
        event: 'pageview',
        page_path: location.pathname + location.search,
      })
    }
  }, [location])

  return null
}
