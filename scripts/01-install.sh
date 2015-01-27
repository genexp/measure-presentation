#!/bin/bash

# Install
brew install influxdb
ln -sfv /usr/local/opt/influxdb/*.plist ~/Library/LaunchAgents

# Fix permissions
sudo chown root /usr/local/opt/influxdb/homebrew.mxcl.influxdb.plist
sudo chmod 600 /usr/local/opt/influxdb/homebrew.mxcl.influxdb.plist

# Start
sudo launchctl load ~/Library/LaunchAgents/homebrew.mxcl.influxdb.plist
