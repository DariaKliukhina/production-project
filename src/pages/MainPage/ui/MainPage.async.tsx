import { lazy } from 'react'

// export const MainPageAsync = lazy(() => import('./MainPage'));
export const MainPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => resolve(import('./MainPage')), 2000)
    })
)
