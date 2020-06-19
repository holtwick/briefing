<template>
  <div class="help" id="help">
    <div class="text links">

      <h1>Brie.fi/ng</h1>
      <p><strong>Welcome to Briefing. Yet another secure video chat.</strong></p>
      <p>Privacy is the driving force behind this project. It uses secure technologies like <a href='https://webrtc-security.github.io/'>WebRTC</a> to directly connect between participants. The website that provides the web app and mediates
        the communication stores as few data as possible and does not know anything about the contents of established conversations. No accounts are required. No cookies are used.</p>
      <p>The difference between Briefing and most similar projects is, that it does not use a central server that distributes the video streams (<a href='https://webrtcglossary.com/sfu/'>SFU</a>). The advantage of an SFU is that it saves
        bandwidth due to the fact that the own video does not being uploaded to each participant but only once. The SFU can also do more optimizations the clients might not support. But then the video signal is not end-to-end encrypted any
        more i.e. you have to trust the SFU provider. Briefing instead sends data from peer to peer directly (&quot;Mesh&quot;) and therefore the data does not travel over the server under normal operation. The WebRTC peers however still
        trust the signaling server for the authenticity of the peer-to-peer communications encryption in place.
      </p>
      <p><strong>FAQ- Some answers to some questions</strong></p>
      <p><em>Why starting another video conf tool?</em></p>
      <p>During the Corona pandemic I tried to create a peer-to-peer solution for home schooling called <a href='https://peer.school/?ref=peer.school'>peer.school</a>. Although the project has been retired for various reasons, I
        learned
        so much about WebRTC and video/audio communication, that I did want to reuse this knowledge in this project. </p>
      <p><em>Why is it free and Open Source?</em></p>
      <p>Only a free project does not require the user to create an account and unveil payment information, that could be used to identify that person. This is why the project is free and will remain free, as long as no additional costs
        like
        maintaining TURN servers etc. will require some funding. If you want to support me and the project directly you can <a href='https://www.paypal.me/apperdeck'>via PayPal</a>. If you are interested in sponsoring please contact me at
        <a
          href='mailto:briefing@holtwick.de' target='_blank' class='url'>briefing@holtwick.de</a>.</p>
      <p><em>Which servers are actually involved in a call?</em></p>
      <ul>
        <li>Briefing web site (provides the web app)</li>
        <li>Briefing signaling server (coordinates peers in rooms)</li>
        <li>Briefing STUN/TURN server (helps traversing fire walls)</li>
      </ul>
      <p><em>Feature X is missing! Found bug Y!</em></p>
      <p>Please visit the <a href='https://github.com/holtwick/briefing/issues'>GitHub project</a> to see if your request is already on the list or place a <a href='https://github.com/holtwick/briefing/issues/new'>new issue</a>. Your
        contribution is of course welcome as well.</p>
      <p><em>How about native apps?</em></p>
      <p>Frankly this is not required, because your browser can handle it all. You can of course put Briefing on your home screen e.g. in iOS Safari tap on the &quot;Share&quot; icon and choose &quot;Add to Home Screen&quot;. You can do the
        same in browsers like Google Chrome</p>
      <p>---</p>
      <p>
        (C)opyright 2020 by <a href="https://holtwick.de?ref=briefing">Dirk Holtwick</a> |
        <a href="https://holtwick.de/privacy?ref=briefing">Privacy Policy</a> |
        <a href="https://holtwick.de/imprint?ref=briefing">Imprint</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.help {
  background: rgba(232, 239, 242, 1.00);
  color: #272727;
  display: block;
  font-family: "IBM Plex Serif", Georgia, serif;
  line-height: 1.5rem;
  padding-bottom: 4rem;

  .text {
    max-width: 40rem !important;;
    margin-left: auto !important;;
    margin-right: auto !important;;
    text-align: left !important;;
    padding: 1rem !important;;
    padding-top: 4rem !important;
  }

  .text a {
    color: #0088c0 !important;;
    text-decoration: none;
  }

  .text a:hover {
    color: #00b5ff !important;;
  }

  .text a:active {
    color: #99e2ff !important;;
  }
}
</style>

<script>
export default {
  name: 'app-help',
  data() {
    return {}
  },
  methods: {},
  async mounted() {
  },
}
</script>

