import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Snapshots = new Mongo.Collection('snapshots');

Meteor.methods({
	'snapshots.insertEmpty'() {
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Snapshots.update(
      {
        "sprint" : 1, 
        "week" : 0, 
        "project" : Meteor.user().profile.project,
      },
      {
        "sprint" : 1, 
        "week" : 0, 
        "project" : Meteor.user().profile.project,
        "responses" : { 
          "thisWeek" : { 
            "text" : "" 
          }, 
          "learnings" : { 
            "problem" : { 
              "text" : "" 
            }, 
            "intervention" : { 
              "text" : "" 
            }, 
            "results" : { 
              "text" : "" 
            }, 
          }, 
          "reflection" : { 
            "issue" : { 
              "text" : "" 
            }, 
            "impact" : { 
              "text" : "" 
            }, 
            "cause" : { 
              "text" : "" 
            } 
          }, 
          "nextSteps" : {
            "text" : "" 
          } 
        }
      }, 
      {upsert: true}
    );
	}
});