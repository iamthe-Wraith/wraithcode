import { EXPERIMENTS_GITHUB_URL } from "$lib/constants/url";
import type { PageServerLoad } from "./$types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const load: PageServerLoad = async () => {
    const experiments = [
		{
			name: 'Working with the IndexedDB API',
			route: '/the-lab/experiments/indexdb',
			timestamp: dayjs('Fri Sep 28 2024 00:25:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
			description: 'A small experiment to work with the IndexedDB API and learn how to use it.',
			links: [
				{
					text: 'View on Github',
					url: `${EXPERIMENTS_GITHUB_URL}/indexdb`,
					icon: 'fa-brands fa-github'
				}
			]
		},
		{
			name: 'Styling and animating the <details> element',
			route: '/the-lab/experiments/html/details',
			timestamp: dayjs('Thur Sep 5 2024 12:21:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
			description: 'Playing around with the <details> element to see what can be done with it.',
			links: [
				{
					text: 'View on Github',
					url: `${EXPERIMENTS_GITHUB_URL}/html/details`,
					icon: 'fa-brands fa-github'
				}
			]
		},
		{
			name: 'Let\'s Play with the DEV API',
			route: '/the-lab/experiments/dev-to-api',
			timestamp: dayjs('Fri Jun 21 2024 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
			description: 'This is a little snippet used in one of my blog posts to illustrate how to work with the dev.to API.',
			links: [
				{
					text: 'View on Github',
					url: `${EXPERIMENTS_GITHUB_URL}/dev-to-api`,
					icon: 'fa-brands fa-github'
				}
			]
		},
		// {
		// 	name: 'Desktop Notifications',
		// 	route: '/the-lab/experiments/desktop-notifications',
		// 	timestamp: dayjs('Wed Jun 12 2024 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
		// 	description: 'A small experiment using the Notifications Web API.',
		// 	links: [
		// 		{
		// 			text: 'View on Github',
		// 			url: `${experimentsDirPrefix}/desktop-notifications`,
		// 			icon: 'fa-brands fa-github'
		// 		}
		// 	]
		// },
	];

    return { experiments };
};