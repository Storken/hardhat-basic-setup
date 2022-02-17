async function main () {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contracts with the account:', deployer.address)

  const Contract = await ethers.getContractFactory('BasicContract')
  const contract = await Contract.deploy()
  console.log('contract address:', contract.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
