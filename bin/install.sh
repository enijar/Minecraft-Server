#!/usr/bin/env bash

cd server/

# Download Spigot build tools
curl -O https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/artifact/target/BuildTools.jar

# Install Spigot server
java -jar BuildTools.jar

# Agree to EULA
echo "eula=true" > eula.txt

# Install plugins
cd plugins/

# Scriptcraft
curl -O https://scriptcraftjs.org/download/latest/scriptcraft-3.2.1/scriptcraft.jar

# Scriptcraft
curl -O https://dev.bukkit.org/projects/worldedit/files/latest

# Install Node.JS dependencies and run build scripts
cd ../../
npm install
npm run build

# Restart Spigot server
cd server/
java -jar spigot-1.12.2.jar
