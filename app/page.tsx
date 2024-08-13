'use client';
import { Button } from '@/components/Button/Button';
import { ButtonType } from '@/components/Button/constants';

const Home = () => {
    return (
        <>
            <main>ArcStatic</main>
            <Button
                onClick={() => alert('Hello')}
                text={'Book a consultation'}
                buttonType={ButtonType.SECONDARY}
            />
            <Button
                onClick={() => alert('Hello')}
                text={'Book a consultation'}
                buttonType={ButtonType.DEFAULT}
            />
        </>
    );
};

export default Home;
