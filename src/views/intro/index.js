import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Intro extends Component {

	render() {
		return (

				<div className="intro right-pane">

					<div className="logos">
						<span>Made by</span>
						<div>
							<a href="http://www.dpwoert.com" target="_blank"><img src="images/me.svg" width="250" height="70" /></a>
							<a href="http://www.hyperisland.com" target="_blank"><img src="images/hyperisland@2x.png" width="140" height="17" /></a>
						</div>
					</div>

					<div className="content">
						<h1>My toolbox to improve project management</h1>
						<p>In this toolbox I am going to look and reflect upon my learnings about managing projects I have had while studying at Hyper Island and my work experience before. During my course at Hyper Island being more effective at project management was one of the most important skills I have learnt. The theories and methods itself, and the way we have learnt these at Hyper Island were all non-traditional. The last six months we have learnt by doing, we have been working in multiple project groups while <span className="highlight">applying, hacking and reflecting upon the given theory</span>. Since the given theories and methods are <span className="highlight">non-traditional</span> it is good to reflect upon these while diving deeper in the more traditional theories as well. This to get a more complete understanding of what project management actually is.</p>

						<h2>So, what is project management?</h2>
						<p>Project management has been around since mankind started working together to successfully complete projects, despite despite all the complexities and uncertainties that could have rendered these projects a failure (Seymour and Hussein, 2014). Historical projects like the pyramids, the Coliseum and the Great Chinese Wall could only made possible by <span className="highlight">coordinating planning and execution</span>. Project management is thus a dual issue of envisaging a future undertaking and the act of making it happen (Garel, 2013). While mankind has used project management for so long, little historical documentation of how mankind has applied project management remains. Project management as we now know it is a recent phenomenon, it is not until the 1950’s that organizations started applying systematic tools and techniques to complex projects whereby it broke away from other forms of activity to be identified, highlighted and generalized as a <span className="highlight">discipline of itself</span> (Garel, 2013; Seymour and Hussein, 2014).</p>
						<p>A project can be described as “a temporary group activity designed to produce a unique product, service or result” (Project Management Institute, 2001). To practice successful successful project management resources should be planned and coordinated strategically but there should also be <span className="highlight">space for group development</span>, since a project is always a group undertaking. The beginning of research into groups of humans began with ancient scholars like Plato and Aristotle discussing the nature of groups and group-level processes, yet scientific research into groups is just a century old (Wheelan, 2005).</p>
						<p>A project group will consist of different defined <span className="highlight">stakeholders</span>. These stakeholders can be internal or external and might have different, or even conflicting, interest and needs. To ensure a successful outcome a project manager might look at the project triangle; <span className="highlight">delivering on time, within budget and to specifications</span> (Eskerod and Jepsen, 2013). However this is easier said than done when projects become bigger and more complex. Project management might thus raise <span className="highlight">ethical concerns when dealing with conflicts of interest</span>. Project management is thus a very complex <span className="highlight">balancing act</span>, whereby intuition go hand in hand with rational theories and models to plan and execute. </p>

						<h2>My (short) history of project management</h2>
						<p>Before going deeper into project management models and theories, let me first tell about my own experiences before joining Hyper Island. I did my bachelor in Multimedia design and specialised myself into (front-end) development. As a developer you are naturally at the very end of a process, you need the concept and/or the design to be delivered to you before can start working. As a developer I immediately noticed this <span className="highlight">chained linear process</span> of working does not fit well with the complexity and uncertainty of a development project. </p>
						<p>The hardest job of a developer, is in my opinion, not programming itself. It is <span className="highlight">managing the organisational complexity of a project</span>. That is why I already started interesting myself in agile and Scrum before joining Hyper Island. I have worked with Scrum in multiple companies with mixed results. I learnt by doing, and especially by making mistakes.</p>
						<p>At Hyper Island I have used my learning in agile and Scrum in all the project groups I have worked in. Since for most groups I was the only one that had experience or knowledge about agile, I have learned my team mates the basics of agile and Scrum. While doing so I could reflect upon my learnings. I <span className="highlight">hacked Scrum</span> in ways to make it more suitable for the <span className="highlight">short run and chaotic projects at Hyper Island</span>. </p>
						<p><span className="highlight">What I learned during Hyper Island is that every project is unique and requires a tailor made mix of all learnt methods and tools, while building a strong group culture.</span> In this toolbox I will focus on methods and tools I have collected, used and hacked so far.</p>

						<p>
							<Link to="/literature" className="highlight">sources</Link>
						</p>

					</div>
				</div>

		);
	}
}
