import React from 'react';

export default {
	name: 'Holistic PM',
	slug: 'holistic-pm',
	icon: 'images/holistic.svg',

	description: (
		<div>
			<p>Holistic project management is a form of <span className="highlight">self-managing teams</span>. In these teams there is no hierarchy, there is not somebody like a boss or an authoritative role (Bernstein et al., 2016). In a holacracy everybody has decision making powers, which I found to be a pleasant working experience during Hyper Island. This because in my experience, when everybody has decision making power, everybody will also feel a great deal of responsibility and involvement. This creates teams that are better suited for the complex and ever-changing, situation we have to deal with, since a hierarchy will also create a bureaucracy (Bernstein et al., 2016). </p>
			<p>The holistic approach is still a very new way of managing organizations and teams. There is still a lot of experimentation going around, some have some degrees of success like Zappos, and others failed like Medium (Bernstein et al., 2016). In his book Reinventing Organisations, Laloux (2014) points that holistic organisations is the last step in the evolution of organisation. He calls these holistic organisations <span className="highlight">‘Teal organisations’</span>. These organisations are designed to enable whole individuals, so not narrow professional selves, to self-organize and self-manage.</p>
		</div>
	),

	//1-10
	flexbility: 10,

	//1-5 || null
	groupDev: null,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 1,

	//1-10
	size: 7
}
