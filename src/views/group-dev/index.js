import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Intro extends Component {

	render() {
		return (

				<div className="intro right-pane">

					<Link to="/" className="link-home" onClick={this.resumeViz} />

					<div className="content">
						<h1>Group development</h1>
						<p>Next to the strategic side of project management, group development plays a very important step in project management. Sadly, for a lot of projects this is either overlooked or not being taken seriously enough in my experience. In my experience at Hyper Island I learn to value group development since I saw projects I worked on delivered better results.</p>
						<p>While developing a group there can be 5 stages defined according to Susan Wheelan in her Integrated Model of Group Development (Wheelan, 2003). These stages are as follows:</p>

						<ul>
							<li>
								<span className="highlight">Stage 1: dependency and inclusion</span><br />
								In this stage a group is just formed. Group members might not have worked together, or not even know each other. This stage is characterized by a significant member dependency on the designated leader, concerns about safety in the group and inclusion issues. Therefore, members in the group are passive, trying to avoid conflict and rely much on leaders and powerful group members to provide direction. Members of the team may do some ‘pseudo-work’, like exchanging stories about outside activities or other topics that are not relevant to group goals.
							</li>
							<li>
								<span className="highlight">Stage 2: period of counterdependency and fight</span><br />
								In this stage a team will try to define a unified set of goals, values, and operational procedures. This could potentially bring conflict to the group. Although conflict seems bad, it is vital to create a climate of trust and establishment where members feel free to disagree with each other. In the end, it is not about avoiding conflict (since it is bound the happen), it is about solving conflict in the best way possible.
							</li>
							<li>
								<span className="highlight">Stage 3: Trust and structure stage</span><br />
								When a group works through the second stage of conflict, it will find itself being more open and task-oriented. This stage will be characterized by more mature negotiation about roles, organization and procedures. At this stage members will solidify positive working relationships with the other team members.
							</li>
							<li>
								<span className="highlight">Stage 4: Work stage</span><br />
								In this stage the team overcame most of the issues of previous stages and can now focus on being productive and effective. Therefore  can focus most of its energy on goal achievement and task accomplishment.
							</li>
							<li>
								<span className="highlight">Stage 5: Group termination</span><br />
								This stage might not be faced for all groups, since not all groups have a distinct end point. Impending termination might cause trouble within the group. Members interest and opinion may shift, which might cause fractions in the group. This could give issues and disruption in the group.
							</li>
						</ul>
					</div>
				</div>

		);
	}
}
