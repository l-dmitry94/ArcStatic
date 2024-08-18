import ContactsPage from '@/components/ContactsPage/ContactsPage';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Projects from '@/components/Projects';
import Proposal from '@/components/Proposal/Proposal';

const Home = () => {
    return (
        <>
            <Container>
                <main>
                    <Hero />
                    <Proposal />
                    <Projects />
                    <ContactsPage />
                </main>
            </Container>
        </>
    );
};

export default Home;
