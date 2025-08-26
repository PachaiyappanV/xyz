"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const tagSchema = z.object({
  name: z.string().min(1, "Tag name is required"),
});

type TagFormValues = z.infer<typeof tagSchema>;

const TagsFormModal = () => {
  const form = useForm<TagFormValues>({
    resolver: zodResolver(tagSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: TagFormValues) => {
    console.log("Form submitted:", data);
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] flex flex-col gap-10 h-[97%] max-h-[97%] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Tag</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="text-red-600 text-lg translate-y-[1.5px] inline-block">
                      *
                    </span>
                    <span className="-ml-1">Name:</span>
                  </FormLabel>

                  <FormControl>
                    <Input placeholder="Enter Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
            >
              Add Tag
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default TagsFormModal;
