import React from 'react';

export default {
	name: 'Exp. map',
	slug: 'experience-journey-map',
	icon: 'images/experience-journey-map.svg',

	description: (
		<div>
			<p>At the end of a project, or when a project has been running for a longer period it might be interesting to map out experiences of all team members in an experience journey map. Hereby the vertical line ranges from happy to sad while the horizontal axis represents time. Group members add important events like tasks, milestones and meetings to the timeline and then individually draw out their <span className="highlight">emotions over time</span> in the chart. In my experience it is really valuable to see how team members all had different emotions than yours. It is a good point to see differences, and talk about those differences in emotions. What cause them, and should they be prevented in the future?</p>
			<img src="images/chart/exp-map.svg" className="chart" />
		</div>
	),

	//1-10
	flexbility: 4,

	//1-5 || null
	groupDev: 5,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 2,

	//1-10
	size: 3
}
