import { createTRPCProxyClient, httpLink } from '@trpc/client';

import type { AppRouter } from '@/api/root';

export const api = createTRPCProxyClient<AppRouter>({
  links: [
    httpLink({
      url: 'http://localhost:3333/',
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
