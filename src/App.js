import './App.scss'
import Header from "./components/Header/Header";
import HelloSection from "./components/HelloSection/HelloSection";
import CustomSection from "./components/CustomSection/CustomSection";
import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import {useRef} from 'react'
import AllTechnologies from './components/AllTechnologies/AllTechnologies'
import vector from '../src/assets/icons/Vector.png'
import scribble from '../src/assets/icons/Scribble (1).png'
import sparkle from '../src/assets/icons/Sparkle.png'
import BlockSquare from './components/BlockSquare/BlockSquare'
import PriceList from './components/PriceList/PriceList'
import imgScribble from './assets/icons/Scribble.png'
import QuotesBlock from './components/QuotesBlock/QuotesBlock'
import CustomFooter from './components/CustomFooter/CustomFooter'

export default function App() {
    const sectionRef = useRef()
    function handleClickScrollToForm() {
        sectionRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    function handleClickScrollToExample() {
        console.log('scroll to the examples...')
    }

    return (
        <div className="App">
            <CustomSection theme='orange'>
                <Header
                    onClickExamples={handleClickScrollToExample}
                    onClickForm={handleClickScrollToForm}
                />
                <HelloSection
                    onClick={handleClickScrollToForm}
                />
            </CustomSection>

            <CustomSection>
                <Title
                    className='App__title'
                    classNameImage='App__title--scribble'
                    src={scribble}
                    alt='scribble'
                    text='Я занимаюсь разработкой веб-приложений'
                    subText='и использую следующие технологии'
                />
                <AllTechnologies
                    onClick={handleClickScrollToForm}
                />
            </CustomSection>

            <CustomSection
                theme='little'
            >
                <QuotesBlock>

                </QuotesBlock>
            </CustomSection>

            <CustomSection>
                <Title
                    className='App__title'
                    classNameImage='App__title--sparkle'
                    src={sparkle}
                    alt='sparkle'
                    text='Прайс-лист'
                    subText='*цены примерные и возможно будут отличаться в зависимости от сложности проекта '
                />
                <PriceList
                    onClick={handleClickScrollToForm}
                ></PriceList>
            </CustomSection>

            <CustomSection refer={sectionRef}>
                <Title
                    className='App__title'
                    classNameImage='App__title--vector'
                    src={vector}
                    alt='vector'
                    text='Связаться со мной'
                    subText='оставь свои контакты и я обязательно тебе отвечу'
                />
                <Form />
            </CustomSection>

            <CustomFooter></CustomFooter>
        </div>

    )
}

