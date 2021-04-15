<template>
  <div class="help" id="help">
    <div class="text links">
      <h1>Brie.fi/ng</h1>
      <p>
        <strong>Welcome to Briefing. Yet another secure video chat.</strong>
      </p>
      <p>
        Privacy is the driving force behind this project. It uses secure
        technologies like
        <a href="https://webrtc-security.github.io/">WebRTC</a>
        to directly connect between participants. The website that provides the
        web app and mediates the communication stores as few data as possible
        and does not know anything about the contents of established
        conversations. No accounts are required. No cookies are used.
      </p>
      <p>
        The difference between Briefing and most similar projects is, that it
        does not use a central server that distributes the video streams (<a
          href="https://webrtcglossary.com/sfu/"
          >SFU</a
        >). The advantage of an SFU is that it saves bandwidth due to the fact
        that the own video does not being uploaded to each participant but only
        once. The SFU can also do more optimizations the clients might not
        support. But then the video signal is not end-to-end encrypted any more
        i.e. you have to trust the SFU provider. Briefing instead sends data
        from peer to peer directly (&quot;Mesh&quot;) and therefore the data
        does not travel over the server under normal operation. The WebRTC peers
        however still trust the signaling server for the authenticity of the
        peer-to-peer communications encryption in place.
      </p>
      <p>
        <b>
          Learn more about details at
          <a href="https://github.com/holtwick/briefing/"
            >github.com/holtwick/briefing</a
          >
        </b>
      </p>
      <p><br /></p>
      <p>
        (C)opyright 2020-2021 by
        <a href="/goto/holtwick">Dirk Holtwick</a> |
        <a href="/goto/privacy">Privacy Policy</a> |
        <a href="/goto/imprint">Imprint</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.help {
  background: rgba(232, 239, 242, 1);
  color: #272727;
  display: block;
  font-family: "IBM Plex Serif", Georgia, serif;
  line-height: 1.5rem;
  padding-bottom: 4rem;

  .text {
    max-width: 40rem !important;
    margin-left: auto !important;
    margin-right: auto !important;
    text-align: left !important;
    padding: 1rem !important;
    padding-top: 4rem !important;
  }

  .text a {
    color: #0088c0 !important;
    text-decoration: none;
  }

  .text a:hover {
    color: #00b5ff !important;
  }

  .text a:active {
    color: #99e2ff !important;
  }
}
</style>

<script>
export default {
  name: "app-help",
  data() {
    return {}
  },
  methods: {},
  async mounted() {},
}
</script>
