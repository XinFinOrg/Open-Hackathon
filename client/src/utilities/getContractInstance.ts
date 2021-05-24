import { Service } from 'typedi'
import { Migrations } from '../types/Migrations'

@Service()
export class ContractsInstance {
	private migrations: Migrations | null
	constructor() {
		this.migrations = null
	}

	set_migration(migrations: Migrations) {
		this.migrations = migrations
	}

	get_migration(): Migrations {
		if (this.migrations) return this.migrations
		else throw new Error('Migrations not initialized.')
	}
}
