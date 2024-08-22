import { StaticImageData } from 'next/image';

export interface IService {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
}

export interface IServiceList {
    services: IService[];
}
