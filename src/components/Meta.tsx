import Head from 'next/head'
import { ReactNode } from "react";


type Props = {
    page?: string
}

const Meta = ({ page }: Props) => {
    return (
        <Head>
            <meta 
                name="keywords" 
                content="Language, Web3, Video, Language Exchage, Smart Contract" 
            />
            <meta name="description" content="Language Learning platform" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <title>Fluently | {page || ''}</title>
        </Head>
    )
}

export default Meta