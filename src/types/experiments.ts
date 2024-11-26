export interface IExperiment {
    name: string;
    route: string;
    description: string;
    links: IExperimentLink[];
    createdAt: Date;
}

export interface IExperimentLink {
    text: string;
    url: string;
    icon: string;
}