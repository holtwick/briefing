import { assert_equal } from "./lib/assert"
import {
  digestMessage,
  digestMessages,
  getFingerprintString,
  splitByNChars,
} from "./logic/fingerprint"

console.log("test")

// import { Logger } from "./lib/logger"
// const log = Logger("test:browser")

const sample =
  "v=0\r\no=- 307404001895177377 3 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0 1 2\r\na=msid-semantic: WMS w2zFUW5ETCVD3fSwsQPWihmgq1QtZugeID8D\r\nm=application 50041 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 169.254.123.65\r\nb=AS:30\r\na=candidate:3575507499 1 udp 2122260223 169.254.123.65 50041 typ host generation 0 network-id 3\r\na=candidate:2479012131 1 udp 2122197247 2a02:908:89b:60:988:92ae:a532:559d 50042 typ host generation 0 network-id 2 network-cost 10\r\na=candidate:3030907853 1 udp 2122129151 192.168.0.241 61982 typ host generation 0 network-id 1 network-cost 10\r\na=ice-ufrag:zQTh\r\na=ice-pwd:dL3JIT+IjMc5lqeKvRqZCdaa\r\na=ice-options:trickle\r\na=fingerprint:sha-256 6C:5D:F3:0F:72:12:76:01:D3:ED:32:9D:EE:61:84:1E:D6:9C:C3:17:38:BD:A4:91:FC:43:FC:87:03:A0:CB:AC\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\nm=audio 9 UDP/TLS/RTP/SAVPF 109 9 0 8 101\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:zQTh\r\na=ice-pwd:dL3JIT+IjMc5lqeKvRqZCdaa\r\na=ice-options:trickle\r\na=fingerprint:sha-256 6C:5D:F3:0F:72:12:76:01:D3:ED:32:9D:EE:61:84:1E:D6:9C:C3:17:38:BD:A4:91:FC:43:FC:87:03:A0:CB:AC\r\na=setup:active\r\na=mid:1\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=sendrecv\r\na=msid:w2zFUW5ETCVD3fSwsQPWihmgq1QtZugeID8D 0408a99e-c357-4f60-85a9-299459678f24\r\na=rtcp-mux\r\na=rtpmap:109 opus/48000/2\r\na=fmtp:109 minptime=10;useinbandfec=1\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=ssrc:1185745839 cname:Sq7x5BjdM1thhRzt\r\nm=video 9 UDP/TLS/RTP/SAVPF 120 121\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:zQTh\r\na=ice-pwd:dL3JIT+IjMc5lqeKvRqZCdaa\r\na=ice-options:trickle\r\na=fingerprint:sha-256 6C:5D:F3:0F:72:12:76:01:D3:ED:32:9D:EE:61:84:1E:D6:9C:C3:17:38:BD:A4:91:FC:43:FC:87:03:A0:CB:AC\r\na=setup:active\r\na=mid:2\r\na=extmap:5 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:4 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=sendrecv\r\na=msid:w2zFUW5ETCVD3fSwsQPWihmgq1QtZugeID8D 188a1334-5f04-422e-82f0-e5bb6102f9c4\r\na=rtcp-mux\r\na=rtpmap:120 VP8/90000\r\na=rtcp-fb:120 goog-remb\r\na=rtcp-fb:120 ccm fir\r\na=rtcp-fb:120 nack\r\na=rtcp-fb:120 nack pli\r\na=rtpmap:121 VP9/90000\r\na=rtcp-fb:121 goog-remb\r\na=rtcp-fb:121 ccm fir\r\na=rtcp-fb:121 nack\r\na=rtcp-fb:121 nack pli\r\na=fmtp:121 profile-id=0\r\na=ssrc:3405577348 cname:Sq7x5BjdM1thhRzt\r\n"

async function inBrowserTest() {
  const fp = getFingerprintString(sample)
  assert_equal(
    fp,
    "a=fingerprint:sha-256 6C:5D:F3:0F:72:12:76:01:D3:ED:32:9D:EE:61:84:1E:D6:9C:C3:17:38:BD:A4:91:FC:43:FC:87:03:A0:CB:AC"
  )
  assert_equal(await digestMessage(fp), "MT2AATY56")

  assert_equal(splitByNChars("MT2AATY56"), "MT2-AAT-Y56")

  let r1 = await digestMessages("abc", fp)
  let r2 = await digestMessages(fp, "abc")
  assert_equal(r1, r2)
}

inBrowserTest()
