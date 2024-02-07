import UsedTechnology from '../UsedTechnology/UsedTechnology'
import './AllTechnologies.scss'
import NextJSIcon from '../../assets/icons/teenyicons_nextjs-outline.png'
import ReactIcon from '../../assets/icons/teenyicons_react-outline.png'
import NestJSIcon from '../../assets/icons/logos_nestjs.png'
import NodeJSIcon from '../../assets/icons/mdi_nodejs.png'
import TypeScriptIcon from '../../assets/icons/Group.png'
import ReduxIcon from '../../assets/icons/logos_redux.png'
import JavaScriptIcon from '../../assets/icons/skill-icons_javascript.png'
import stars from '../../assets/icons/Shining stars.png'
import image from '../../assets/icons/Vector.png'
import MailButton from '../MailButton/MailButton'

export default function AllTechnologies(props) {
    const {
        onClick,
    } = props

    const technologies = [
        {
            name: 'NextJS',
            value: NextJSIcon
        },
        {
            name: 'React',
            value: ReactIcon
        },
        {
            name: 'NestJs',
            value: NestJSIcon
        },
        {
            name: 'NodeJs',
            value: NodeJSIcon
        },
        {
            name: 'TypeScript',
            value: TypeScriptIcon
        },
        {
            name: 'Redux',
            value: ReduxIcon
        },
        {
            name: 'JavaScript',
            value: JavaScriptIcon
        },
    ]

    const mappedImages = technologies.map((technology) =>
        <UsedTechnology
            key={technology.name}
            src={technology.value}
            alt={technology.name}
            description={technology.name}
        />
    )

    return (
        <div className='all-technologies'>
            <div className='all-technologies__images'>
                {mappedImages}
                <img src={image} alt='vector' className='all-technologies__vector'/>
                <img src={stars} alt='stars' className='all-technologies__stars'/>
            </div>
            <MailButton
                theme='bigger'
                className='all-technologies__button'
                onClick={onClick}
            >
                НАПИСАТЬ МНЕ
            </MailButton>
        </div>
    )
}