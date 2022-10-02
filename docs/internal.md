# Internal Topics

> The following is only of interest of maintainers of Briefing repository.

## Docker Hub

### Multi Platform Building

`docker buildx` is used to generate Docker images for various platforms. See [documentation](https://docs.docker.com/build/building/multi-platform/) for details, especially about [launching a builder](https://docs.docker.com/build/building/multi-platform/#getting-started) like this:

```sh
docker buildx create --name mybuilder --driver docker-container --bootstrap
docker buildx use mybuilder
```

Publish to docker using the following command:

```
npm run upload:dockerhub
```

## Running the production site

The production site is run by Docker, but [docker-compose.development.yml](../docker-compose.development.yml) is used. It builds the docker image locally and stores `www` and `dist` outside the image, i.e. updates to HTML only does not require a restart of the service. It also logs some high level info to `data/data/zerva.log`. Updates are uploaded using `rsync`. All is combined in the following call:

```sh
npm run upload:production
```

## Build modes

Vite allows different _modes_, see [Vite documentation] for details.
