#/bin/sh

rm -rf docker

mkdir -p docker
mkdir -p docker/data

cp -a Dockerfile docker
cp -a docker-package.json docker/package.json
cp -a dist docker
cp -a www docker
cp docs/docker.md docker/README.md
cp scripts/app.js docker

echo ""
echo "**********************************************"
echo "Find the Docker files in the ./docker/ folder."
echo "**********************************************"