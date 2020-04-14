Brie.fi/ng

Welcome to Briefing. Yet another secure video chat. 

Privacy is the driving force behind this project. It uses secure technologies like WebRTC to directly connect between participants. The website that provides the web app and mediates the communication stores as few data as possible and does not know anything about the contents of established conversations. No accounts are required. No cookies are used.

The difference between Briefing and most similar projects is, that it does not use a central server that distributes the video streams (SFU). The advantage of an SFU is that it saves bandwidth due to the fact that the own video does not being uploaded to each participant but only once. The SFU can also do more optimizations the clients might not support. But then the video signal is not end-to-end encrypted any more i.e. you have to trust the SFU provider. Briefing instead sends data from peer to peer directly ("Mesh") and is therefore end-to-end encrypted by default by WebRTC implementations.

What was the motivation to start Briefing?

During the Corona pandemic I tried to create a peer-to-peer solution for home schooling called peer.school. Although the project has been retired for various reasons, I learned so much about WebRTC and video/audio communication, that I did want to reuse this knowledge in this project. 

Why is it free?

Only a free project does not require the user to create an account and unveil payment information, that could be used to identify that person. This is why the project is free and will remain free, as long as no additional costs like maintaining TURN servers etc. will require some funding. If you want to support me and the project directly you can via PayPal. If you are interested in sponsoring please contact me at briefing@holtwick.de.

Which servers are actually involved in a call?

- Briefing web site
- Briefing singaling server
- Google STUN server (subject to change, see #) 

Feature X is missing! Found bug Y!

Please visit the GitHub project to see if your request is already on the list or place a new issue. 


