import React from 'react';

export default {
	name: 'Scrum',
	slug: 'scrum',
	icon: 'images/scrum.svg',

	description: (
		<div>
			<p>Scrum is created in 1986 and is the main dominant player in the agile market. Instead of agile, which is an ideology, scrum is a method for project management. Traditional management will fix the three element of the project triangle (time, budget and specifications) beforehand, scrum accepts that these elements can not be planned before hand since new insights (either internal or external) might change these elements (Jongerius and Berghuis, 2013).</p>
			<p>To adapt for change scrum works with a so-called <span className="highlight">backlog</span>. This is a list of all the tasks that needs to be done. These tasks are preferably added, and sorted on importance together with the customer. This prioritizing of the backlog is important, since it is not a guarantee that all tasks will be done at the end of a project.</p>
			<img src="images/chart/scrum.svg" className="chart" />
			<p>Scrum works iteratively in <span className="highlight">‘sprints’</span>. A sprint is a predefined time to finish a number of tasks. Before each sprint the team determines which tasks can be accomplished in that particular sprint. The number of sprints in a project is not fixed. The client can choose to have more or less sprints, which will impact the number of features in the delivered product. This is possible since every sprint should end with a fully workable product.</p>
			<p>One of the biggest disadvantages, in my opinion, of using Scrum is the <span className="highlight">focus on these short iterations</span>, which makes it easy to lose the big picture. To counteract this I have been using milestone timelines to get a global overview of the project. In this timeline you can plan the sprints beforehand, and every sprint ends with its own milestone; the deliverable.</p>
		</div>
	),

	//1-10
	flexbility: 7.5,

	//1-5 || null
	groupDev: null,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 1,

	//1-10
	size: 7
}
