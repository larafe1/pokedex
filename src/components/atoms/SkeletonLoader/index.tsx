import { Skeleton } from '@chakra-ui/react';

import { ISkeletonProps } from '@/types';

function SkeletonLoader({ w, h }: ISkeletonProps) {
  return <Skeleton w={w} h={h} speed={1.5} borderRadius="8px" />;
}

export default SkeletonLoader;
