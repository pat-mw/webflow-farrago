import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
export const transformer = superjson;
export const client = createTRPCProxyClient({
    transformer,
    links: [
        httpBatchLink({
            url: 'http://localhost:3000/trpc',
            fetch(url, options) {
                return fetch(url, {
                    ...options,
                    mode: 'no-cors',
                });
            },
        }),
    ],
});
