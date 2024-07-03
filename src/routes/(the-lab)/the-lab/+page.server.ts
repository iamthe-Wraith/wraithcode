import type { PageServerLoad } from "./$types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const load: PageServerLoad = async () => {
	const experimentsDirPrefix = 'https://github.com/iamthe-Wraith/wraithcode/blob/c27a39df2cc0cdae034919aee673117d2ea08565/src/routes/(the-lab)/the-lab/experiments';
    const experiments = [
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
		{
			name: 'Let\'s Play with the DEV API',
			route: '/the-lab/experiments/dev-to-api',
			timestamp: dayjs('Fri Jun 21 2024 00:00:01 GMT-0400 (Eastern Daylight Time)').utc().toDate(),
			description: 'This is a little snippet used in one of my blog posts to illustrate how to work with the dev.to API.',
			links: [
				{
					text: 'View on Github',
					url: `${experimentsDirPrefix}/dev-to-api`,
					icon: 'fa-brands fa-github'
				}
			]
		}
	];

    return { experiments };
};