import React from 'react';

export default {
	name: 'Scrum poker',
	slug: 'scrum-poker',
	icon: 'images/scrum-poker.svg',

	description: (
		<div>
			<p>Scrum poker is a small game that can help teams in giving <span className="highlight">consequent estimations</span> (Jongerius and Berghuis, 2013). Estimation are either given in points or in hours. I prefer giving it in points, since this better represent effort. To give it in point, a team needs to create a range of points. A commonly used range is the fibonacci sequence: <span className="highlight">‘1, 2, 3, 5, 8, 12, 20, 40, 60, 100’</span>. </p>
			<p>The facilitator of the scrum poker session will point towards an unestimated tasks in the todo section. Every team member will then <span className="highlight">secretly</span> give a point to this task. When everybody is ready, the facilitator will ask for everybody to make their point public at the same time. To do this a team can either write down their points on a piece of paper or use a dedicated set of scrum poker cards. </p>
		</div>
	),

	//1-10
	flexbility: 7.5,

	//1-5 || null
	groupDev: null,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 1,

	//1-10
	size: 1
}
