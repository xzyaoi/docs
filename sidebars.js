/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const lectureNotesSidebar = require('./docs/lecture_notes/sidebar');
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  lectureNotesSidebar: lectureNotesSidebar,
};

module.exports = sidebars;
