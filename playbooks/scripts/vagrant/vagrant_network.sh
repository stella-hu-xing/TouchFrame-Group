# Vagrant Network Setup
directory_name=`cd $(dirname $0) && pwd`

vboxnet=`vboxmanage list hostonlyifs | grep "^Name:" | awk '{print $2}'`

if ! [[ $vboxnet =~ vboxnet0 ]]; then
  vboxmanage create
fi

vboxnet=`vboxmanage list hostonlyifs | grep "^Name:" | awk '{print $2}'`
vboxip=`vboxmanage list hostonlyifs | grep "^IPAddress:" | awk '{print $2}'`
vboxmask=`vboxmanage list hostonlyifs | grep "^NetworkMask:" | awk '{print $2}'`

vboxnet=(`echo $vboxnet`)
vboxip=(`echo $vboxip`)
vboxmask=(`echo $vboxmask`)

if [[ -z ${vboxnet[0]} ]]; then
  vip=${vboxip[1]}
  vboxnet=${vboxnet[1]}
  vboxip=${vboxip[1]}
  vboxmask=${vboxmask[1]}
else
  vip=${vboxip[0]}
  vboxnet=${vboxnet[0]}
  vboxip=${vboxip[0]}
  vboxmask=${vboxmask[0]}
fi

# pick a random ip for the vagrant VM
vip_arr=(`echo ${vip//./ }`)
vip_start=$((vip_arr[3] + 1))
vip_end=255

args=$@
for arg in $args; do
  arg_arr=(${arg//=/ })
  case ${arg_arr[0]} in
    --vip_end) vip_end=${arg_arr[1]};;
    *);;
  esac
done

vip_arr[3]=`shuf -i ${vip_start}-${vip_end} -n 1`

# workout net gateway of the network
net_arr=(`echo ${vip//./ }`)
net_arr[3]=0

# assign net gateway and random ip to variable
vnet=${net_arr[@]}
vnet=${vnet// /.}
vip=${vip_arr[@]}
vip=${vip// /.}

repo_path=`cd ${directory_name} && cd .. && cd .. && cd .. && pwd`
echo ${directory_name}
echo ${repo_path}

# attach the vagrant vm to the vagrant network
ansible-playbook ${directory_name}/vagrant.yaml \
  --extra-vars "vip=${vip} \
  repo_path=${repo_path} vboxnet=${vboxnet} vboxip=${vboxip} \
  vboxmask=${vboxmask} vnet=${vnet}"
