import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "./validationSchema";
import prisma from "@/app/client";
import { describe } from "node:test";

// interface Props{
//     params:{params:{id:string}}
// }
interface Props {
    params: { id: string }
}

export async function PATCH(request:NextRequest, { params }: { params: { id: string } })
{
    const body = await request.json();
    const validation= issueSchema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.format(),{status:400});

    const issue =await prisma.issue.findUnique({
        where:{id:parseInt(params.id)}
    })
    if(!issue)
        return NextResponse.json({'error':"Invalid issue"},{status:404});
    const updateResult = await prisma.issue.update({
        where: { id: issue.id }, // 修复语法错误
        data: {
            title: body.title,        // 确保 body 已定义
            description: body.description, // 确保字段拼写正确
        },
    });
    return NextResponse.json(updateResult);

}

export async function DELETE(request:NextRequest, { params }: { params: { id: string } })
{
   const issue = await prisma.issue.findUnique({
        where:{id:parseInt(params.id)}
    })
    if(!issue)
        return NextResponse.json({'error':"Invalid issue"},{status:404});
    const updateResult = await prisma.issue.delete({
        where: { id: issue.id} // 修复语法错误
      
    });
    return NextResponse.json({});

}
