import { ContactsPage } from '@/components/ContactsPage/ContactsPage';
import Container from '../components/Container';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
            <Container>
                <main>
                    <Hero />
                    <ContactsPage />
                </main>
            </Container>
        </>
    );
};

export default Home;
