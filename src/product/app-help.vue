<script>
import { gotoUrl } from './external-links'

export default {
  name: 'AppHelp',
  data() {
    return {}
  },
  async mounted() {},
  methods: {
    gotoUrl,
  },
}
</script>

<template>
  <div id="help" class="help">
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
        >SFU</a>). The advantage of an SFU is that it saves bandwidth due to the fact
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
          <a href="https://github.com/holtwick/briefing/">github.com/holtwick/briefing</a>
        </b>
      </p>
      <p><br></p>
      <p>
        (C)opyright 2020-2022 by
        <a :href="gotoUrl('holtwick')">Dirk Holtwick</a> |
        <a :href="gotoUrl('privacy')">Privacy Policy</a> |
        <a :href="gotoUrl('imprint')">Imprint</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@import 'app-help.scss';
</style>
