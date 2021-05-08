import React from 'react'

import './App.css'
import { MetaMaskHook } from './hooks/MetaMaskHook'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { UserDataActions } from './redux/slices/UserData'
import { getAccounts } from './utilities/getWeb3'
import { LoadContracts } from './Routes'

function App() {
	const { accounts, setAccounts } = MetaMaskHook()

	const primaryAccount = useAppSelector((state) => state.userDataReducer.primary)
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		if (accounts[0]) {
			dispatch(UserDataActions.setPrimaryAccount(accounts[0]))
		}
	}, [accounts, dispatch])

	React.useEffect(() => {
		if (primaryAccount) {
			console.log(primaryAccount)
		}
	}, [primaryAccount])

	const connectWallet = async () => {
		setAccounts(await getAccounts())
	}

	return (
		<>
			<div className='App'>
				{primaryAccount ? (
					<>
						<div>Connected Wallet: {primaryAccount}</div>
						<LoadContracts></LoadContracts>
					</>
				) : (
					<button
						onClick={() => {
							connectWallet()
						}}
					>
						Connect Wallet
					</button>
				)}
			</div>
		</>
	)
}

export default App
