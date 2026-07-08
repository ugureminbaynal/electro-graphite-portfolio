import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Restores scroll position to the top on every route change,
// so navigating between pages never lands the user mid-page.
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
