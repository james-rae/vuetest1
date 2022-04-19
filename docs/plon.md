# The Plon

## Next Things

- Make a template link up to pinea
- Make a template link up to a list in pinea

## Noteable Code

- `pages` seems to be where route content lurks
  - file names have `[varname]` in them which seem to align to `defineProps` stuff
  - folder structure also aligns to the route. Subfolder `hi` matches to route `host/hi/randomname`
  - `[...all]` used as a catchall for non-matching routes, it appears
  - can have a markdown file with route name, will render markdown in the placeholder
    - is this native behavior or a special lib/plugin?
  - all this appears to be due to [pages plugin](https://github.com/hannoeru/vite-plugin-pages)? Odd name, since vite seems to a tooling thing? Is converting file structure to something more router-native the tooling?
- `layout` for stuff outside the route
- `user` object from store appears to persists across routes, good times
- ` <router-link :to="/rout/roote" replace>` to set a new route.
  - figure out what the difference is between `push` and `replace`
- the store is done in composition api style
- `main.ts` appears to be the starter