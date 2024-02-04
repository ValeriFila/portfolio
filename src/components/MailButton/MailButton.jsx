import './MailButton.scss'
import clsx from "clsx";
export default function MailButton(props) {
    const {
        theme,
        className,
        children,
    } = props
    return (
        <button
            className={clsx('mail-button', theme && `mail-button--${theme}`, className)}
        >
            {children}
        </button>
    )
}