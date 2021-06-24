import {
  digestMessage,
  getCompactChecksum,
  getFingerprint,
} from "./fingerprint"

describe("Fingerprint", () => {
  const sample =
    "v=0\r\no=- 307404001895177377 3 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0 1 2\r\na=msid-semantic: WMS w2zFUW5ETCVD3fSwsQPWihmgq1QtZugeID8D\r\nm=application 50041 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 169.254.123.65\r\nb=AS:30\r\na=candidate:3575507499 1 udp 2122260223 169.254.123.65 50041 typ host generation 0 network-id 3\r\na=candidate:2479012131 1 udp 2122197247 2a02:908:89b:60:988:92ae:a532:559d 50042 typ host generation 0 network-id 2 network-cost 10\r\na=candidate:3030907853 1 udp 2122129151 192.168.0.241 61982 typ host generation 0 network-id 1 network-cost 10\r\na=ice-ufrag:zQTh\r\na=ice-pwd:dL3JIT+IjMc5lqeKvRqZCdaa\r\na=ice-options:trickle\r\na=fingerprint:sha-256 6C:5D:F3:0F:72:12:76:01:D3:ED:32:9D:EE:61:84:1E:D6:9C:C3:17:38:BD:A4:91:FC:43:FC:87:03:A0:CB:AC\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\nm=audio 9 UDP/TLS/RTP/SAVPF 109 9 0 8 101\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:zQTh\r\na=ice-pwd:dL3JIT+IjMc5lqeKvRqZCdaa\r\na=ice-options:trickle\r\na=fingerprint:sha-256 6C:5D:F3:0F:72:12:76:01:D3:ED:32:9D:EE:61:84:1E:D6:9C:C3:17:38:BD:A4:91:FC:43:FC:87:03:A0:CB:AC\r\na=setup:active\r\na=mid:1\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=sendrecv\r\na=msid:w2zFUW5ETCVD3fSwsQPWihmgq1QtZugeID8D 0408a99e-c357-4f60-85a9-299459678f24\r\na=rtcp-mux\r\na=rtpmap:109 opus/48000/2\r\na=fmtp:109 minptime=10;useinbandfec=1\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=ssrc:1185745839 cname:Sq7x5BjdM1thhRzt\r\nm=video 9 UDP/TLS/RTP/SAVPF 120 121\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:zQTh\r\na=ice-pwd:dL3JIT+IjMc5lqeKvRqZCdaa\r\na=ice-options:trickle\r\na=fingerprint:sha-256 6C:5D:F3:0F:72:12:76:01:D3:ED:32:9D:EE:61:84:1E:D6:9C:C3:17:38:BD:A4:91:FC:43:FC:87:03:A0:CB:AC\r\na=setup:active\r\na=mid:2\r\na=extmap:5 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:4 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=extmap:3 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=sendrecv\r\na=msid:w2zFUW5ETCVD3fSwsQPWihmgq1QtZugeID8D 188a1334-5f04-422e-82f0-e5bb6102f9c4\r\na=rtcp-mux\r\na=rtpmap:120 VP8/90000\r\na=rtcp-fb:120 goog-remb\r\na=rtcp-fb:120 ccm fir\r\na=rtcp-fb:120 nack\r\na=rtcp-fb:120 nack pli\r\na=rtpmap:121 VP9/90000\r\na=rtcp-fb:121 goog-remb\r\na=rtcp-fb:121 ccm fir\r\na=rtcp-fb:121 nack\r\na=rtcp-fb:121 nack pli\r\na=fmtp:121 profile-id=0\r\na=ssrc:3405577348 cname:Sq7x5BjdM1thhRzt\r\n"

  it("should extract fingerprints", () => {
    let fp = getFingerprint(sample)
    expect(fp).toEqual([
      108, 93, 243, 15, 114, 18, 118, 1, 211, 237, 50, 157, 238, 97, 132, 30,
      214, 156, 195, 23, 56, 189, 164, 145, 252, 67, 252, 135, 3, 160, 203, 172,
    ])
    expect(fp.length).toBe(32)
    expect(fp[0]).toBe(0x6c)
    expect(fp[31]).toBe(0xac)
  })

  const fp1 = [
    196, 63, 157, 83, 90, 81, 216, 2, 61, 173, 111, 209, 137, 47, 209, 98, 15,
    75, 225, 185, 174, 170, 36, 22, 3, 128, 144, 55, 41, 185, 35, 135,
  ]
  const fp2 = [
    31, 164, 75, 163, 111, 6, 101, 24, 183, 133, 185, 32, 172, 146, 3, 194, 192,
    106, 134, 93, 187, 49, 70, 53, 146, 65, 156, 119, 226, 86, 16, 136,
  ]

  it("should calc checksum", () => {
    // Always 4 digits
    expect("123".padStart(4, "0")).toBe("0123")

    // Single tests
    expect(getCompactChecksum(fp1)).toBe("397c")
    expect(getCompactChecksum(fp2)).toBe("c264")

    // Multiple, random order
    expect(getCompactChecksum(fp1, fp2)).toBe("fbe0")
    expect(getCompactChecksum(fp2, fp1)).toBe("fbe0")
  })
})
