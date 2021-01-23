# Brie.fi/ng

> Secure video chat via pure WebRTC

<img src="assets/sample.jpg" height="400">

Privacy is the driving force behind this project. It uses secure technologies like [WebRTC](https://webrtc-security.github.io/) to directly connect between participants. The website that provides the web app and mediates the communication stores as few data as possible and does not know anything about the contents of established conversations. No accounts are required. No cookies are used.

The difference between Briefing and most similar projects is, that it does not use a central server that distributes the video streams ([SFU](https://webrtcglossary.com/sfu/)). The advantage of an SFU is that it saves bandwidth due to the fact that the own video does not being uploaded to each participant but only once. The SFU can also do more optimizations the clients might not support. But then the video signal is not end-to-end encrypted any more i.e. you have to trust the SFU provider. Briefing instead sends data from peer to peer directly ("Mesh") and therefore the data does not travel over the server under normal operation. The WebRTC peers however still trust the signaling server for the authenticity of the peer-to-peer communications encryption in place.

## FAQ

_Why starting another video conf tool?_

During the Corona pandemic I tried to create a peer-to-peer solution for home schooling called [peer.school](https://peer.school/?referrer=peer.school). Although the project has been retired for various reasons, I learned so much about WebRTC and video/audio communication, that I did want to reuse this knowledge in this project.

_Why is it free and Open Source?_

Only a free project does not require the user to create an account and unveil payment information, that could be used to identify that person. This is why the project is free and will remain free, as long as no additional costs like maintaining TURN servers etc. will require some funding. If you want to support me and the project directly you can [via Github](https://github.com/sponsors/holtwick) or [via PayPal](https://www.paypal.me/apperdeck). If you are interested in sponsoring please contact me at briefing@holtwick.de.

_Which servers are actually involved in a call?_

- Briefing web site (provides the web app)
- Briefing signaling server (coordinates peers in rooms)
- Briefing STUN/TURN server (helps traversing fire walls)

_Feature X is missing! Found bug Y!_

Please visit the [GitHub project](https://github.com/holtwick/briefing/issues) to see if your request is already on the list or place a [new issue](https://github.com/holtwick/briefing/issues/new). Your contribution is of course welcome as well.

_How about native apps?_

Frankly this is not required, because your browser can handle it all. You can of course put Briefing on your home screen e.g. in iOS Safari tap on the "Share" icon and choose "Add to Home Screen". You can do the same in browsers like Google Chrome.

## Installation

You can just use the installation on <https://brie.fi/ng> for free.

But in case you want to run it locally, you will need to follow these steps:

TO BE WRITTEN

## License

Briefing is free and can be modified and forked. But the conditions of the EUPL (European Union Public License 1.2) need to be respected, which are similar to ones of the GPL. In particular modifications need to be free as well and made available to the public.

For commercial use please contact [license@holtwick.de](mailto:license@holtwick.de) for licensing alternatives.

Get a quick overview of the license at [Choose an open source license](https://choosealicense.com/licenses/eupl-1.2/). This license is available in the [languages of the European Community](https://eupl.eu/).

_Author_

My name is Dirk Holtwick. I'm an independent software developer located in Germany. Learn more at [holtwick.de](https://holtwick.de/about).
 