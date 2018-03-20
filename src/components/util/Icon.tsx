import * as React from 'react'
var icons = require('../../utils/icons.json')

interface IconProps {
    icon: string
    size: number
}

const Icon: React.SFC<IconProps> = (props: IconProps) => {
    return (
        <svg width={props.size} height={props.size} viewBox="0 0 1024 1024">
            <path d={icons[props.icon]}></path>
        </svg>
    )
}

export default Icon;