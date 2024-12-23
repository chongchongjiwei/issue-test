import { Table } from "@radix-ui/themes";
// import Skeleton
import Skeleton from "react-loading-skeleton";
import {Box, Card, Flex, Heading, TextArea,Text, Grid, Button } from "@radix-ui/themes";


import "react-loading-skeleton/dist/skeleton.css";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import IssueDetails from "./IssueDetails";
// import IssueActions from "./IssueAction";

const DetailIssuesPage= ()=>{

    const issues = [1];
    return(

<Grid columns={{ initial: "1", md: "2" }} gap="5">
<Box>
 <Skeleton></Skeleton> 
  </Box>
<Box>
 <Skeleton></Skeleton>
</Box>
</Grid>
    )
}

export default DetailIssuesPage;