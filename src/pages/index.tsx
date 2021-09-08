import { GetServerSideProps } from 'next'
import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import Layout from '../components/common/Layout'
import Thumbnails from '../components/Thumbnails'
import { getPokemonAPI } from '../lib/api/pokemon'

export default function Home() {
  return (
    <Layout>
      <Thumbnails />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('getPokemonAPI', () => getPokemonAPI({ limit: 0, offset: 0 }), {
    staleTime: 1000 * 10,
  })
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
