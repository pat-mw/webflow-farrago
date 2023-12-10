import { createHTTPServer } from '@trpc/server/adapters/standalone';

import { appRouter } from '@/api/root';
import { createContext } from '@/trpc/config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { server, listen } = createHTTPServer({
  router: appRouter,
  createContext,
});

listen(3333);

// eslint-disable-next-line no-console
console.log('Server started at http://localhost:3333');
