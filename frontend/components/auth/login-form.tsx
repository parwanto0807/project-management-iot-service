"use client";

import * as z from "zod";
import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import Link from "next/link";
// import { useRouter} from "next/router";



import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { startTransition } from "react";

const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    
    // const router = useRouter()
    // const handleLoginClick= () => {
    //     router.push("/dashboard")
    // }


    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/login-admin"
            showSocial
        >
            <Form {...form}>
                <form
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="admin@email.com"
                                                type="email"
                                            />
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
                                            <Input
                                                {...field}
                                                placeholder="******"
                                                type="password"
                                            />
                                        </FormControl>
                                        <Button
                                            size="sm"
                                            variant="link"
                                            asChild
                                            className="px-0 font-normal"
                                        >
                                            <Link href="">
                                                Forgot password?
                                            </Link>
                                        </Button>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </>
                    </div>
                    {/* <FormError message={error || urlError} />
                    <FormSuccess message={success} /> */}
                    {/* <Button
                        // disabled={isPending}
                        type="submit"
                        className="w-full"
                        onClick={handleLoginClick}
                    >
                        Login
                    </Button> */}
                    <Link href="/dashboard">
                        <Button
                            // disabled={isPending}
                            type="button"
                            className="w-full"
                        >
                            Login
                        </Button>
                    </Link>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm