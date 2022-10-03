# Docker

A public docker image is available via [hub.docker.com/r/holtwick/briefing](https://hub.docker.com/r/holtwick/briefing).

Use it like this:

```sh
docker run -d -p 8080:8080 holtwick/briefing
```

If running locally, you can now access it via <http://localhost:8080>.

For production installation I recommend using a [proxy](#proxy) and consider making a `docker-compose.yml`.

**Important! If not running locally in order to get camera and audio access working, an [SSL connection is required](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#privacy_and_security)!**

Video with a quick walkthrough:

[![](https://img.youtube.com/vi/YFwlnkRVmPc/0.jpg)](https://www.youtube.com/watch?v=YFwlnkRVmPc)

## Configuration

Further configuration is currently not required ;)

## Alternative: Build locally

The easiest way to install Briefing is by using Docker.

1. Run `npm run build:docker` to create all files needed.
2. Copy the newly generated folder `docker` to the server.
3. On the server go inside the `docker` folder
4. Run `docker compose up -d --build`

## Debug

To stop run `docker compose down`.

In case of problems try to start without the `-d` flag to see logs, like `docker compose up --build`.

Once built, you can also leave out the `--build` flag.

All dynamic data goes into the `data` folder. Currently, only a log file of the signal server is available.

## Proxy

We recommend using a proxy to easily support safe `https`, which is required to get the camera and audio working on client side.

A good proxy is [nginxproxymanager.com](https://nginxproxymanager.com/).

You can find the required `docker-compose.yml` files in the [examples](examples) folder.

See this video for details step by step:

[![](https://img.youtube.com/vi/KIpB6rlxRsE/0.jpg)](https://www.youtube.com/watch?v=KIpB6rlxRsE)
