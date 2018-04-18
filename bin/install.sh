#!/usr/bin/env bash

cd server

# Download Spigot build tools
curl -O https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/artifact/target/BuildTools.jar

# Install Spigot server
java -jar BuildTools.jar

# Agree to EULA
echo "eula=true" > eula.txt

# Download ScriptCraft plugin
curl -O https://scriptcraftjs.org/download/latest/scriptcraft-3.2.1/scriptcraft.jar

# Move scriptcraft.jar to plugins directory
mv plugins/scriptcraft.jar

# Copy build/plugins.js to ScriptCraft plugins
cp build/plugins.js server/scriptcraft/plugins

# Restart Spigot server
java -jar spigot-1.12.2.jar
