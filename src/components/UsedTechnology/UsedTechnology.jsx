import './UsedTechnology.scss'

export default function UsedTechnology(props) {
    const {
        src,
        alt,
        description
    } = props

    return (
        <div className='technology'>
            <img
                src={src}
                alt={alt}
                className='technology__image'
            />
            <p
                className='technology__description'
            >
                {description}
            </p>
        </div>
    )
}