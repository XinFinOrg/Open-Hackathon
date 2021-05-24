import React from 'react'

import { getAccounts } from '../utilities/getWeb3'

/**
 * Hook for Metamask connection.
 */
export const MetaMaskHook = () => {
	const [accounts, setAccounts] = React.useState<string[]>([])

	async function run() {
		try {
			setAccounts(await getAccounts())
		} catch (err) {
			console.error(err)
			if (err.code) {
				if (err.code === -32002) {
					alert('Pending approval')
				}
				if (err.code === 4001) {
					alert('Please connect wallet to continue')
				}
			}
		}
	}

	React.useEffect(() => {
		run()
	}, [])

	return { accounts, setAccounts }
}
