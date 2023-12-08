/* eslint-disable no-console */
import { client } from '@/trpc/client';

window.Webflow ||= [];
window.Webflow.push(async () => {
  const name = 'John Doe';
  await greetUser(name);
});

// create async function to greet user
export const greetUser = async (name: string) => {
  const { greeting } = await client.helloWorld.hello.query({ text: name });
  console.log(greeting);
};
