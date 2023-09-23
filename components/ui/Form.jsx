"use client";

import { useForm, Controller } from "react-hook-form";
import { Input } from "@nextui-org/input";
import Buttons from "./Button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@nextui-org/card";

const formSchema = z.object({
  fullName: z.string().min(1, {
    message: "Enter a valid name.",
  }),
  message: z.string().min(8, {
    message: "Message must be at least 8 characters.",
  }),
});

export default function Form() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      message: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Card {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          name="fullName"
          control={form.control}
          render={({ field }) => (
            <Input label="Full Name" labelPlacement="outside" {...field} />
          )}
        />
        <Controller
          name="message"
          control={form.control}
          render={({ field }) => (
            <Input label="Message" labelPlacement="outside" {...field} />
          )}
        />
        <Buttons type="submit">Submit</Buttons>
      </form>
    </Card>
  );
}
