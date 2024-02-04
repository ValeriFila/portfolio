import CustomInput from "../CustomInput/CustomInput";
import './Form.scss'
export default function Form() {
    return (
        <form className='custom-form'>
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
        </form>
    )
}