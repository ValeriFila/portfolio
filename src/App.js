import './App.css'
import Header from "./components/Header/Header";
import HelloSection from "./components/HelloSection/HelloSection";
import CustomSection from "./components/CustomSection/CustomSection";
import Title from "./components/Title/Title";
import Form from "./components/Form/Form";

export default function App() {
    return (
        <div className="App">
            <CustomSection theme='orange'>
                <Header />
                <HelloSection />
            </CustomSection>

            <CustomSection>
                <Title
                    text='Связаться со мной'
                    subText='оставь свои контакты и я обязательно тебе отвечу'
                />
                <Form />
            </CustomSection>
        </div>

    )
}

