# Static Website

If you are fine with using brie.fi/ng Signaling and STUN you may also just host the HTML, CSS and JS files of the project. 

Run the following to build the website data:

```
npm install
npm run build
```

You will find the result in the folder `www`.

Modify the file `briefing-config.js` according to these [**→ configuration options**](../configuration.md).

Example

```js
window.briefingConfig = {
  ROOM_URL: 'https://example.com/room/',
  ROOM_PATH: '/room/'
}
```

Now copy this folder to your hosting service.
