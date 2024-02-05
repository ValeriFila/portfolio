import CustomInput from '../CustomInput/CustomInput'
import './Form.scss'
import MailButton from '../MailButton/MailButton'
import {useRef, useState} from 'react'
import clsx from 'clsx'

export default function Form() {
    const [error, setError] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        if (name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0) {
            setError(true)
        } else {
            console.log('sending message...')
            setError(false)
            setName('')
            setEmail('')
            setMessage('')
        }
    }

    function handleChangeName(event) {
        setName(event.target.value)
    }

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }

    function handleChangeMessage(event) {
        setMessage(event.target.value)
    }

    return (
        <form
            className='custom-form'
            onSubmit={(event) => handleSubmit(event)}
        >
            <hr className='custom-form__line' />
            <div className='custom-form__block-input'>
                <CustomInput
                    id='name'
                    label='Имя'
                    value={name}
                    className={clsx(
                        {
                            'custom-form__input--error': error && name.trim().length === 0,
                        },
                    )}
                    onChange={handleChangeName}
                />
                <CustomInput
                    id='email'
                    label='Email'
                    value={email}
                    className={clsx(
                        {
                            'custom-form__input--error': error && email.trim().length === 0,
                        },
                    )}
                    onChange={handleChangeEmail}
                />
            </div>
            <div className='custom-form__block-input'>
                <CustomInput
                    id='message'
                    value={message}
                    className={clsx(
                        'custom-form__text-area',
                        {
                            'custom-form__input--error': error && message.trim().length === 0,
                        },
                    )}
                    label='Сообщение'
                    isMultiline={true}
                    onChange={handleChangeMessage}
                />
            </div>
            <MailButton
                theme='bigger'
            >
                ОТПРАВИТЬ СООБЩЕНИЕ
            </MailButton>
        </form>
    )
}