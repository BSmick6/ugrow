import {
  Meteor
} from 'meteor/meteor';
import Links from '/imports/api/links';

function insertLink(title, url) {
  Links.insert({
    title,
    url,
    createdAt: new Date()
  });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Links.find().count() === 0) {
    insertLink('The Pride Center', 'https://studentaffairs.lehigh.edu/content/pride-center-0');
    insertLink('The Center for Gender Equity', 'https://studentaffairs.lehigh.edu/content/center-gender-equity');
    insertLink('Office of Multicultural Affairs', 'https://studentaffairs.lehigh.edu/content/multicultural-affairs-oma');
    insertLink('Counseling and Psychological Services', 'https://studentaffairs.lehigh.edu/content/counseling-psychological-services-ucps');
    insertLink('Chaplain’s Office', 'https://chaplain.lehigh.edu/');
    insertLink('Lehigh University Police Department', 'https://police.lehigh.edu/');
    insertLink('Title IX', 'https://titleix.lehigh.edu/reporting-options');
    insertLink('Office of Gender Violence', 'https://studentaffairs.lehigh.edu/content/gender-violence-education-support');
    insertLink('The Health Center', 'https://studentaffairs.lehigh.edu/content/health-wellness-center');
    insertLink('"Advocates', 'https://studentaffairs.lehigh.edu/content/advocates-0');
  }
});