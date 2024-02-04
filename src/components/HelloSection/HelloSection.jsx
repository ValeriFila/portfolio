import MailButton from '../MailButton/MailButton'
import './HelloSection.scss'
import imgSwirl from '../../assets/icons/Hero Shape Swirl.png'
import imgStars from '../../assets/icons/Group 48095792.png'
import imgScribble from '../../assets/icons/Scribble.png'

export default function HelloSection() {
    return (
        <div className='hello-box'>
            <p className='hello-box__text'>
                Привет,
            </p>
            <p className='hello-box__text--orange'>
                я Лера
            </p>
            <p className='hello-box__description'>
                Веб-разработчик из <br/> Санкт-Петербурга
            </p>
            <MailButton
                theme='bigger'
                className='hello-box__button'
            >
                НАПИСАТЬ МНЕ
            </MailButton>
            <img
                src={imgSwirl}
                alt='swirl'
                className='hello-box__img-swirl'
            />
            <img
                src={imgStars}
                alt='stars'
                className='hello-box__img-stars'
            />
            <img
                src={imgScribble}
                alt='scribble'
                className='hello-box__img-scribble'
            />
        </div>
    )
}