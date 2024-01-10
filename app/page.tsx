import prisma from '@/prisma/client';
import IssueSummary from './IssueSummary';
import LatestIssues from './LatestIssues';

export default async function Home() {
  const open = await prisma.issue.count({
    where: { status: 'OPEN' },
  });

  const closed = await prisma.issue.count({
    where: { status: 'CLOSED' },
  });

  const inProgress = await prisma.issue.count({
    where: { status: 'IN_PROGRESS' },
  });

  return <IssueSummary open={open} inProgress={inProgress} closed={closed} />;
}
