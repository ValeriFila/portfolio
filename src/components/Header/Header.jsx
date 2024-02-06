import MainSections from './subComponents/MainSections/MainSections'
import './Header.scss'
import img from '../../assets/icons/logo.svg'
import MailButton from '../MailButton/MailButton'

export default function Header(props) {
    const {
        onClickForm,
        onClickExamples,
    } = props

    return (
        <header className='section-header'>
            <img src={img} alt='icon'/>
            <MainSections>Обо мне</MainSections>
            <MainSections>Стек</MainSections>
            <MainSections>Прайс лист</MainSections>
            <MainSections>Контакты</MainSections>
            <div className='section-header__buttons'>
                <MailButton
                    theme='outline'
                    onClick={onClickExamples}
                >
                    ПРИМЕРЫ ПРОЕКТОВ
                </MailButton>
                <MailButton onClick={onClickForm}>
                    НАПИСАТЬ МНЕ
                </MailButton>
            </div>
        </header>
    )
}