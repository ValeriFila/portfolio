import './CustomInput.scss'
import clsx from 'clsx'
import {useEffect, useRef, useState} from 'react'

export default function CustomInput(props) {
    const {
        id,
        label,
        className,
        isMultiline,
        value,
        onChange,
    } = props

    return (
        <div className='custom-input'>
            <label className='custom-input__label'>{label}</label>
            {!isMultiline ? (
                <input
                    id={id}
                    className={clsx('custom-input__input', className)}
                    type='text'
                    value={value}
                    placeholder={`Введи ${label.toLowerCase()}...`}
                    onChange={(e) => onChange(e)}
                />
            ) : (
                <textarea
                    id={id}
                    className={clsx('custom-input__input', className)}
                    value={value}
                    placeholder={`Введи ${label.toLowerCase()}...`}
                    onChange={(e) => onChange(e)}
                />
            )}
        </div>
    )
}