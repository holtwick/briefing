# Development

To make contributions to this project or customize it for your own needs, start by cloning / downloading the repository to your local machine. The development mode can be started like this:

```
npm install
npm start
```

Access the local server via [http://localhost:8080](http://localhost:8080).

## Customization

Most customization can be done by setting env variables. See [**→ configuration**](configuration.md) 

To get started with changing the code directly you might want to begin with the landing page at [→ src/components/app-whitelabel.vue](../src/components/app-whitelabel.vue).

## Debugging

Enable logging by entering the following in the browsers console:

```js
localStorage.zeed = '*'
```

In production it is possible to connect to <sentry.io> via [**→ configuration**](configuration.md). 

## Technology stack

Just the most up to date frameworks:

- [vite](https://vitejs.dev/)
- [vue3](https://vuejs.org/)
- [vue-i18n](https://vue-i18n.intlify.dev/)
- [zerva](https://www.npmjs.com/package/@zerva/core)
- [zeed](https://www.npmjs.com/package/zeed)
- [Feather Icons](https://feathericons.com)
