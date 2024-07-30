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
export default function Login() {
  const form = useForm();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[20rem] border border-[#343434] p-5 rounded-md shadow-md">
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="userName"
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
              name="userName"
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
            <Button type="submit" className={cn('mt-5')}>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
