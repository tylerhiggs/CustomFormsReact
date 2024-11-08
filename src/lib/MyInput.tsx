import React from "react";
import { Input, Label, Field } from "@headlessui/react";
interface MyInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

export default function MyInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: MyInputProps) {
  return (
    <Field>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Field>
  );
}
