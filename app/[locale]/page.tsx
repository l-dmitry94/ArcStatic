import ContactsPage from '@/components/ContactsPage/ContactsPage';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Projects from '@/components/Projects';
import Proposal from '@/components/Proposal/Proposal';
import Services from '@/components/Services';

const Home = () => {
    return (
        <>
            <Container>
                <main>
                    <Hero />
                    <Services />
                    <Proposal />
                    <Projects />
                    <ContactsPage />
                </main>
            </Container>
        </>
    );
};

export default Home;
