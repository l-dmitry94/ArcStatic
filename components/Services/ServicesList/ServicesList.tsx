import { FC } from 'react';
import { IServiceList } from './Services.types';
import scss from './ServicesList.module.scss';
import ServicesListItem from './ServicesListItem';

const ServicesList: FC<IServiceList> = ({ services }) => {
    return (
        <ul className={scss.servicesList}>
            {services.map((service) => (
                <ServicesListItem key={service.id} {...service} />
            ))}
        </ul>
    );
};

export default ServicesList;
