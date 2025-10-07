'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/data', async function (request, reply) {
    return { message: 'Привет от Fastify API!', data: { id: 1, name: 'Timeweb Cloud' } }
  })
}
