import React from 'react'
import Article from './article'

async function Page({
    params
}: {
    params: Promise<{ name: string }>
}) {
    return <Article id={(await params).name} />
}

export default Page