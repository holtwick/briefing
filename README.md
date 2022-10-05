# Brie.fi/ng

<img src="public/sample.jpg" height="200" align="right" style="padding-left: 2rem;"> Privacy is the central idea behind this project. Only open technologies (such as [WebRTC](https://webrtc-security.github.io/)) are used, which work with all modern browsers. Thus, no installation of additional software is required and the approach remains future-proof.

A conversation can be started immediately for free via [Brie.fi/ng](https://brie.fi/ng). A [free iOS app](https://apps.apple.com/app/briefing-video-chat/id1510803601) is also available.

Features such as desktop sharing, text chat and simple invitation links are available. More can be easily added with knowledge of Javascript and Vue.

## Quick start for developers

Download or clone the project to your local machine and you are ready to go:

```sh
npm install
npm run start
```

## Use in your own projects

However, there is also an option to use the app in your own projects. The following options are available:

1. create a room via [Brie.fi/ng](https://brie.fi/ng) and copy the link into your website.
2. embed Briefing via 'frame' into your own site. Use the [handy configurator](https://brie.fi/ng/embed-demo).
3. start Briefing on your own server e.g. [via Docker](docs/docker.md) or use a service like [fly.io](docs/fly.io.md), [render.com](docs/render.com.md), Google Cloud, AWS, Azure ... you name it.
4. customize the source code according to your needs. See the [documentation](docs/README.md) for details.

## Licenses

In general Briefing is free, however a [commercial license](#commercial-license) is also available, which I ask you to purchase, especially for "white labeling" applications. Otherwise, I appreciate support for the project through [sponsorship via GitHub](https://github.com/sponsors/holtwick) to support further development. Thanks.

### Public License

The terms of the EUPL (European Union Public License 1.2) must be followed, which are similar to those of the GPL. Modifications must also be free and made available to the public under the same license. For a quick overview of the license, see <https://choosealicense.com/licenses/eupl-1.2/>. This license is also available in the [European Community languages](https://eupl.eu/).

### Commercial license

For commercial use or closed source projects / "white labeling" I offer a license with the following conditions:

> Worldwide, non-exclusive, non-transferable, non-sublicensable license of Briefing, as found at https:// github.com/holtwick/briefing/, for use in purchaser's products, as long as the resulting software is not in competition with Briefing itself. Any liability is excluded. The law of the Federal Republic of Germany applies exclusively.

The one-time fee is 499 EUR net. Please contact [license@holtwick.de](mailto:license@holtwick.de) or [buy directly via Paddle](https://buy.paddle.com/product/650756).

## Author

My name is Dirk Holtwick. I am an independent software developer based in Germany. Learn more about my work at [holtwick.de](https://holtwick.de/about).

## Contribute

Contributions are always welcome. The best place to start is to add or respond to [Issues](https://github.com/holtwick/briefing/issues).

To add or correct translations, start here: [src/locales](src/locales/).

## Previous version

Version 1.0 was based on Webpack and had examples for iOS, Android, Windows, and Electron, as well as a separate signal server. It also offered background blur and image backgrounds via Unsplash. All of these implementations were deprecated. However, the code is still accessible via the [legacy branch](https://github.com/holtwick/briefing/tree/legacy), but is no longer maintained or supported.

---

This document is also available in [German language](README-de.md).
