"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
<TextField.Root>
  
</TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New</Button>
    </div>
  );
};
export default NewIssuePage;