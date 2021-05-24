import Container, { Service } from 'typedi'
import Web3 from 'web3'
// eslint-disable-next-line

@Service()
export class Web3Instance {
	private instance: Web3 | null = null

	async getWeb3(): Promise<Web3> {
		if (this.instance === null) {
			try {
				await window.ethereum.enable()
				this.instance = new Web3(Web3.givenProvider || 'http://localhost:8545')
			} catch (error) {
				throw error
			}
		}
		return this.instance
	}
}

export async function getWeb3(): Promise<Web3> {
	return Container.get(Web3Instance).getWeb3()
}

export async function getAccounts() {
	const web3 = await getWeb3()
	return web3.eth.getAccounts()
}
