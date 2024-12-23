import React from "react";
import IssueForm from "../../_components/IssueForm";
import prisma from "@/app/client";
import { notFound } from "next/navigation";
import Skeleton from "react-loading-skeleton";
interface Props {
    params: { id: string }
}

const EditIssuePage = async ({ params }: Props) => {
    const issue = await prisma.issue.findUnique({
        where: { id: parseInt(params.id) }
    });
    if (!issue) notFound();
    return (
        <Skeleton></Skeleton>
    )
}
export default EditIssuePage;