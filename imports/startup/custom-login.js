import { Projects } from '../api/projects.js';

function addProjectsToLogin() {
	let projectFieldDetails = {
		_id: "projectID",
    type: "select",
    displayName: "Project",
    select: []
	};

	Projects.find().map(function(proj) {
		console.log(proj.name);
		projectFieldDetails.select.push({
			text: proj.name,
			value: proj._id
		});
	});	

	console.log(projectFieldDetails);

	AccountsTemplates.addField(projectFieldDetails);
}

export {addProjectsToLogin};