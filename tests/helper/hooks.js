const { client } = require('nightwatch-cucumber');
const { After, Before } = require('cucumber');

// const record = require('./video_record')

/*
** Run before tag @clear
*/
Before({ tags: '@clear' }, function () {
  return client.execute(`
        localStorage.clear();
        sessionStorage.clear();
      `).deleteCookies().refresh();
});

/*
** Run after tag @quit
*/
After({ tags: '@quit' }, function () {
  return client.end();
});

// Before({tags: "@video"}, function (browser, done) {
//   record.start(client, done)
//   console.log('=========== start ===========')
//   console.log(browser)
// });

// After({tags: "@video"}, function (browser, done) {
//   record.stop(client, done)
//   console.log('=========== stop ===========')
//   console.log(browser)
// });
