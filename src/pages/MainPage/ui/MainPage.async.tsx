import { lazy } from 'react'

// export const MainPageAsync = lazy(() => import('./MainPage'));
export const MainPageAsync = lazy(
  async () => await new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // for loader testing only
    setTimeout(() => resolve(import('./MainPage')), 2000)
  })
)
