# coturn for STUN / TURN

> This is only required if you want to set up your own COTURN server.
> Briefing already is connected to an instance of such a server, which is located in Germany at [Hetzner](https://hetzner.cloud/?ref=thK9VpOJK5Sg).
> Alternatively you can also use free STUN servers from Google or others.

Follow these steps: https://community.hetzner.com/tutorials/install-turn-stun-server-on-debian-ubuntu-with-coturn

Additionally:

1. Create a user via `turnadmin -a -u brie -r stun.brie.fi -p fi`
2. Set `/etc/turnserver.conf` to the following:

```ini
listening-port=3478
tls-listening-port=5349

fingerprint
lt-cred-mech

user=brie:fi

server-name:stun.brie.fi
realm=stun.brie.fi

total-quota=100
stale-nonce=600

cert=/etc/letsencrypt/live/stun.brie.fi/cert.pem
pkey=/etc/letsencrypt/live/stun.brie.fi/privkey.pem
cipher-list="ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384"

no-stdout-log

proc-user=turnserver
proc-group=turnserver
```

---

Docker might be an alternative, but I didn't try by myself:

- https://hub.docker.com/r/coturn/coturn
- https://gabrieltanner.org/blog/turn-server

---

Test if it is working:

- https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/
- https://icetest.info/
