# Vue 3, Vite and Typescript Template

This is a starter template for a Vue 3 app with some sensible and often used defaults & features.

## Features

- Vite
- Typescript support
- Routing via `vue-router`
- ESLint + Prettier
- Axios
- [Pinia](https://pinia.esm.dev/) in favor of Vuex
- SCSS/SASS support via [`sass`](https://pinia.esm.dev/)
- [`modern-normalize`](https://github.com/sindresorhus/modern-normalize)

## Getting Started

To get started, install the dependencies with your package manager of choice. After they're installed, you can then run `yarn dev` or `npm run dev` to spin up the Vite dev server. By default, this will expose the `3000` port both locally and on your entire network, although this can be disabled in the `vite.config.ts` file by removing the `server: { host }` option.

To build the app, you have 2 options:

- `yarn build` or `npm run build` will simply build the application, with the built files getting exported into the `dist/` directory
- `yarn build-ts` or `npm run build-ts` will first run the Typescript type checker against the whole project, then build the files and place them in `dist/`

## Default Setup

The default setup of this template includes examples on how to use all the Features listed above.

### Vite

Vite will resolve `@` in the source code to `./src` by default. So for example, to import a component from `/src/App.vue`, you can simply call `import Component from "@/components/ExampleComponent"`. For IDE support to work with path aliasing, the `tsconfig.json` file also contains a `paths` key, though the app itself will work without the Typescript configuration flag.

To change the string used for resolving the alias, you must change line `15` of the `tsconfig.json` as well as line `11` of the `vite.config.ts` file.

### Vue Router

The template utilizes `vue-router`. The router configuration file can be found in `src/lib/router.ts`. By default, the routes are all placed in the `src/pages` directory.

The config file also includes a route guard that sets the title of each route via a `meta: title` flag.

### SASS/SCSS

SASS/SCSS files can be used in components simply by declaring the style tags to use one of them. This will automatically be transpiled to CSS.

```vue
<style lang="scss"></style>
```

The `vite.config.js` file also imports a SCSS variables file to all components that utilize SASS/SCSS via the `preprocessorOptions: { scss }` flag. This way, you don't have to explicitly import the variables in every single component where you need them.

### ESLint & Prettier

ESLint and Prettier can be configured in their respective config files, `.eslintrc.js` and `.prettierrc`. They're both set up to work and mesh well with Typescript and Vue 3, as there are some default options that give erronous warnings.

You have 3 scripts available for linting

- `yarn format` or `npm run format` will use `prettier` to auto-fix all files under the `./src` directory
- `yarn lint` or `npm run lint` will run ESLint on all `.js`, `.ts` and `.vue` files under the `./src` directory
- `yarn lint-fix` or `npm run lint-fix` will lint all `.js`, `.ts` and `.vue` files under the `./src` directory and automatically fix anything that can be auto-fixed

### Axios

The template has been set up to utilize an Axios instance. This configuration can be found in `src/lib/axios.ts`, and by default sets the Axios base URL to  https://jsonplaceholder.typicode.com

To use axios anywhere inside the app, simply import the instance and use it as you normally would

```javascript
import $axios from "@/lib/axios"

$axios.get("/ednpoint").then(() => { foo })
```

### Pinia

As of the time of writing (September 22nd 2021), Vuex 4 is in a bit of a complicated state. As such, the core team has released an experimental library called [Pinia](https://pinia.esm.dev/) that aims to resolve Vuex 4's issues and to make state management easier to use while providing Typescript support.

For more details on how to use Pinia, check out their docs. You can also find a very simple example in the `/src/store` directory. The `example` store declared there is being used in the `Example` route, stored in `src/pages/Example.vue`.
