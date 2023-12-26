import prisma from '@/prisma/client';
import { Box, Grid } from '@radix-ui/themes';
import delay from 'delay';
import { notFound } from 'next/navigation';
import React from 'react';

import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';

interface IssueDetailPageProps {
  params: { id: string };
}

const IssueDetailPage: React.FC<IssueDetailPageProps> = async ({ params }) => {
  // if (typeof params.id !== 'number') notFound();

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  await delay(1000);
  if (!issue) {
    notFound();
  }

  return (
    <Grid columns={{ initial: '1', md: '2' }} gap="5">
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
