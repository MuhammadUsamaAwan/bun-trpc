import { initTRPC, TRPCError } from '@trpc/server';

export const createContext = () => ({});

const t = initTRPC.context<typeof createContext>().create();

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
