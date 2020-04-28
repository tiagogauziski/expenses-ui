#!/bin/bash
set -ev
set -x

TAG=$TRAVIS_TAG
BRANCH=$TRAVIS_BRANCH

# Remove a leading v from the major version number (e.g. if the tag was v1.0.0)
IFS='.' read -r -a tag_array <<< "$TAG"
MAJOR="${tag_array[0]//v}"
MINOR=${tag_array[1]}
BUILD=${tag_array[2]}
SEMVER="$MAJOR.$MINOR.$BUILD"

# Build the Docker images
docker build -t $DOCKER_IMAGE_NAME .

# Login to Docker Hub and upload images
docker login $DOCKER_REGISTRY --username $DOCKER_LOGIN --password $DOCKER_PASSWORD

if test -z "$TAG"
then
    echo "Building from tag $TAG"
    
    docker tag $DOCKER_IMAGE_NAME $DOCKER_IMAGE_NAME:$SEMVER
    docker tag $DOCKER_IMAGE_NAME $DOCKER_IMAGE_NAME:latest

    docker push $DOCKER_IMAGE_NAME:$SEMVER
    docker push $DOCKER_IMAGE_NAME:latest
else
    echo "Building from branch $BRANCH"

    docker tag $DOCKER_IMAGE_NAME $DOCKER_IMAGE_NAME:$BRANCH

    docker push $DOCKER_IMAGE_NAME:$BRANCH
fi
