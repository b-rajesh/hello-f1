#!/bin/bash
sudo mv /tmp/src /usr/src/app/
sudo mv /tmp/package.json /usr/src/app/
sudo apt update
sudo apt install -y nodejs npm
sudo node -v
cd /usr/src/app/ && npm install

