"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, SendHorizonal } from "lucide-react";

type NoteInputProps = {
  placeholder?: string;
};

export default function NoteInput({
  placeholder = "Add your notes",
}: NoteInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const v = value.trim();
    if (!v) return;
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="resize-none text-sm rounded-md px-3 py-2 pr-10 min-h-[60px]"
      />

      <Button
        type="submit"
        size="sm"
        className={`absolute cursor-pointer bottom-2 bg-blue-600 hover:bg-blue-700 right-2 h-[22px] w-[22px] rounded`}
        disabled={!value.trim()}
      >
        <SendHorizonal />
      </Button>
    </form>
  );
}
