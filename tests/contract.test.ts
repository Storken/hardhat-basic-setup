import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('Deploy', () => {
  it('Deploys correctly', async () => {
    const Contract = await ethers.getContractFactory(
      'BasicContract'
    )
    const contract = await Contract.deploy()
    await contract.deployed()
    expect(contract.address).to.not.be.empty
  })
})
