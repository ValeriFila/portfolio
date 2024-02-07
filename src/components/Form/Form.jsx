import CustomInput from '../CustomInput/CustomInput'
import './Form.scss'
import MailButton from '../MailButton/MailButton'
import {useRef, useState} from 'react'
import clsx from 'clsx'
import emailjs from '@emailjs/browser'
import stars from '../../assets/icons/Shining stars.png'
import spring from '../../assets/icons/Vector 4.png'

export default function Form() {
    const [error, setError] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const formRef = useRef()

    function handleSubmit(event) {
        event.preventDefault()
        const sendEmail = (e) => {
            e.preventDefault()

            emailjs.sendForm(
                'service_qjuy5q7',
                'template_r4pm2r4',
                formRef.current,
                'Zd3qQcdr7J8xZSumK')
                .then((result) => {
                    console.log(result) //сделать обработчик
                }, (error) => {
                    console.log(error) //сделать обработчик
                })
        }

        if (name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0) {
            setError(true)
        } else {
            sendEmail(event)
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
            ref={formRef}
            className='custom-form'
            onSubmit={(event) => handleSubmit(event)}
        >
            <hr className='custom-form__line' />
            <div className='custom-form__block-input'>
                <CustomInput
                    id='name'
                    name='name'
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
                    name='email'
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
                    name='message'
                    label='Сообщение'
                    value={message}
                    className={clsx(
                        'custom-form__text-area',
                        {
                            'custom-form__input--error': error && message.trim().length === 0,
                        },
                    )}
                    isMultiline={true}
                    onChange={handleChangeMessage}
                />
            </div>
            <MailButton
                theme='bigger'
            >
                ОТПРАВИТЬ СООБЩЕНИЕ
            </MailButton>
            <img src={stars} alt='stars' className='custom-form__stars'/>
            <img src={spring} alt='spring' className='custom-form__spring'/>
        </form>
    )
}