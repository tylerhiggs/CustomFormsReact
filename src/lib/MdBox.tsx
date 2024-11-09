import { Textarea } from "@headlessui/react";
import { useState } from "react";

export default function MdBox() {
  const [value, setValue] = useState("");
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <Textarea
        className="h-40 w-full"
        placeholder="Enter some markdown"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
