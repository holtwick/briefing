---
date: 2022-09-30
title: Briefing 2.0
---

# Briefing 2.0

Briefing was created two years ago at the beginning of the Corona pandemic. Thanks to its simple, open structure, it quickly became popular and has now almost reached the thousand star mark on Github. A lot has happened technically in that time, so I've modernized the code and brought it up to current technical standards.

## Vite instead of Webpack

First, [Webpack](https://webpack.js.org/) was replaced by [Vite](https://vitejs.dev/). Vite is the build tool of choice for today's web projects. It is blazingly fast and allows a whole new way of developing, where the result is already visible in the browser the moment the code is saved. It also supports [Typescript](https://www.typescriptlang.org/) out-of-the-box and thus Briefing can now be easily migrated to this language.

## Zerva as server substructure

The signing server was previously separate from the client side code of Briefing. In recent years I have been pushing the open source project [Zerva](https://github.com/holtwick/zerva), which greatly simplifies development on the server side.

First, because it works with "events" so that each component can deploy where it is needed. Second, because the interaction with Vite and Vue has been optimized. Zerva integrates Vite into its process and just one call launches both the server and the website. The best of both worlds including hot reload on both sides.

So it is logical that the Signaling Server has now been implemented in Zerva. Also [socket.io](https://socket.io/) could finally be put to rest, because Zerva brings its own websocket implementation, which is characterized by a very robust polling, so that connections can hardly be lost.

## Outlook

Technically, the modernization of Vue 2 to 3 and a more extensive use of Typescript, for the quality assurance of the code, remains on the agenda.

**The code is available as open source as before at <https://github.com/holtwick/briefing/> and the app for free use at <https://brie.fi/ng>.**
