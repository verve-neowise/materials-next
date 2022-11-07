import { Text, Container, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import PageLayout from '../components/layouts/PageLayout'
import Title from '../components/Title'
import { Module } from '../interfaces/types'
import { allModules } from '../services/modules.service'
import ModuleCard from '../components/cards/ModuleCard'

export default function Modules({ modules }: { modules: Module[] }) {
    const router = useRouter()

    const gotoModule = (name: string) => {
        router.push('/module/' + name)
    }

    return (
        <div>
            <Title title='Material Docs' />

            <PageLayout title='Modules'>
                <Grid.Container css={{ mt: '$10' }} gap={3} justify='center'>
                    {modules.map((module) => (
                        <Grid key={module.path} md={4}>
                            <ModuleCard onClick={gotoModule} module={module} />
                        </Grid>
                    ))}
                </Grid.Container>
            </PageLayout>
        </div>
    )
}

export async function getServerSideProps() {
    const modules = allModules()

    console.dir(modules)

    return {
        props: {
            modules,
        },
    }
}
