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
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginSchemaTypes } from "@/schemas/userSchema";
import { useEffect } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
export default function Login() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userInput: "",
      password: "",
    },
  });
  const { mutate, data, isSuccess } = useMutation({
    mutationFn: async (values: loginSchemaTypes) => {
      return fetch(`/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    },
  });
  useEffect(() => {
    if (data && !data.ok && data.status === 401) {
      toast({
        title: "Wrong credential",
        description:
          "When a login attempt is made and the user provides incorrect login information.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        variant: "destructive",
      });
    }
  }, [data, toast, isSuccess]);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[25rem] border border-[#343434] p-5 rounded-md shadow-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit((values) => mutate(values))}>
            <FormField
              control={form.control}
              name="userInput"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name or Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter user name or email" {...field} />
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
            <div className="flex items-center justify-center gap-3 mt-5">
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
