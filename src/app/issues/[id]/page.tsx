import prisma from "@/app/client";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import {Box, Card, Flex, Heading, TextArea,Text, Grid, Button } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
interface Props {
  params: { id: string };
}
const IssueDeatilPage = async ({ params }: Props) => {
  // 判断 url 中的 id 是不是 number，比如 'issues/abc' 就直接404

  const idtest = parseInt(params.id);
  if (typeof idtest !== "number") notFound();

  // 获取 issue
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  // await delay(2000)

  // 如果 issue 不存在，也404
  if (!issue) notFound();
//解耦合，用不同组件区分开
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <IssueDetails issue={issue}></IssueDetails>
        </Box>
      <Box>
       <EditIssueButton issueId={issue.id}></EditIssueButton>
      </Box>
    </Grid>


  );
};
export default IssueDeatilPage;