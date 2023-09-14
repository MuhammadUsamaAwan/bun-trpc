import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/trpc/router';
import { createContext } from '@/trpc';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/trpc',
    req,
    router: appRouter,
    createContext,
  });

const server = Bun.serve({
  port: 5000,
  fetch(req) {
    return handler(req);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
