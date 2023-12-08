import { createHTTPServer } from '@trpc/server/adapters/standalone';

import { appRouter } from './api/root';

createHTTPServer({
  router: appRouter,
  // @ts-expect-error -- im copying documentation, getting type error, so ignoring it
  createContext() {
    return {};
  },
}).listen(3333);

// eslint-disable-next-line no-console
console.log('Server started at http://localhost:3333');
