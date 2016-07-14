import React from 'react';

export default {
	name: 'Facilitation',
	slug: 'facilitation',
	icon: 'images/facilitation.svg',

	description: (
		<div>
			<p>A practical skill I got to value during Hyper Island is facilitation. The use of the facilitation role can make sure every member in the team feels inclusive by promoting equality and letting every voice be heard. This facilitator can be somebody from inside or (preferably) outside of the team which has no decision-making authority, who takes on a neutral role and is recognised by the group to help it in problem solving or decision making (Wardale, 2013). It is important to distinguish facilitation from training/coaching and leadership, since a facilitator should be neutral and should not be authoritative or suggestive in relation to outcomes.</p>
			<p>In his research Wardale (2013) discovered that most facilitation models had the following 4 stages in common:</p>
			<ol>
				<li><span className="highlight">Preparation</span>, a facilitator might help with preparation of events likes meetings. Create the agenda, make sure the needed tools are there etc.</li>
				<li><span className="highlight">The event</span>, during the event the facilitator needs use his strong interpersonal skills and good timing to make sure everybody feels heard while still having an effective event. To do this a facilitator might suggest and lead process to use during the event like brainstorming, SWOT analyses, etc. </li>
				<li><span className="highlight">Outcomes of the event</span>, for the facilitator it is not crucial the outcome is the most effective outcome, better is an affective outcome. For the facilitator it is more important that every team member is happy with the outcome, even if there is no concrete outcome.</li>
				<li><span className="highlight">Transfer outcomes to the field</span>, a facilitator might make sure the outcomes of an event go to the field. To do this the facilitator can for example ask who is accountable for the outcomes to be implemented.</li>
			</ol>
		</div>
	),

	//1-10
	flexbility: 8,

	//1-5 || null
	groupDev: 2,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 2,

	//1-10
	size: 7
}
