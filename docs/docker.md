# Docker

The easiest way to install Briefing is by using Docker.

1. Run `npm run build:docker` to create all files needed.
2. Copy the newly generated folder `docker` to the server.
3. On the server go inside the `docker` folder
4. Run `docker-compose up -d --build`

## Debug

To stop run `docker-compose down`.

In case of problems try to start without the `-d` flag to see logs, like `docker-compose up --build`.

Once built, you can also leave out the `--build` flag.

All dynamic data goes into the `data` folder. Currently, only a log file of the signal server is available.

## Proxy

We recommend using a proxy to easily support safe `https`, which is required to get the camera and audio working on client side.

A good proxy is [nginxproxymanager.com](https://nginxproxymanager.com/).

In order to get it working add these lines to `docker-compose.yml`:

```yml
networks:
  default:
    external:
      name: proxy
```

In the manager itself use `briefing` as the service name and port `8080`.
