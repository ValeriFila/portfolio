import './QuotesBlock.scss'
import star from '../../assets/icons/Star 4.png'
import spring from '../../assets/icons/Vector 4.png'
import sparkle from '../../assets/icons/Sparkle.png'
import vector from '../../assets/icons/Scribble.png'
import quote from '../../assets/icons/quote.png'
export default function QuotesBlock() {
    return (
        <div className='quotes-block'>
            <img src={star} alt='star' className='quotes-block__star'/>
            <img src={spring} alt='spring' className='quotes-block__spring'/>
            <div className='quotes-block__text-box'>
                <img src={quote} alt='quote'  className='quotes-block__text-box--quote'/>
                <p className='quotes-block__text-box--text'>Моя миссия - создать качественный продукт, которым ты останешься доволен</p>
                <img src={sparkle} alt='sparkle' className='quotes-block__text-box--image'/>
            </div>
            <img src={vector} alt='vector' className='quotes-block__vector'/>
        </div>
    )
}