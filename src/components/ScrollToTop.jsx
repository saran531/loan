import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Ensures every newly opened page starts at scroll position 0.
 * Automatically scrolls to top on route/pathname changes while
 * preserving in-page anchor links when the pathname has not changed.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Check if the route has changed
    const isDifferentPage = prevPathname.current !== pathname;
    prevPathname.current = pathname;

    if (isDifferentPage) {
      if (hash) {
        // If navigating to a new page with a hash, attempt to scroll to that hash element
        const targetElement = document.getElementById(hash.replace('#', ''));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }

      // Always reset to top (position 0) for new page routes
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } else if (hash) {
      // Same page in-page anchor navigation: scroll to the target element if found
      const targetElement = document.getElementById(hash.replace('#', ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
