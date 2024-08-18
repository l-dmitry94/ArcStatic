import { StaticImageData } from 'next/image';

export interface IProject {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
}

export interface IProjectList {
    projects: IProject[];
}
