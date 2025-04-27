import React from 'react'
import Article from './article'

async function Page({
    params
}: {
    params: Promise<{ id: string }>
}) {
    return <Article id={(await params).id} />
}

export default Page