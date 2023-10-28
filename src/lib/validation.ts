import * as z from "zod"

export const signUpValidation = z.object({
   name: z.string().min(2, { message: "Name minimal 2 characters" }).max(50),
   username: z.string().min(2).max(50),
   email: z.string().email(),
   password: z.string().min(8, { message: "Password minimal 8 characters" }),
})
