import { client } from '@/trpc/client';
window.Webflow || (window.Webflow = []);
window.Webflow.push(async () => {
    const name = 'John Doe';
    await greetUser(name);
});
export const greetUser = async (name) => {
    const { greeting } = await client.helloWorld.hello.query({ text: name });
    console.log(greeting);
};
