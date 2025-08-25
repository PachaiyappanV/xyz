"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft } from "lucide-react";

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
import Link from "next/link";

const formSchema = z.object({
  email: z.email("Enter a valid email"),
});

export default function ResetPasswordPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: API endpoint here
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top-left logo */}
      <header className="px-5 py-6">
        <div className="text-2xl font-semibold text-[#97aa99]">Logo</div>
      </header>
      <div className="flex flex-1 justify-center  ">
        <main className="flex w-[90%] sm:w-[80%] flex-col items-center px-4 pt-16">
          <h1 className="mb-4 text-center text-2xl font-extrabold text-[#0f172a] md:text-[28px]">
            Reset your password?
          </h1>

          {/* Card */}
          <div className="w-full max-w-xl rounded-lg border border-[#e9eeee] bg-white p-9 shadow-sm">
            <div className="mb-3 text-right text-sm text-gray-500">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full  text-white cursor-pointer bg-[#3f8e43] hover:bg-green-700  "
                >
                  Send email
                </Button>
              </form>
            </Form>
          </div>

          {/* Back to Log in */}
          <Link
            href="/login"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Log in
          </Link>
        </main>
      </div>
    </div>
  );
}
