import prisma from "@/app/client";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Card, Flex, Heading, TextArea,Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
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
  await delay(2000)

  // 如果 issue 不存在，也404
  if (!issue) notFound();

  return (
    <div>
    <Heading as="h2">{issue.title}</Heading>
    <Flex gap="3" my="5">
      <IssueStatusBadge status={issue.status}></IssueStatusBadge>
      <Text>{issue.createdAt.toDateString()}</Text >
    </Flex>
    <Card>{issue.description}</Card>
  </div>

  );
};
export default IssueDeatilPage;