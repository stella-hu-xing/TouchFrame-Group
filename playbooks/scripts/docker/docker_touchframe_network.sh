# Auto Configuring "touchframe" network for docker
exist=$(docker network ls | awk '{print $2}' | grep touchframe)

if [ -z $exist ]; then
  docker network create touchframe
fi
