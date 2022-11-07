import { Text, Container } from "@nextui-org/react"
import React from 'react'

type PageLayoutProps = {
    title: string
    children: React.ReactNode
}

export default function PageLayout({ title, children }: PageLayoutProps) {
    return (
        <>
            <Container md css={{ padding: "$10" }}>
                
                <Text b size={36} weight="bold"> {title} </Text>

                <Container css={{ mt: '$10' }}>
                    {children}
                </Container>

            </Container>
        </>
    )
}