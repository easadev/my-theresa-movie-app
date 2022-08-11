import path from 'node:path';

import { PUBLIC_PATH } from '../../build-config';
import { indexHandler } from './handlers/index-handler';
import { movieDetailHandler  } from './handlers/movie-detail-handler';

const fastify = require('fastify')({ logger: true });


fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, PUBLIC_PATH),
  prefix: `/${PUBLIC_PATH}/`, // optional: default '/'
})

fastify.get('/', async (request, reply) => {
  await indexHandler(request, reply);
});

fastify.get('/wish-list', async(request, reply) => {
  await indexHandler(request, reply);
});

fastify.get('/category/:category/:movieId', async (request, reply) => {
  await movieDetailHandler(request, reply);
});




const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();