/* eslint-disable no-console */
import { z } from 'zod';

import { publicProcedure, router } from '@/trpc/config';

export const helloWorldRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      console.log('Hello', input.text);
      return `Hello ${input.text}`;
    }),
});
