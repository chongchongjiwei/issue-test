"use client";
import  {ErrorMessage, Spinner } from "@/app/components";
import { createIssueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {  TextArea ,Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";





// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
//   ssr: false,
// });

const IssueForm = dynamic(
  () => (import("@/app/issues/_components/IssueForm")),
  {ssr:false}
)
const NewIssuePage = () => {
  // const {
  //   register,
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<IssueForm>({
  //   resolver: zodResolver(createIssueSchema),
  // });
  // const router = useRouter();
  // const [error, setError] = useState("");
  // const [isSubmitting, setSubmitting] = useState(false);

  return (
   <IssueForm></IssueForm>
  );
};
export default NewIssuePage;