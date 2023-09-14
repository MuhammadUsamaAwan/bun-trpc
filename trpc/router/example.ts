import { router, publicProcedure } from '@/trpc';

export const exampleRouter = router({
  getHello: publicProcedure.query(() => {
    return 'Hello from TRPC and Bun!';
  }),
});
