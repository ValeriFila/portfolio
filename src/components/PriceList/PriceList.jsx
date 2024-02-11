import BlockSquare from '../BlockSquare/BlockSquare'
import './PriceList.scss'
import imgScribble from '../../assets/icons/Scribble.png'
import vector4 from '../../assets/icons/Vector 4 (1).png'
import star4 from '../../assets/icons/Star 4.png'

export default function PriceList(props) {
    const {
        onClick
    } = props

    const includes = {
        'multi-page': [
            'Multi Content',
            '5% Discount on Merch',
            'Join the Community',
            'Livestreaming Access'
        ],
        'landing': [
            'Landing Content',
            '5% Discount on Merch',
            'Join the Community',
            'Livestreaming Access'
        ],
        'online-shop': [
            'Online Content',
            '5% Discount on Merch',
            'Join the Community',
            'Livestreaming Access'
        ]
    }

    const multipage = includes['multi-page'].map((item) =>
        <li>{item}</li>
    )

    const landing = includes['landing'].map((item) =>
        <li>{item}</li>
    )

    const onlineShop = includes['online-shop'].map((item) =>
        <li>{item}</li>
    )

    return (
        <div className='price-list'>
            <BlockSquare
                title='Многостраничный сайт'
                description='Search for the keywords to learn more about each'
                price='7000'
                onClick={onClick}
                typeOfSite={multipage}
            ></BlockSquare>
            <BlockSquare
                theme='orange'
                title='Лендинг'
                description='Search for the keywords to learn more about each'
                price='3000'
                popular='true'
                onClick={onClick}
                typeOfSite={landing}
            ></BlockSquare>
            <BlockSquare
                title='Интернет-магазин'
                description='Search for the keywords to learn more about each'
                price='9000'
                onClick={onClick}
                typeOfSite={onlineShop}
            ></BlockSquare>
            <img
                src={vector4}
                alt='vecor'
                className='price-list__image-vector'
            />
            <img
                src={star4}
                alt='star'
                className='price-list__image-star'
            />
        </div>
    )
}