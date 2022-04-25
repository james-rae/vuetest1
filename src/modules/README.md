## Modules

A custom user module system. Place a `.ts` file with the following template, it will be installed automatically.

See ViteSSG call in main.ts

```ts
import { type UserModule } from '~/types'

export const install: UserModule = ({ app, router, isClient }) => {
  // do something
}
```
