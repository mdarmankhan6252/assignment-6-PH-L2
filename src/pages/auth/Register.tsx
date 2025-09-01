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
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Password from "@/components/ui/Password";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader } from "lucide-react";

const registerSchema = z
   .object({
      name: z
         .string()
         .min(3, {
            error: "Name is too short",
         })
         .max(50),
      email: z.email(),
      password: z.string().min(8, { error: "Password is too short" }),
      confirmPassword: z
         .string()
         .min(8, { error: "Confirm Password is too short" }),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match",
      path: ["confirmPassword"],
   });

export function Register({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {

   const [register] = useRegisterMutation();
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false)

   const form = useForm<z.infer<typeof registerSchema>>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
         name: "",
         email: "",
         password: "",
         confirmPassword: "",
      },
   });

   const onSubmit = async (data: z.infer<typeof registerSchema>) => {
      setLoading(true)
      try {
         const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
         };

         const res = await register(userInfo).unwrap();
         console.log(res);

         toast.success("User created Successfully");
         navigate('/login')
         form.reset()
         setLoading(false)

      } catch (error) {
         setLoading(false)
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         const err = error as any;
         toast.error(err.data.message || "Something went wrong!")
      }
   };

   return (
      <div className="flex items-center  justify-center  w-full h-screen">
         <div className={cn("flex flex-col gap-6 sm:min-w-lg border p-6 rounded-lg shadow-[0px_0px_2px_2px] shadow-gray-200", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
               <h1 className="text-2xl font-bold">Register your account</h1>
               <p className="text-sm text-muted-foreground">
                  Enter your details to create an account
               </p>
            </div>

            <div className="grid gap-6">
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                 <Input placeholder="John Doe" {...field} />
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
                     <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Confirm Password</FormLabel>
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
                     <Button disabled={loading} type="submit" className="w-full">
                        {
                           loading ? <Loader className="animate-spin"/> : <span>Submit</span>
                        }
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
               Already have an account?{" "}
               <Link to="/login" className="underline underline-offset-4">
                  Login
               </Link>
            </div>
         </div>
      </div>
   );
}