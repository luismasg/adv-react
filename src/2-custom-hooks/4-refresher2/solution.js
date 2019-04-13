import { useEffect } from 'react'

export default function Refresher() {
  useEffect(() => {
    const orgTitle = document.title
    const changeVisibility = () => {
      if (document.hidden) {
        document.title = 'I miss u'
      } else {
        document.title = orgTitle
      }
    }
    document.addEventListener('visibilitychange', changeVisibility)
    return () => {
      document.removeEventListener('visibilitychange', changeVisibility)
    }
  })
  return null
}
