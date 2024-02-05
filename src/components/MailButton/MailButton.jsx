import './MailButton.scss'
import clsx from 'clsx'

export default function MailButton(props) {
    const {
        theme,
        className,
        onClick,
        children,
    } = props

    return (
        <button
            className={clsx('mail-button', theme && `mail-button--${theme}`, className)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}