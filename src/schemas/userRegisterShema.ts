import { z } from "zod";
export const userShema = z
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

export type userShemaTypes = z.infer<typeof userShema>
