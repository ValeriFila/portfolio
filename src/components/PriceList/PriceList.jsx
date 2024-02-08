import BlockSquare from '../BlockSquare/BlockSquare'
import './PriceList.scss'
import imgScribble from '../../assets/icons/Scribble.png'

export default function PriceList(props) {
    const {
        onClick
    } = props

    return (
        <div className='price-list'>
            <BlockSquare
                title='Многостраничный сайт'
                description='Search for the keywords to learn more about each'
                price='7000'
                onClick={onClick}
            ></BlockSquare>
            <BlockSquare
                theme='orange'
                title='Лендинг'
                description='Search for the keywords to learn more about each'
                price='3000'
                popular='true'
                onClick={onClick}
            ></BlockSquare>
            <BlockSquare
                title='Интернет-магазин'
                description='Search for the keywords to learn more about each'
                price='9000'
                onClick={onClick}
            ></BlockSquare>
        </div>
    )
}