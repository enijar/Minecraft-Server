#!/usr/bin/env bash

TIME=`date +%b-%d-%y-%H-%M`
FILENAME=backup-${TIME}.tar.gz

SRCDIR=/home/$(whoami)/minecraft-server/world
DESDIR=/tmp

BUCKETNAME=enijar-minecraft-server
FOLDER=world-backups

echo "${TIME} => Backing up Minecraft world"

tar -zcvf ${DESDIR}/${FILENAME} ${SRCDIR}

echo "${TIME} => Uploading to S3"

aws s3 cp ${DESDIR}/${FILENAME} s3://${BUCKETNAME}/${FOLDER}/${FILENAME}

echo "${TIME} => Backup complete"

rm -rf ${DESDIR}/${FILENAME}

echo "${TIME} => Cleanup complete"
