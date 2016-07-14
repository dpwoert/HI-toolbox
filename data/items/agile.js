import React from 'react';

export default {
	name: 'Agile',
	slug: 'agile',
	icon: 'images/agile.svg',

	description: (
		<div>
			<p>Agile is a modern way of looking at project management. It embraces the fact that most projects are too complex to plan beforehand. Agile is born out of the <span className="highlight">agile manifesto</span> created in 2001 (Beck et al., 20010. The agile manifesto was created out of a need to change the software development process. Agile is not a method, but rather an <span className="highlight">ideology</span>. At the core of the agile approach is the embracing of change, to always be always aware of changes in or surrounding a product under development. The wishes of the user, the environment, the competition, the market or technology, they all might change. Therefore the agile manifesto advises to <span className="highlight">“inspect and adapt”</span> (Hunt, 2015). To achieve this the agile manifesto proposes more self-leadership and less preplanning and middle management: <span className="highlight">“Individuals and interactions over processes and tools”</span> (Jeffries, 2015). </p>
			<p>Some of the original makers of the agile manifesto are now <span className="highlight">not longer supporting it</span>, questioning it or are proposing changes (Hunt, 2015; Thomas, 2015; Jeffries, 2015). The main problem seems not be it’s ideals, but rather the way people implement those ideals in the real world. An industry has formed around agile, promoting and training people into following a fixed rulebook of method & tools over <span className="highlight">thinking and adapting to change</span> (Hunt, 2015). This is the reason why I made this project into this toolbox. I really value the core principles of the agile manifesto, but to apply this you need to more than a rulebook. You need to have the freedom to pick the right method, and when needed even change (or hack) it.</p>
		</div>
	),

	//1-10
	flexbility: 8.5,

	//1-5 || null
	groupDev: null,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 1,

	//1-10
	size: 10
}
