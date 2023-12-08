import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import type { AppRouter } from '@/server/api/root';

import { transformer } from './shared';

export const client = createTRPCProxyClient<AppRouter>({
  transformer,
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',

      //   // You can pass any HTTP headers you wish here
      //   async headers() {
      //     return {
      //       authorization: getAuthCookie(),
      //     };
      //   },
    }),
  ],
});
