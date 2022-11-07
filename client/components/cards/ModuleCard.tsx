import { Card, Grid, Text, Button } from '@nextui-org/react'
import { ArrowRight } from 'lucide-react'
import { ModuleType } from '../../interfaces/types'
import Icon from './Icon'

type CardProps = {
    module: ModuleType
    onClick: (path: string) => void
}

export default function ModuleCard({ module, onClick }: CardProps) {
    return (
        <Card css={{ p: '$6', w: '100%' }}>
            <Card.Header>
                <Icon icon={module.icon} />
                <Grid.Container css={{ pl: '$6' }}>
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: '$xs' }}>
                            {module.name}
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text css={{ color: '$accents8' }}>
                            {module.extraName}
                        </Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$2' }}>
                <Text>{module.description}</Text>
            </Card.Body>
            <Card.Footer>
                <Button
                    onClick={() => onClick(module.code)}
                    iconRight={<ArrowRight size={18} />}
                >
                    Show Lessions
                </Button>
            </Card.Footer>
        </Card>
    )
}
