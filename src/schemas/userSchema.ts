import { z } from "zod";
export const registerShema = z
  .object({
    userName: z.string().min(5, {
      message: "Username must be at least 5 characters.",
    }),
    fullName: z.string().min(3, {
      message: "Full name must be at least 3 characters.",
    }),
    phone: z.string().min(10, {
      message: "Phone must be at least 10 characters.",
    }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; 
export const loginSchema = z.object({
  userInput: z.union([
    z.string().email("Invalid user email"),
    z.string().regex(usernameRegex,'Invalid user username')
  ]),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  })
})

export type registerShemaTypes = z.infer<typeof registerShema>
export type loginSchemaTypes = z.infer<typeof loginSchema>
