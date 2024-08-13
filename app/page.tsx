'use client';
import { Button } from '@/components/Button/Button';
import { ButtonType } from '@/components/Button/constants';

const Home = () => {
    return (
        <>
            <main>ArcStatic</main>
            <Button
                onSubmit={() => alert('Hello')}
                text={'Book a consultation'}
                type={ButtonType.SECONDARY}
            />
            <Button
                onSubmit={() => alert('Hello')}
                text={'Book a consultation'}
                type={ButtonType.DEFAULT}
            />
        </>
    );
};

export default Home;
