import './CustomInput.scss'
import clsx from 'clsx'
import {useState} from 'react'

export default function CustomInput(props) {
    const {
        label,
        value,
        id,
        className,
        isMultiline,
    } = props

    const [text, setText] = useState('')

    function handleChange(event) {
        setText(event.target.value)
    }

    return (
        <div className='custom-input'>
            <label className='custom-input__label'>{label}</label>
            {!isMultiline ? (
                <input
                    className={clsx('custom-input__input', className)}
                    type='text'
                    id={id}
                    value={value}
                    placeholder={`Введи ${label.toLowerCase()}...`}
                    onChange={handleChange}
                />
            ) : (
                <textarea
                    className={clsx('custom-input__input', className)}
                    id={id}
                    value={value}
                    placeholder={`Введи ${label.toLowerCase()}...`}
                    onChange={handleChange}
                />
            )}
        </div>
    )
}