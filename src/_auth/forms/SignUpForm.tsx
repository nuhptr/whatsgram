import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

import { signUpValidation } from "@/lib/validation"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"

const SignUpForm = () => {
   const isLoading = true

   const form = useForm<z.infer<typeof signUpValidation>>({
      resolver: zodResolver(signUpValidation),
      defaultValues: { name: "", username: "", email: "", password: "" },
   })

   async function onSubmit(values: z.infer<typeof signUpValidation>) {
      console.log(values)
      // const newUser = await createUserAccount(values)
   }

   return (
      <Form {...form}>
         <div className="flex-col flex-center sm:w-420">
            <img src="/assets/images/logo.svg" alt="Logo" />

            <h2 className="pt-5 h3-bold md:h2-bold sm:pt-12">Create new account</h2>
            <p className="mt-2 text-light-3 small-medium md:base-regular">To use Lookgram, please enter your details</p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5 mt-4">
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                           <Input type="text" className="shad-input" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                           <Input type="text" className="shad-input" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input type="email" className="shad-input" {...field} />
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
                           <Input type="password" className="shad-input" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <Button type="submit" className="shad-button__primary">
                  {isLoading ? (
                     <div className="gap-2 flex-center">
                        <Loader /> Loading...
                     </div>
                  ) : (
                     "Sign Up"
                  )}
               </Button>

               <p className="mt-2 text-center text-small-regular text-light-2">
                  Already have an account?
                  <Link to="/sign-in" className="ml-1 text-primary-500 text-small-semibold">
                     Log In
                  </Link>
               </p>
            </form>
         </div>
      </Form>
   )
}

export default SignUpForm
