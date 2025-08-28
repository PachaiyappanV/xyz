"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DateField } from "../global";

const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().optional(),
  phone: z.string().min(10, "Enter a valid phone number"),
  countryCode: z.string().min(1, "Select a country code"),
  followUpDate: z.date().optional(),
  tags: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadSchema>;

const availableTags = [
  { value: "hot", label: "Hot" },
  { value: "warm", label: "Warm" },
  { value: "cold", label: "Cold" },
  { value: "priority", label: "Priority" },
];

type Props = {
  isEdit?: boolean;
  open: boolean;
  onOpenChange: (v: boolean) => void;
};
const LeadsFormModal = ({ open, onOpenChange, isEdit }: Props) => {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "IN",
      followUpDate: new Date(),
      tags: "",
    },
  });

  const onSubmit = (data: LeadFormValues) => {
    console.log("Form submitted:", data);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] h-[97%] max-h-[97%] flex flex-col overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Lead" : "Create New Lead"}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 h-full"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-0">
                  <FormLabel>
                    <span className="text-red-600 text-lg translate-y-[1.5px]">
                      *
                    </span>
                    <span className="-ml-1">Name:</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Name" {...field} />
                  </FormControl>
                  <FormMessage className="pt-[6px]" />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormItem className="flex flex-col gap-0">
              <FormLabel htmlFor="phone">
                <span className="text-red-600 text-lg translate-y-[1.5px] inline-block">
                  *
                </span>
                <span className="-ml-1">Phone:</span>
              </FormLabel>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Code" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="IN">IN +91</SelectItem>
                            <SelectItem value="US">US +1</SelectItem>
                            <SelectItem value="UK">UK +44</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          type="text"
                          id="phone"
                          placeholder="Enter phone"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </FormItem>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tags */}
            {!isEdit && (
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => {
                  const [open, setOpen] = useState(false);
                  const selectedValues = field.value
                    ? field.value.split(",")
                    : [];

                  const toggleTag = (tag: string) => {
                    let newValues = [...selectedValues];
                    if (newValues.includes(tag)) {
                      newValues = newValues.filter((t) => t !== tag);
                    } else {
                      newValues.push(tag);
                    }
                    field.onChange(newValues.join(","));
                  };

                  return (
                    <FormItem className="flex flex-col gap-2">
                      <FormLabel>Tags:</FormLabel>
                      <FormControl>
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              className="w-full justify-between"
                            >
                              {selectedValues.length > 0
                                ? selectedValues.join(", ")
                                : "Select tags"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            align="start"
                            className="w-full p-0 mr-auto"
                          >
                            <Command>
                              <CommandInput placeholder="Search tags..." />
                              <CommandList>
                                <CommandEmpty>No tag found.</CommandEmpty>
                                <CommandGroup>
                                  {availableTags.map((tag) => (
                                    <CommandItem
                                      key={tag.value}
                                      onSelect={() => toggleTag(tag.value)}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          selectedValues.includes(tag.value)
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {tag.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            )}

            {isEdit && (
              <>
                <DateField form={form} label="Follow Up Date" />
              </>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer mt-auto"
            >
              {isEdit ? "Update" : "Create"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default LeadsFormModal;
