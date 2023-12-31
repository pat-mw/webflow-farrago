import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

// export const helloWorldRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(
//       z.object({
//         text: z.string(),
//       })
//     )
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),
// });

export const helloWorldRouter = createTRPCRouter({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => `Hello, ${input.text}!`),
});
