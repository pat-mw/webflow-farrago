import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';
export const createInnerTRPCContext = async (opts) => {
    return {
        headers: opts.headers,
    };
};
export const createTRPCContext = async (opts) => {
    return await createInnerTRPCContext({
        headers: opts.req.headers,
    });
};
const t = initTRPC.context().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
});
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
