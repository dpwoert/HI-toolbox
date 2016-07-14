import React from 'react';

export default {
	name: 'Lean',
	slug: 'lean',
	icon: 'images/lean.svg',

	description: (
		<div>
			<p>Lean management originates from the Toyota Production System. Lean management is a multifaceted concept that may be grouped together as distinct bundles of organizational practices (Yang, Hong, and Modi, 2011). Since it originates from manufacturing, these practices are mostly aimed against <span className="highlight">waste reduction</span>, and thus being as efficient as possible. An example of one of these practices is Just in Time. Delivering needed parts only just before it is needed, so to prevent storing parts. The idea behind lean management in the end is to use lean practices synergistically. This to create a streamlined, high quality system that produces finished products at the pace of customer demand with little or no waste (Shah, 2003). </p>
			<p>This means lean management, in my opinion, only becomes interesting for <span className="highlight">longer lasting projects</span> that takes months instead of weeks. Lean is also interesting when external suppliers take a role into the project since it provides practices around this.</p>
		</div>
	),

	//1-10
	flexbility: 6,

	//1-5 || null
	groupDev: null,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 1,

	//1-10
	size: 5
}
