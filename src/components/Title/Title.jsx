import './Title.scss'
import clsx from 'clsx'

export default function Title(props) {
    const {
        text,
        subText,
        src,
        alt,
        classNameImage,
        className,
    } = props

    return (
        <div className='title'>
            {/*<p className='title__text'>{text}</p>*/}
            <p className={clsx('title__text', className)}>{text}</p>
            <img src={src} alt={alt} className={classNameImage}/>
            <p className='title__sub-text'>{subText}</p>
        </div>
    )
}
