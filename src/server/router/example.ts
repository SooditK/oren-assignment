import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .mutation("save", {
    input: z.object({
      text: z.string(),
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      const data = await ctx.prisma.user.upsert({
        where: {
          email: input.id,
        },
        create: {
          email: input.id,
          data_json: {
            text: input.text,
          },
        },
        update: {
          data_json: {
            text: input.text,
          },
        },
      });
      return {
        success: true,
        message: `Saved data`,
        data,
      };
    },
  });
