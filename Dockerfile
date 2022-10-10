# Please read https://github.com/holtwick/briefing/blob/master/docs/docker.md for proper use of Docker

FROM node:16-alpine
COPY . /app
WORKDIR /app
RUN cd /app; npm install --production
CMD ["node", "dist/main.cjs"]
EXPOSE 8080

# STUN
EXPOSE 3478
