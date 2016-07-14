import React from 'react';

export default {
	name: 'Waterfall method',
	slug: 'waterfall',
	icon: 'images/waterfall.svg',

	description: (
		<div>
			<p>The Waterfall method stems from a paper released in 1970 by Winston Royce. In this paper Royce talks about his personal view on how to develop software effectively. In the agile community this waterfall methodology is often negatively described as the complete opposite of what agile is (Agile Nutshell, n.d.; Grech, 2015). In here waterfall stands for a <span className="highlight">chained linear approach</span>. A waterfall project is divided into stages or steps, and a step can only be started if the step before is finished. This means that within the Waterfall method the three elements (budget, time and specifications) of the <span className="highlight">project triangle are fixed</span>.</p>
			<p>The positive side of this is thus that all risks and costs could be inventorised beforehand. This however means that a scope change or an overseen risks could potentially be dangerous for project deadlines to be met. The bigger and complex a project becomes, the bigger this risks becomes. In my experience Waterfall is thus better suited for smaller projects whereby <span className="highlight">all risks can be reasonably overseen and predicted</span>.</p>
			<img src="images/chart/waterfall.svg" className="chart" />
			<p>In the original Waterfall paper (Royce, 1970) the author sees the shortcomings of this linear approach. Royce therefore proposes to have an <span className="highlight">iterative approach</span>. Although the paper is aimed towards software development and writing documentation, what he proposes is something we might call a minimum viable product today. First, create one iteration to have a better feeling for all the difficulties and pitfalls. After this exploratory iteration you are better able to precisely plan the next iteration.</p>
		</div>
	),

	//1-10
	flexbility: 3,

	//1-5 || null
	groupDev: null,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 0,

	//1-10
	size: 5
}
