import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
const formSchema = z
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
export default function Register() {
 const {mutate} = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      console.log(values)
      return fetch(`/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    },
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[25rem] border border-[#343434] p-5 rounded-md shadow-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(values=> mutate(values))}>
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter user name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center gap-5 mt-4">
              <button className="flex items-center px-4 py-1 border border-[#343434] rounded">
                Login with Google
              </button>
              <button className="flex items-center px-4 py-1 border border-[#343434] rounded">
                Login with GitHub
              </button>
            </div>
            <Button type="submit" className={cn("mt-5 h-8")}>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
