import React from 'react'

export function Center(props) {
    const { children, flex, background } = props
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: flex,
            background: background,
        }
        }>
            {children}
        </div>
    )
}
