var MassVestingSender = artifacts.require("MassVestingSender");

var keys = require('../keys');

module.exports = function(deployer)
{
	deployer.deploy(MassVestingSender, {gas: 4200000, from: keys.owner});
}


