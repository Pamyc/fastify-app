'use strict'

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')

module.exports = async function (fastify, opts) {
  // Разрешаем CORS для фронтенда
  fastify.register(require('@fastify/cors'), {
    origin: '*'
  })

  // Загружаем плагины
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // Загружаем маршруты
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

module.exports.options = {}
