import { Button, Table } from "@radix-ui/themes";
import Link from "../components/link";
 import prisma from "@/app/client";
import delay from "delay";
import IssueStatusBadge from "../components/IssueStatusBadge";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);
return (
  <div>
    <div className="mb-5">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
    {/* Radix UI 中的 Table 组件 */}
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue:any) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                {/* {issue.title} */}
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                </Table.Cell>

                <Table.Cell className="block md:hidden">
              <IssueStatusBadge status={issue.status} />
                </Table.Cell>

              <Table.Cell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
                </Table.Cell>
              <Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
export default IssuesPage;