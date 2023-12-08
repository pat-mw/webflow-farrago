import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
// import { transformer } from './shared';
import superjson from 'superjson';

import type { AppRouter } from '@/server/api/root';

export const transformer = superjson;

export const client = createTRPCProxyClient<AppRouter>({
  transformer,
  links: [
    httpBatchLink({
      url: 'http://localhost:3333/trpc/',
      // You can pass any HTTP headers you wish here
      //   async headers() {
      //     return {
      //       // authorization: getAuthCookie(),
      //       'Access-Control-Allow-Origin': '*',
      //     };
      //   },
      fetch(url, options) {
        // eslint-disable-next-line no-console
        console.log('fetch', url, options);
        return fetch(url, {
          ...options,
          mode: 'no-cors',
        });
      },
    }),
  ],
});
