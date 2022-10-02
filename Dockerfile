FROM node:16-alpine
COPY . /app
WORKDIR /app
RUN cd /app; npm install --production
CMD ["node", "dist/main.cjs"]
EXPOSE 8080
