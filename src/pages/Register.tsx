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
import { useMutation } from "@tanstack/react-query";
import { registerShema, registerShemaTypes } from "@/schemas/userSchema";

import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useEffect } from "react";

export default function Register() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { mutate, isSuccess, data } = useMutation({
    mutationFn: async (values: registerShemaTypes) => {
      return fetch(`/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    },
  });
  const form = useForm<registerShemaTypes>({
    resolver: zodResolver(registerShema),
    defaultValues: {
      userName: "",
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  useEffect(() => {
    if (data && !data.ok && data.status === 409) {
      toast({
        title: "User already exists",
        description:
          "When a registration attempt is made and the username already exist.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        variant: "destructive",
      });
    }
    if (isSuccess && data.ok) {
      navigate("/login");
    }
  }, [data, toast, isSuccess, navigate]);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[25rem] border border-[#343434] p-5 rounded-md shadow-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit((values) => mutate(values))}>
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
