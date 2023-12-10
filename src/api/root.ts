import { router } from '@/trpc/config';

import { helloWorldRouter } from './routers/helloWorld';

export const appRouter = router({
  helloWorld: helloWorldRouter,
});

export type AppRouter = typeof appRouter;
