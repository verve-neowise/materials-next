import Head from "next/head"

type TitleProps = {
    title: string
}

export default function Title({ title } : TitleProps) {
    return (
        <Head> 
            <title> {title} </title>    
        </Head>
    )
}