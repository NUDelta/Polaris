import { Mongo } from 'meteor/mongo';
import { Projects } from '../../api/projects.js';
import { Quarters } from '../../api/quarters.js';

class Fixtures {
	static projectFixtures() {
		Projects.update(
			{
				name: "Haoqi Zhang"
			},
			{
				name: "Haoqi Zhang"
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "Pair Research"
			},
			{
				name: "Pair Research"
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "Polaris"
			},
			{
				name: "Polaris"
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "Collective Experience Stories"
			},
			{
				name: "Collective Experience Stories"
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "Frankenstein"
			},
			{
				name: "Frankenstein"
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "MF-RPPT"
			},
			{
				name: "MF-RPPT"
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "LES"
			},
			{
				name: "LES"
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "Microreminders"
			},
			{
				name: "Microreminders"
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "Brain Points"
			},
			{
				name: "Brian Points"
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "Creative Code Competition"
			},
			{
				name: "Creative Code Competition"
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "Perseus"
			},
			{
				name: "Perseus"
			},
			{upsert: true}
		);

		Projects.update(
			{
				name: "Scaffolded Exercises"
			},
			{
				name: "Scaffolded Exercises"
			},
			{upsert: true}
		);

	}
}

export default Fixtures;
