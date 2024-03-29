module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId,
    getUnnamedAccounts,
    }) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    console.log("Contract deployed to address:", deployer);

    // Deploy "NFT" if the contract was never deployed or if the code has changed since the last deployment
    await deploy('NFT', {
        from: deployer,
        gasLimit:  4000000 ,
        args: [],
        log: true,
    });
};