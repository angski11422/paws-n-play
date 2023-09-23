"use client";

import { useForm, Controller } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@nextui-org/card";

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Must enter your name" }),
  note: z.string().min(5, { message: "Must be 5 or more characters long" }),
});

export default function Form() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      note: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    form.reset();
  };

  return (
    <Card {...form} className="p-5">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          name="fullName"
          control={form.control}
          render={({ field }) => (
            <Input
              errorMessage={form.formState.errors.fullName?.message}
              className="m-4"
              label="Full Name"
              labelPlacement="inside"
              {...field}
            />
          )}
        />
        <Controller
          name="note"
          control={form.control}
          render={({ field }) => (
            <Input
              errorMessage={form.formState.errors.note?.message}
              className="m-4"
              label="Message"
              labelPlacement="inside"
              {...field}
            />
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}
