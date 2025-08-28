import { Button } from "@/components/ui/button";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Password from "@/components/ui/Password";

const loginSchema = z
   .object({
      email: z.email(),
      password: z.string().min(8, { error: "Password is too short" })
   })

export function Login({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {



   const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const onSubmit = async (data: z.infer<typeof loginSchema>) => {
      const userInfo = {
         email: data.email,
         password: data.password,
      };

      console.log(userInfo);
   };

   return (
      <div className="flex items-center  justify-center  w-full h-screen">
         <div className={cn("flex flex-col gap-6 sm:min-w-lg border p-6 rounded-lg shadow-[0px_0px_2px_2px] shadow-gray-200", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
               <h1 className="text-2xl font-bold">Login your account</h1>
               <p className="text-sm text-muted-foreground">
                  Enter your details to login your account
               </p>
            </div>

            <div className="grid gap-6">
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="john.doe@company.com"
                                    type="email"
                                    {...field}
                                 />
                              </FormControl>
                              <FormDescription className="sr-only">
                                 This is your public display name.
                              </FormDescription>
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
                                 <Password {...field} />
                              </FormControl>
                              <FormDescription className="sr-only">
                                 This is your public display name.
                              </FormDescription>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <Button type="submit" className="w-full">
                        Login
                     </Button>
                  </form>
               </Form>

               <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                     Or
                  </span>
               </div>
            </div>

            <div className="text-center text-sm">
               Are you new here?{" "}
               <Link to="/register" className="underline underline-offset-4">
                  Register
               </Link>
            </div>
         </div>
      </div>
   );
}