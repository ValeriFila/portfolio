import './BlockSquare.scss'
import clsx from 'clsx'
export default function BlockSquare(props) {
    const {
        theme
    } = props

    return (
        <div className='rectangle'>
            <div className={clsx('rectangle__square' , theme && `rectangle__square--orange`)}>

            </div>
            <div className={clsx('rectangle__square' , theme && `rectangle__square--orange`)}>

            </div>
        </div>
    )
}