import React, {Component, PropTypes} from 'react';
import tools from '../../../data/new-data.js';
import Step from './step.js';
import {Link} from 'react-router';

export default class ToolDetail extends Component {

	getLevel(i){
		switch(parseInt(i)){
			case 1: return 'Low';
			case 2: return 'Medium';
			case 3: return 'High';
		}
	}

	getAttachment(data){

		if(data.attachment === undefined || data.attachment === ''){
			return undefined;
		}

		return (
			<div>
				<h4>Attachments</h4>
				<p><a href={data.attachment} target="_blank">download attachment</a></p>
			</div>
		);
	}

	getReferences(data){

		if(!data.hyperlinks || data.hyperlinks == '' || data.hyperlinks.length === 0 || !data instanceof Array){
			return undefined;
		}

		return (
			<div>
				<h4>References</h4>
				{data.hyperlinks.map((link, i) => {
					return <p key={i}><a href={link.url} target="_blank">{link.label}</a></p>
				})}
			</div>
		);
	}

	getMaterials(data){

		if(!data.materials || data.materials == '' || data.materials.length === 0){
			return <p>no materials needed</p>
		}

		return (
			<ul className="material-list">
				{data.materials.map((material, i) => {
					return <li key={i}>{material}</li>
				})}
			</ul>
		)

	}

	getTeam(data){

		if(!data.teamMembers || data.teamMembers.length === 0){
			return undefined;
		}

		return (
			<div className="row">
				<div className="small-12 columns">
					<h4>Team</h4>
					{data.teamMembers.map((name, i) => {
						const url = "https://www.twitter.com/" + name;
						return <p key={i}><a href={url} target="_blank">{name}</a></p>
					})}
				</div>
			</div>
		);
	}

	resumeViz(){
		window.__force.resume();
	}

	render() {

		const tool = this.props.params.tool;

		let data = tools.filter((row) => {
			return row.slug === tool;
		});

		data = data[0] || {};

		return (
			<div className="tool-detail right-pane">

				<Link to="/" className="link-home" onClick={this.resumeViz} />

				<div className="content">
					<h1>{data.name}</h1>
					{data.description}
				</div>

			</div>
		);
	}
}
