"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
    ssr: false,
  });
const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="title">
        <TextField.Slot>
        </TextField.Slot>
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New</Button>
    </div>

  );
};
export default NewIssuePage;