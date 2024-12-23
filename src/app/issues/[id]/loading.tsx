import { Table } from "@radix-ui/themes";
// import Skeleton
import Skeleton from "react-loading-skeleton";
import { Card, Flex, Heading, TextArea,Text } from "@radix-ui/themes";
import "react-loading-skeleton/dist/skeleton.css";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
// import IssueActions from "./IssueAction";

const DetailIssuesPage= ()=>{

    const issues = [1];
    return(
<div>
<Heading as="h2"><Skeleton/></Heading>
<Flex gap="3" my="5">
  <p><Skeleton/></p>
  <Text><Skeleton/></Text >
</Flex>
<Card className="prose"><Skeleton count={3}/></Card>
</div>

    )
}

export default DetailIssuesPage;