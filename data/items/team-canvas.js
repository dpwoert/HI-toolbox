import React from 'react';

export default {
	name: 'Team canvas',
	slug: 'team-canvas',
	icon: 'images/team-canvas.svg',

	description: (
		<div>
			<p>A strong <span className="highlight">team culture</span> can provide more effectiveness and better performance of a team (Shin et al., 2015). To help teams create this team culture Alex Ivanov and Mitya Voloshchuk created the Team Canvas. This is a tool based on the Business Model Canvas but then specifically designed to form a team culture (Ivanov and Voloshchuk, no date). </p>
			<p>In my opinion this is the best tool to use in the <span className="highlight">first stage of a project</span>. This canvas will “bring team members together, clarify their goals, figure out their motivations and help them to be more aligned and productive” (Ivanov and Voloshchuk, no date). It will make the group evolve to stage 2 of the Integrated Model of Group Development faster, while also assisting them to overcome issues during the second stage. </p>
		</div>
	),

	//1-10
	flexbility: 5,

	//1-5 || null
	groupDev: 1,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 2,

	//1-10
	size: 4
}
