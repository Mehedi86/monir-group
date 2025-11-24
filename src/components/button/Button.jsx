import React from 'react'

export default function Button({ text, style }) {
    return (
        <button className={`${style}`}>
            {text}
        </button>
    )
}
