import React from 'react';

export default {
	name: 'Milestones',
	slug: 'milestones',
	icon: 'images/gant-chart.svg',

	description: (
		<div>
			<p>A method I have been using to get clarity of deliverables and deadlines is making a <span className="highlight">timeline with milestones</span>, a so called milestone chart. This is quite similar to a Gantt chart, yet it does not go into individual tasks. It is meant as a indication of the global timeline for the group. This so the group can get more clarity on a macro scale.</p>
			<p>A milestone chart includes completion of key deliverables, start and finish of major project phases, events external to the projects, group members on holiday etc (Milosevic, Patanakul, and Srivannaboon, 2010). The major advantage of this chart is by visualising it is simple and useful for both planning and tracking. This is also its drawback, when used without a separate more advanced planning tool, it is difficult to understand how to reach a milestone. It becomes even harder to read when milestones are too close to each other on the timeline. Try to space out the milestones, this is not only easier to overview but will also make for better time management (Milosevic, Patanakul, and Srivannaboon, 2010).</p>
			<img src="images/chart/milestones.svg" className="chart" />
		</div>
	),

	//1-10
	flexbility: 2,

	//1-5 || null
	groupDev: null,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 0,

	//1-10
	size: 3
}
