import NProgress from 'nprogress'
import { type UserModule } from '~/types'

// this is a progress bar, looks like it triggers during route changes

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        NProgress.start()
    })
    router.afterEach(() => { NProgress.done() })
  }
}
