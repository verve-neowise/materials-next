import { Text, Image, CSS } from '@nextui-org/react'

type IconProps = {
    icon: string
}

export default function Icon({ icon }: IconProps) {

    return (
        <Text span css={textCss} >
            <Image src={icon} objectFit='cover' />
        </Text>
    )
}

let textCss: CSS = {
    display: 'flex',
    width: '42px',
    height: '42px',
    padding: '10px',
    borderRadius: '$rounded',
    bg: '$black',
}
