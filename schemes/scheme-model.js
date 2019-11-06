const knex = require('knex')

const config = require('../knexfile')

const db = knex(config.development)

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}

function find() {
    // Calling find returns a promise that resolves to an array of all schemes in the database.
    return db('schemes')
}

function findById(id) {
    // Calling findById returns a promise that resolves to an a single scheme object. On an invalid `id`, resolves to `null`.
    return db('schemes').where({ id }).first()
}

