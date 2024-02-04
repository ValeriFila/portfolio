import './CustomInput.scss'
import clsx from 'clsx'

export default function CustomInput(props) {
    const {
        label,
        value,
        id,
        className,
        isMultiline
    } = props

    return (
        <div className='custom-input'>
            <label className='custom-input__label'>{label}</label>
            {!isMultiline &&
                <input
                    className={clsx('custom-input__input', className)}
                    type='text'
                    id={id}
                    value={value}
                    placeholder={`Введи ${label.toLowerCase()}...`}
                />
            }
            {isMultiline &&
                <textarea
                    className={clsx('custom-input__input', className)}
                    id={id}
                    value={value}
                    placeholder={`Введи ${label.toLowerCase()}...`}
                />
            }
        </div>
    )
}