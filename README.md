# virgo-papara

## Project Setup

```sh
git clone git@github.com:jofomah/virgo-papara.git
```

### Compile and Hot-Reload for Development

```sh
cd virgo-papara

docker composer up -d --build OR npm install && npm run dev (to install dependencies and run dev server, not required if using docker)
```

### View the local server

- Visit `http://localhost:5173/`

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
