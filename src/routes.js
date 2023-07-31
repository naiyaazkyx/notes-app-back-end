const routes = [
  {
    method: 'POST',
    path: '/notes',
    // eslint-disable-next-line no-use-before-define
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    // eslint-disable-next-line no-use-before-define
    handler: getAllNotesHandler,
  },
];

module.exports = routes;
// eslint-disable-next-line no-unused-vars
const { addNoteHandler, getAllNotesHandler } = require('./handler');
