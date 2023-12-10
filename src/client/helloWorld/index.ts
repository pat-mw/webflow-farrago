/* eslint-disable no-console */
import { api } from '@/trpc/client';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const name = 'John Doe';
  await greetUser(name);
});

// create async function to greet user
async function greetUser(name: string) {
  console.log(`greeting user`);
  const result = await api.helloWorld.hello.query({ text: name });
  console.log(`result`, result);
}
