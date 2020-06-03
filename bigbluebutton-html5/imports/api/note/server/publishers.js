import { Meteor } from 'meteor/meteor';
import Logger from '/imports/startup/server/logger';
import Note from '/imports/api/note';
import { extractCredentials } from '/imports/api/common/server/helpers';

function note() {
  console.log("kkkkkkkkk2")
  if (!this.userId) {
    return Note.find({ meetingId: '' });
  }
  const { meetingId, requesterUserId } = extractCredentials(this.userId);

  Logger.info(`Publishing note for ${meetingId} ${requesterUserId}`);
  console.log("kkkkkkkkk2",Note.find({ meetingId }))
  return Note.find({ meetingId });
}

function publish(...args) {
  const boundNote = note.bind(this);
  return boundNote(...args);
}

Meteor.publish('note', publish);
