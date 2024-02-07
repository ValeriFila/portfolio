import BlockSquare from '../BlockSquare/BlockSquare'
import './PriceList.scss'
import imgScribble from '../../assets/icons/Scribble.png'

export default function PriceList() {
    return (
        <div className='price-list'>
            <BlockSquare></BlockSquare>
            <BlockSquare theme='orange'></BlockSquare>
            <BlockSquare></BlockSquare>
        </div>
    )
}