import scss from './Services.module.scss';
import ServicesHead from './ServicesHead';
import ServicesList from './ServicesList/ServicesList';
import servicesData from './services-data';

const Services = () => {
    return (
        <section className={scss.section}>
            <ServicesHead />
            <ServicesList services={servicesData} />
            {/* Add your service components here */}
        </section>
    );
};

export default Services;
