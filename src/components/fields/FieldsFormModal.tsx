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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";
import { useState } from "react";

const fieldSchema = z
  .object({
    label: z.string().min(1, "Name is required"),
    type: z.string().min(1, "Type is required"),
    acceptedValues: z.array(z.string()).optional(),
    isMandatory: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (
      (data.type === "select" || data.type === "multiselect") &&
      (!data.acceptedValues || data.acceptedValues.length === 0)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["acceptedValues"],
        message: "Accepted values are required for select or multiselect",
      });
    }
  });

type FieldFormValues = z.infer<typeof fieldSchema>;

type Props = {
  isEdit?: boolean;
};

const FieldsFormModal = ({ isEdit }: Props) => {
  const form = useForm<FieldFormValues>({
    resolver: zodResolver(fieldSchema),
    defaultValues: {
      label: "",
      type: "text",
      acceptedValues: [],
      isMandatory: false,
    },
  });

  // Local state for accepted values input
  const [valueInput, setValueInput] = useState("");

  const handleAddValue = () => {
    if (valueInput.trim()) {
      form.setValue("acceptedValues", [
        ...(form.getValues("acceptedValues") || []),
        valueInput.trim(),
      ]);
      setValueInput("");
    }
  };

  const handleRemoveValue = (val: string) => {
    form.setValue(
      "acceptedValues",
      (form.getValues("acceptedValues") || []).filter((v) => v !== val)
    );
  };

  const onSubmit = (data: FieldFormValues) => {
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
      <DialogContent className="sm:max-w-[500px] h-[97%] max-h-[97%] flex flex-col overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? "Edit Field Collection" : "Create Field Collection"}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 h-full"
          >
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel>
                    <span className="text-red-600 text-lg translate-y-[1.5px]">
                      *
                    </span>
                    <span className="-ml-1">Label:</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Label" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel>
                    <span className="text-red-600 text-lg translate-y-[1.5px]">
                      *
                    </span>
                    <span className="-ml-1">Type:</span>
                  </FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="textarea">Text Area</SelectItem>
                      <SelectItem value="number">Number</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="select">Select</SelectItem>
                      <SelectItem value="multiselect">Multi Select</SelectItem>
                      <SelectItem value="date">Date</SelectItem>
                      <SelectItem value="switch">Switch</SelectItem>
                      <SelectItem value="phone">Phone Number</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Accepted Values (only for select/multiselect) */}
            {(form.watch("type") === "select" ||
              form.watch("type") === "multiselect") && (
              <FormField
                control={form.control}
                name="acceptedValues"
                render={() => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel>
                      <span className="text-red-600 text-lg translate-y-[1.5px]">
                        *
                      </span>
                      <span className="-ml-1">Accepted Values:</span>
                    </FormLabel>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter value"
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddValue();
                          }
                        }}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddValue}
                      >
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(form.watch("acceptedValues") || []).map((val) => (
                        <span
                          key={val}
                          className="bg-gray-200 px-2 py-1 rounded flex items-center gap-1"
                        >
                          {val}
                          <button
                            type="button"
                            className="text-red-600"
                            onClick={() => handleRemoveValue(val)}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="isMandatory"
              render={({ field }) => (
                <FormItem className="flex items-center ">
                  <FormLabel className="flex items-center gap-1">
                    <span className="text-red-600 text-lg translate-y-[1.5px]"></span>
                    Is Mandatory:
                  </FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

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

export default FieldsFormModal;
