# Customization / White Label

You can take this project as a basis and modify it to be used on your own website, as long as you respect the conditions of the [AGPL like licenese](../LICENSE.txt). We kindly ask you to consider [purchasing a commercial license](../README.md#commercial-license) to support the project and benefit from a personal license.

There are diffent stages of customization:

1. **Embedding:** Put brie.fi/ng itself into your website using an IFRAME. Use the [Embed Configurator](https://brie.fi/ng/embed-demo) to find the right settings. No installation required!
2. **Website:** Just use the HTML, CSS and JS from Briefing and put it on your own hosting. You can easily customize. Signaling and STUN are used from brie.fi/ng or you point to your own services. [→ Details](website.md)
3. **Docker:** Use a container with everything prepared. Just some modifications are required. It is also possible to use other hosting options. This way you have your own Signaling and STUN running quickly.  [→ Details](./docker.md)
4. **Source Code:** Modify the project directly. You've got the full scale of possibilities. [→ Details](../development.md)

Additionally:

- **TURN Server**: In case you need a TURN server, learn [how to install "coturn"](./coturn.md)

Service providers:

- [Installation on fly.io](./fly.io.md)
- [Installation on render.com](./render.com.md)
- [Installation on repl.it](https://replit.com/@holtwick/briefing?v=1)

This illustration shows the different functional parts of Briefing:

![connection](../assets/connection.svg)
 