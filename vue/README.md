# Vue.js Application

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
# Rendering
## Client-Side Rendering (CSR)
By default, the application uses CSR, where Vue.js dynamically generates content on the client side after the initial page load. This approach is optimal for interactive applications where content depends on user actions.
## Server-Side Rendering (SSR)
For improved SEO and faster initial page loads, the application can also be rendered on the server side, This allows web crawlers to index the content more effectively, as the fully rendered HTML is served directly.
To enable SSR, we use Nuxt.js, a framework built on top of Vue.js that provides out-of-the-box suppert for SSR.