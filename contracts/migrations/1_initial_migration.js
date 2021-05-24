const { writeFileSync } = require('fs')

const { join, resolve } = require('path')
require('dotenv').config({
	path: join(__dirname, '..', '.env'),
})

const Migrations = artifacts.require('Migrations')

const file_path = process.env.FILE_PATH ? join(resolve(process.env.FILE_PATH), 'addresses.json') : join(__dirname, '..', 'addresses.json')

let data = {}

module.exports = function (deployer) {
	deployer.deploy(Migrations).then((m) => {
		data['migrations'] = m.address
		writeFileSync(file_path, JSON.stringify(data, undefined, 4))
	})
}
