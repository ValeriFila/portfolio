import CustomInput from '../CustomInput/CustomInput'
import './Form.scss'
import MailButton from '../MailButton/MailButton'
import {useState} from 'react'

export default function Form() {
    function handleClick(event) {
        event.preventDefault()
        console.log('hey')
    }

    return (
        <form className='custom-form'>
            <hr className='custom-form__line'/>
            <div className='custom-form__block-input'>
                <CustomInput label='Имя'/>
                <CustomInput label='Email'/>
            </div>
            <div className='custom-form__block-input'>
                <CustomInput
                    className='custom-form__input--big'
                    label='Сообщение'
                    isMultiline={true}
                />
            </div>
            <MailButton
                theme='bigger'
                onClick={handleClick}
            >
                ОТПРАВИТЬ СООБЩЕНИЕ
            </MailButton>
        </form>
    )
}