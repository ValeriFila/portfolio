import './CustomFooter.scss'
import logo from '../../assets/icons/logo.svg'
import twitter from '../../assets/icons/twitter (1).png'
import inst from '../../assets/icons/instagram.png'
import ticktock from '../../assets/icons/tiktok.png'
import linkedin from '../../assets/icons/icons8-линкедин-50.png'
import gitHub from '../../assets/icons/github-mark.png'
import leetCode from '../../assets/icons/icons8-level-up-your-coding-skills-and-quickly-land-a-job-24.png'

export default function CustomFooter() {
    const currentYear = (new Date).getFullYear()
    const socialMedia = [
        twitter,
        inst,
        ticktock,
    ]
    const socialMediaMapped = socialMedia.map((img) => (
        <img
            src={img}
            alt='img'
            className='custom-footer__primary__main-info__social__img'
        />
    ))

    const platforms = [
        linkedin,
        gitHub,
        leetCode,
    ]
    const platformsMapped = platforms.map((img) => (
        <img
            src={img}
            alt='img'
            className='custom-footer__primary__support__images__img'
        />
    ))

    const links = [
        'Обо мне',
        'Технологии',
        'Примеры',
        'Контакты',
        'Прайс-лист',
        'Блог',
    ]
    const linksMapped = links.map((link) => (
        <p className='custom-footer__primary__units__links-block__link'>{link}</p>
    ))

    return (
        <div className='custom-footer'>
            <div className='custom-footer__primary'>
                <div className='custom-footer__primary__main-info'>
                    <div className='custom-footer__primary__main-info__logo'>
                        <img src={logo} alt='logo'/>
                        <p>©{currentYear}</p>
                    </div>
                    <div className='custom-footer__primary__main-info__text'>
                        <p className='custom-footer__primary__main-info__text__p'>Для связи альтернативным способом, можно написать в следующие соцсети:</p>
                    </div>
                    <div className='custom-footer__primary__main-info__social'>
                        {socialMediaMapped}
                    </div>
                </div>
                <div className='custom-footer__primary__units'>
                    <div className='custom-footer__primary__units__links-block'>
                        {linksMapped}
                    </div>
                </div>
                <div className='custom-footer__primary__support'>
                    <p className='custom-footer__primary__support__p'>Подробно ознакомиться с моими работами можно на следующих платформах:</p>
                    <div className='custom-footer__primary__support__images'>
                        {platformsMapped}
                    </div>
                </div>
            </div>
            <div className='custom-footer__underline'>
                <hr className='custom-footer__underline__line' />
                <div className='custom-footer__underline__text'>
                    <p>©{currentYear}. Все права защищены.</p>
                    <p>Условия • Конфиденциальность</p>
                </div>
            </div>
        </div>
    )
}