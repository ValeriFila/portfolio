import clsx from 'clsx'
import './CustomSection.scss'

export default function CustomSection(props) {
    const {
        theme,
        refer,
        children
    } = props

    return (
        <div
            className={clsx('custom-section', theme && `custom-section--${theme}`)}
            ref={refer}
        >
            {children}
        </div>
    )
}