import { initTRPC } from '@trpc/server';
import type { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createContext(opts: CreateHTTPContextOptions) {
  return {};
}
type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();

export const publicProcedure = t.procedure;
export const { router } = t;
