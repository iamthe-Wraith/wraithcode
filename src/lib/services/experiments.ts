import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import { EXPERIMENTS_GITHUB_URL } from "$lib/constants/url";
import type { IExperiment } from "../../types/experiments";

dayjs.extend(utc);

export class ExperimentsService {
    private _experiments: IExperiment[] = [
        {
            name: 'Gradient Text',
            route: '/experiments/gradient-text',
            description: 'A simple gradient text effect using only CSS.',
            links: [
                {
                    text: 'View on Github',
                    url: `${EXPERIMENTS_GITHUB_URL}/gradient-text`,
                    icon: 'fa-brands fa-github'
                }
            ],
            createdAt: dayjs('Fri Mar 21 2025 10:30:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
        },
        {
            name: 'Lava Bricks',
            route: '/experiments/lava-bricks',
            description: 'A simple lava brick effect.',
            links: [
                {
                    text: 'View on Github',
                    url: `${EXPERIMENTS_GITHUB_URL}/lava-bricks`,
                    icon: 'fa-brands fa-github'
                }
            ],
            createdAt: dayjs('Sun Mar 02 2025 12:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
        },
        {
            name: 'Having Fun with Loading Animations',
            route: '/experiments/loading-animations-1',
            description: 'had some free time, so I thought I\'d play around with loading animation ideas.',
            links: [
                {
                    text: 'View on Github',
                    url: `${EXPERIMENTS_GITHUB_URL}/loading-animations-1`,
                    icon: 'fa-brands fa-github'
                }
            ],
            createdAt: dayjs('Fri Nov 29 2024 21:04:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
        },
        {
            name: 'Improve Text by Changing the Paint Order',
            route: '/experiments/paint-order',
            description: 'Playing around with the paint order of text to see how it changes the rendering and makes the text look different.',
            links: [
                {
                    text: 'View on Github',
                    url: `${EXPERIMENTS_GITHUB_URL}/paint-order`,
                    icon: 'fa-brands fa-github'
                },
                {
                    text: 'Documentation',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/paint-order',
                    icon: 'fa-solid fa-book'
                }
            ],
            createdAt: dayjs('Mon Nov 25 2024 20:34:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
        },
        {
            name: 'Using the Notifications API',
            route: '/experiments/notifications-api',
            description: 'A bare-bones example of using the Notifications API to display notifications.',
            links: [
                {
                    text: 'View on Github',
                    url: `${EXPERIMENTS_GITHUB_URL}/notifications-api`,
                    icon: 'fa-brands fa-github'
                },
                {
                    text: 'Documentation',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Notification',
                    icon: 'fa-solid fa-book'
                }
            ],
            createdAt: dayjs('Sat Sep 29 2024 10:53:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
        },
        {
            name: 'Working with the IndexedDB API',
            route: '/experiments/indexdb',
            description: 'A small experiment to work with the IndexedDB API and learn how to use it.',
            links: [
                {
                    text: 'View on Github',
                    url: `${EXPERIMENTS_GITHUB_URL}/indexdb`,
                    icon: 'fa-brands fa-github'
                },
                {
                    text: 'Documentation',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
                    icon: 'fa-solid fa-book'
                }
            ],
            createdAt: dayjs('Fri Sep 28 2024 00:25:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
        },
        {
            name: 'Styling and animating the <details> element',
            route: '/experiments/html/details',
            description: 'Playing around with the <details> element to see what can be done with it.',
            links: [
                {
                    text: 'View on Github',
                    url: `${EXPERIMENTS_GITHUB_URL}/html/details`,
                    icon: 'fa-brands fa-github'
                },
                {
                    text: 'Documentation',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details',
                    icon: 'fa-solid fa-book'
                }
            ],
            createdAt: dayjs('Thur Sep 5 2024 12:21:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
        },
        {
            name: 'Let\'s Play with the DEV API',
            route: '/experiments/dev-to-api',
            description: 'This is a little snippet used in one of my blog posts to illustrate how to work with the dev.to API.',
            links: [
                {
                    text: 'View on Github',
                    url: `${EXPERIMENTS_GITHUB_URL}/dev-to-api`,
                    icon: 'fa-brands fa-github'
                },
                {
                    text: 'Documentation',
                    url: 'https://developers.forem.com/api',
                    icon: 'fa-solid fa-book'
                }
            ],
            createdAt: dayjs('Fri Jun 21 2024 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
        },
        // {
        // 	name: 'Desktop Notifications',
        // 	route: '/experiments/desktop-notifications',
        // 	description: 'A small experiment using the Notifications Web API.',
        // 	links: [
        // 		{
        // 			text: 'View on Github',
        // 			url: `${experimentsDirPrefix}/desktop-notifications`,
        // 			icon: 'fa-brands fa-github'
        // 		}
        // 	],
        // 	createdAt: dayjs('Wed Jun 12 2024 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
        // },
    ];

    async getExperiments() {
        return this._experiments;
    }
}