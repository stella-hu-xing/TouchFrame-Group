directory_name=`cd $(dirname $0) && pwd`

ansible-playbook $directory_name/touchframe.yaml --extra-vars \
  "hosts=vagrant touchframe_components=[database]"
