import './Title.scss'

export default function Title(props) {
    const {
        text,
        subText,
    } = props

    return (
        <div className='title'>
            <p className='title__text'>{text}</p>
            <p className='title__sub-text'>{subText}</p>
        </div>
    )
}
