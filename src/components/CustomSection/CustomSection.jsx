import clsx from 'clsx'
import './CustomSection.scss'

export default function CustomSection(props) {
    const {
        theme,
        children
    } = props

    return (
        <div className={clsx('custom-section', theme && `custom-section--${theme}`)}>
            {children}
        </div>
    )
}