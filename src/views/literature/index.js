import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Intro extends Component {

	render() {
		return (

				<div className="intro literature right-pane">

					<Link to="/" className="link-home" onClick={this.resumeViz} />

					<div className="content">
						<h1>Literature</h1>
						<ul>
							<li>Agile Nutshell (no date) Agile vs waterfall. Available at: http://www.agilenutshell.com/agile_vs_waterfall (Accessed: 11 July 2016).</li>
							<li>Beck, K., Beedle, M., van Bennekum, A., Cockburn, A., Cunningham, W., Fowler, M., Grenning, J., Highsmith, J., Hunt, A., Jeffries, R., Kern, J., Marick, B., Martin, R.C., Mellor, S., Schwaber, K., Sutherland, J. and Thomas, D. (2001) Agile Manifesto. Available at: http://agilemanifesto.org/principles.html (Accessed: 21 June 2016).</li>
							<li>Bernstein, E., Bunch, J., Canner, N. and Lee, M. (2016) Beyond the Holacracy hype. Available at: https://hbr.org/2016/07/beyond-the-holacracy-hype (Accessed: 14 July 2016).</li>
							<li>Eskerod, P. and Jepsen, A.L. (2013) Project Stakeholder management (fundamentals of project management). United Kingdom: Gower Publishing.</li>
							<li>Garel, G. (2013) ‘A history of project management models: From pre-models to the standard models’, International Journal of Project Management, 31(5), pp. 663–669. doi: 10.1016/j.ijproman.2012.12.011.</li>
							<li>Grech, T. (2015) ‘The intersection of agile and waterfall.’, Industrial Engineer: IE, 47(8), pp. 47–49.</li>
							<li>Hunt, A. (2015) ‘The failure of agile’, Andy Hunt, Pragmatic Programmer, Author, Speaker, Publisher, 6 May. Available at: http://blog.toolshed.com/2015/05/the-failure-of-agile.html (Accessed: 14 July 2016).</li>
							<li>Hyper Island (no date) Hyper Island Toolbox. Available at: http://toolbox.hyperisland.com/ (Accessed: 13 July 2016).</li>
							<li>Ivanov, A. and Voloshchuk, M. (no date) Team canvas - bring your team on the same page. Available at: http://theteamcanvas.com/ (Accessed: 13 July 2016).</li>
							<li>Jeffries, R.E. (2015) Management in agile. Available at: http://ronjeffries.com/articles/015-12/management/ (Accessed: 14 July 2016).</li>
							<li>Jongerius, P. and Berghuis, G.H. (2013) Get agile: Scrum for UX, design and development. Netherlands: BIS Publishers B.V.</li>
							<li>Laloux, F. (2014) Reinventing organizations: A guide to creating organizations inspired by the next stage of human consciousness. France: Laoux (Frederic).</li>
							<li>Milosevic, D.Z., Patanakul, P. and Srivannaboon, S. (2010) Case studies in project, program, and organizational project management. United Kingdom: John Wiley & Sons.</li>
							<li>Project Management Institute (2001) A guide to the project management body of knowledge (PMBOK guide). United States: Project Management Institute Communications Office,U.S.</li>
							<li>Rosenberg, M.B. and G, A. (2003) Nonviolent communication: A language of life: Create your life, your relationships, and your world in harmony with your values. 2nd edn. Encinitas, CA: Puddle Dancer Press.</li>
							<li>Royce, W.M. (1970) ‘Managing the development of large software systems’, .</li>
							<li>Schön, D.A. (1983) The reflective practitioner: How professionals think in action. 13th edn. New York: Basic Books.</li>
							<li>Seymour, T. and Hussein, S. (2014) ‘The history of project management’, International Journal of Management & Information Systems (IJMIS), 18(4), p. 233. doi: 10.19030/ijmis.v18i4.8820.</li>
							<li>Shah, R. (2003) ‘Lean manufacturing: Context, practice bundles, and performance’, Journal of Operations Management, 21(2), pp. 129–149. doi: 10.1016/s0272-6963(02)00108-0.</li>
							<li>Shin, Y., Kim, M., Choi, J.N. and Lee, S.. (2015) ‘Does team culture matter? Roles of team culture and collective regulatory focus in team task and creative performance’, Group & Organization Management, 41(2), pp. 232–265. doi: 10.1177/1059601115584998.</li>
							<li>Thomas, D. (2014) PragDave. Available at: https://pragdave.me/blog/2014/03/04/time-to-kill-agile/ (Accessed: 14 July 2016).</li>
							<li>Wardale, D. (2013) ‘Towards a model of effective group facilitation’, Leadership & Organization Development Journal, 34(2), pp. 112–129. doi: 10.1108/01437731311321896.</li>
							<li>Wheelan, S.A. (2005) The handbook of group research and practice. Thousand Oaks: SAGE Publications.</li>
							<li>Wilson, J.M. (2003) ‘Gantt charts: A centenary appreciation’, European Journal of Operational Research, 149(2), pp. 430–437. doi: 10.1016/s0377-2217(02)00769-5.</li>
							<li>Yang, M.G.(m., Hong, P. and Modi, S.B. (2011) ‘Impact of lean manufacturing and environmental management on business performance: An empirical study of manufacturing firms’, International Journal of Production Economics, 129(2), pp. 251–261. doi: 10.1016/j.ijpe.2010.10.017.</li>
						</ul>
					</div>
				</div>

		);
	}
}
