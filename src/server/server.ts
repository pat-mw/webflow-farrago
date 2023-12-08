import { createHTTPServer } from '@trpc/server/adapters/standalone';

import { appRouter } from './api/root';

createHTTPServer({
  router: appRouter,
  createContext() {
    // create a new Header instance
    const headers = new Headers();
    return { headers };
  },
}).listen(3333);

// eslint-disable-next-line no-console
console.log('Server started at http://localhost:3333');
