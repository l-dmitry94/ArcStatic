import ContactsPage from '@/components/ContactsPage/ContactsPage';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Projects from '@/components/Projects';

const Home = () => {
    return (
        <>
            <Container>
                <main>
                    <Hero />
                    <Projects />
                    <ContactsPage />
                </main>
            </Container>
        </>
    );
};

export default Home;
