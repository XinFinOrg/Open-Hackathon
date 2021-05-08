import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoadContractsHook } from './hooks/LoadContractsHook'
import { useAppSelector } from './redux/hooks'

export const LoadContracts: React.FC<{}> = () => {
	const [loaded, setLoaded] = useState(false)
	LoadContractsHook({ setLoaded })

	// const update = async () => {
	// Call update
	// 	setUpdates(false)
	// 	setUpdates(true)
	// }
	return <Fragment>{loaded && <Routes />}</Fragment>
}

export const Routes: React.FC = () => {
	const isOwner = useAppSelector((state) => state.userDataReducer.isOwner)
	console.log(isOwner)
	return (
		<>
			<Router>
				<Switch>
					<Route path='/'>Index</Route>
				</Switch>
			</Router>
		</>
	)
}
