'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('lastseen').nullable()
      table.integer('bits').defaultTo(0)
      table.integer('credits').defaultTo(0)
      table.timestamp('joined')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
