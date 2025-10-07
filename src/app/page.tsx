
import { Button } from '@/components/ui/button'
import { caller, getQueryClient,trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import React, { Suspense } from 'react'
import Client from './client';
const Home = async() => {
  const queryClient=getQueryClient();
 void  queryClient.prefetchQuery(trpc.hello.queryOptions({text:"Hello"}))
  const data=await caller.hello({text:"hello"})
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>

    <Suspense fallback={<p>Loading...</p>}>
      <Client/>
    </Suspense>
    </HydrationBoundary>
  )
}

export default Home