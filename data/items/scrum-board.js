import React from 'react';

export default {
	name: 'Scrum board',
	slug: 'scrum-board',
	icon: 'images/scrum-board.svg',

	description: (
		<div>
			<p>The planning for Scrum is done with a ‘scrum board’. This board will consist of at least 4 panes: <span className="highlight">‘backlog’, ‘todo’, ‘doing’ and ‘done’</span> (Jongerius and Berghuis, 2013). All tasks will start in the backlog. At the beginning of a each sprint the team decides which tasks will be moved from the backlog to the todo section. When the sprint starts the team commits to doing all tasks in the todo section. Team members can then, when a sprint has started, move items to doing when a task is being done and done when a team member finishes the tasks.</p>
			<p>To make a successful commitment in the todo section a team can make use of <span className="highlight">estimations and velocity</span>. For an effective tool to create estimations see scrum poker. When estimations have been made, a team can measure their velocity. This means the rate of which a team can solve tasks. To visualise this, a team can add a <span className="highlight">burndown chart</span> to the scrum board. A scrum board is a line chart wherefore each day the total number of estimations that are still are open are plotted. This means the burndown chart will move down the vertical axis. When seeing the velocity a team is then able to predict if the commitment of tasks can be fulfilled.</p>
		</div>
	),

	//1-10
	flexbility: 7.5,

	//1-5 || null
	groupDev: null,

	//time-management[hierachical]: 0, time-management[holistic]: 1, group-dev: 2
	type: 1,

	//1-10
	size: 3
}
