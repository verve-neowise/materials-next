import {
    Card, Grid, Text, Button,
} from '@nextui-org/react'

import { ArrowRight } from 'lucide-react'
import { Lesson } from '../../interfaces/types'

type CardProps = {
    lesson: Lesson
    onClick: (n: number) => void
}

export default function LessonCard({ lesson, onClick }: CardProps) {
    return (
        <Card css={{ p: '$6', w: '100%' }}>
            <Card.Header>
            
                <Grid.Container css={{ pl: '$6' }}>
            
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: '$xs' }}>
                            {lesson.number}. {lesson.theme}
                        </Text>
                    </Grid>
           
                    <Grid xs={12}>
                        <Text css={{ color: '$accents8' }}>
                            {lesson.date}
                        </Text>
                    </Grid>
                </Grid.Container>
            
            </Card.Header>
            
            <Card.Body css={{ py: '$2' }}>
                <Text>{lesson.description}</Text>
            </Card.Body>

            <Card.Footer>
                <Button
                    onClick={() => onClick(lesson.number)}
                    iconRight={<ArrowRight size={18} />}>
                    
                    Show Lessions
                </Button>
            </Card.Footer>

        </Card>
    )
}
