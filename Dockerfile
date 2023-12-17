# Please read https://github.com/holtwick/briefing/blob/master/docs/installation/docker.md for proper use of Docker

FROM node:20-alpine
COPY . /app
# COPY docker-package.json /app/package.json
WORKDIR /app
# RUN cd /app && npm install --omit=dev
CMD ["node", "dist/main.cjs"]
EXPOSE 8080

# STUN
EXPOSE 3478
