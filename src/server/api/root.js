import { createTRPCRouter } from '@/server/api/trpc';
import { helloWorldRouter } from './routers/helloWorld';
export const appRouter = createTRPCRouter({
    helloWorld: helloWorldRouter,
});
