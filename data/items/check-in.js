import React from 'react';

export default {
	name: 'Check-in/out',
	slug: 'check-in-out',
	icon: 'images/check-in.svg',

	description: (
		<div>
			<p>The check-in and check-out is a small, but very effective tool we have learned at Hyper Island. Every check-in/out starts with a question, and every group member will answer that question (Hyper Island, n.d.). Questions can be ‘what do you expect of this day’, ‘How do you feel’ or simply check-in/out with one word describing your feeling at the moment. This check-in can be combined with the <span className="highlight">stand-up in Scrum</span>. With the Scrum stand-up every team member at the beginning of the day tells the team what he or she is going to do and possible issues for that day (Jongerius and Berghuis, 2013).</p>
		</div>
	),

	//1-10
	flexbility: 7.5,

	//1-5 || null
	groupDev: 3,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 1,

	//1-10
	size: 3
}
