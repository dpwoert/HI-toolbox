import React from 'react';

export default {
	name: 'Gantt chart',
	slug: 'gant-chart',
	icon: 'images/gant-chart.svg',
	// description: 'Energizers are great when your team needs a boost. They are suitable to use at any point throughout the day, or at the beginning of a meeting. Energizers promote positive interaction between team members, help them to bond and effectively boost enthusiasm and morale. Download our deck of energizers, cut them up and place them in a fishbowl so that you can quickly grab one when you need help getting your team moving.',

	description: (
		<div>
			<p>The Gantt chart has been developed by Henri Gantt (1861-1919). Gantt is seen as one of the forefathers of project management. The Gantt chart got famous since it was one of the first tools to recognize the benefits of <span className="highlight">splitting large projects into smaller, better manageable tasks</span> (Seymour and Hussein, 2014). Even though the Gantt charts is one of the oldest project management tools, it is still widely used today. Gantt charts were originally a production planning tool, used to plan and manage batch production using a tabular approach. Nowadays it is used in the terms of a time dependent approach to production planning while using a graph to visualize information. (Wilson, 2003).</p>
			<p>Gantt chart consist of task on the vertical axis and time on the horizontal axis. Every task has a begin point and endpoint on the horizontal axis, while having the same position of the vertical axis. This will create blocks of tasks, whereby as a team member you can easily see relatedness of task and a easily readable overview.</p>
			<img src="images/chart/gantt.svg" className="chart" />
		</div>
	),

	//1-10
	flexbility: 1,

	//1-5 || null
	groupDev: null,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 0,

	//1-10
	size: 2
}
