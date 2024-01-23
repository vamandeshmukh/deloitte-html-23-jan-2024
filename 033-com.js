
const { Network, cidrSubnet } = require('ip');
const network = new Network('192.168.0.0/24');
const subnets = network.subnets(1);
subnets.forEach(subnet => {
    console.log(subnet);
});
