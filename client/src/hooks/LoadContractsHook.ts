import React from 'react'
import Container from 'typedi'
import { MigrationsABI, MigrationsAddress } from '../config'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { UserDataActions } from '../redux/slices/UserData'
import { Migrations } from '../types/Migrations'
import { ContractsInstance } from '../utilities/getContractInstance'
import { getWeb3 } from '../utilities/getWeb3'

const contracts = Container.get(ContractsInstance)

export const LoadContractsHook = ({ setLoaded }: { setLoaded: CallableFunction }) => {
	const [updates, setUpdates] = React.useState(true)

	const isOwner = useAppSelector((state) => state.userDataReducer.isOwner)
	const primaryAccount = useAppSelector((state) => state.userDataReducer.primary)
	const dispatch = useAppDispatch()

	const updateUserData = React.useCallback(
		async (MigrationsInstance: Migrations) => {
			if ((await MigrationsInstance.methods.owner().call()) === primaryAccount) {
				dispatch(UserDataActions.setIsOwner(true))
			}
		},
		[primaryAccount, dispatch]
	)

	const load = React.useCallback(async () => {
		if (primaryAccount && updates) {
			const web3 = await getWeb3()
			const MigrationsInstance = (new web3.eth.Contract(MigrationsABI as any, MigrationsAddress) as unknown) as Migrations

			contracts.set_migration(MigrationsInstance)
			await updateUserData(MigrationsInstance)

			setLoaded(true)
		}
	}, [primaryAccount, updates, setLoaded, updateUserData])

	React.useEffect(() => {
		load()
	}, [load])

	return {
		isOwner,
		updates,
		setUpdates,
	}
}
