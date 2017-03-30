import { Mongo } from 'meteor/mongo';
import { Projects } from '../../api/projects.js';
import { Quarters } from '../../api/quarters.js';

class Fixtures {
	static projectFixtures() {
		Projects.update(
			{
				name: "Polaris"
			},
			{
				name: "Polaris",
				members: []
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "LES"
			},
			{
				name: "LES",
				members: []
			},
			{upsert: true}
		);

	}
}

export default Fixtures;
