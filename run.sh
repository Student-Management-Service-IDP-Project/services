#!/bin/bash

# Directory path
dir_path="./database/data"

# Check if the directory exists
if [ -d "$dir_path" ]; then
    # If the directory exists, delete it
    rm -rf "$dir_path"
    echo "Deleted existing directory: $dir_path"
fi

# Create a new directory
mkdir "$dir_path"

# Init swarm
docker swarm init
docker stack deploy -c docker-compose.yml schoolstack
