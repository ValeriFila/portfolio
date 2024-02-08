import './BlockSquare.scss'
import clsx from 'clsx'
import MailButton from '../MailButton/MailButton'
export default function BlockSquare(props) {
    const {
        theme,
        title,
        description,
        price,
        popular,
        onClick,
    } = props

    return (
        <div className='rectangle'>
            <div className={clsx('rectangle__square' , theme && `rectangle__square--orange`)}>
                <div className='rectangle__text'>
                    <div className='rectangle__text--row'>
                        <p className='rectangle__title'>{title}</p>
                        {popular && (
                            <p className='rectangle__title--popular'>ПОПУЛЯРНОЕ</p>
                        )}
                    </div>
                    <p className='rectangle__description'>{description}</p>
                </div>
                <div className='rectangle__price'>
                    <MailButton
                        className='rectangle__button'
                        onClick={onClick}
                    >
                        НАПИСАТЬ
                    </MailButton>
                    <div className='rectangle__price--column-text'>
                        <p className='rectangle__price--orange'>от {price}</p>
                        <p className='rectangle__price--black'>рублей</p>
                    </div>
                </div>
            </div>
            <div className={clsx('rectangle__square' , theme && `rectangle__square--orange`)}>

            </div>
        </div>
    )
}