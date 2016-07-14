import React from 'react';

export default {
	name: 'Feedback and Reflection',
	slug: 'feedback-reflection',
	icon: 'images/feedback-reflection.svg',

	description: (
		<div>
			<p>A very important part of an effective team culture is feedback and reflection session with the team. In my experience giving effective feedback and doing proper reflection can make teams and individuals grow. When done inappropriately, it can cause conflict and struggle in a team. During the job I had before joining Hyper Island, we also used feedback and reflection, but looking back on it it was not done well. It was aimed at <span className="highlight">improving as a team</span>, the ego was still too important. Reflections should be from the I-perspective. It should be how you think and feel the project went so far. You can’t judge for others, or ‘the group’. Good questions to ask are: What did I do? How did I do it? What does this mean for both myself as a professional and those whom I serve? (Schön, 1983).</p>
			<p>At Hyper Island we have learned to give feedback according the principles of effective feedback from Rosenberg (Rosenberg and G, 2003). Feedback should be positive and constructive, never negative. It is meant to learn. Not as a competition of rudeness, which I have experienced before coming to Hyper Island. To prevent this from happening asking the right questions can facilitate group members into giving better feedback. Question to answer to all other team mate can be: <span className="highlight">“To _____: What I appreciate most about you is... What I would like to see more from you is... Signed, _____.”</span>, which can be gifted as a present on a post-it (Hyper Island, no date).</p>
		</div>
	),

	//1-10
	flexbility: 5,

	//1-5 || null
	groupDev: 2,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 2,

	//1-10
	size: 7
}
