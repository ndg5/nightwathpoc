const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports/firefox/',
  reportPath: 'reports/firefox/',
  displayDuration: true,
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: 'firefox',
      version: '68',
    },
    device: 'Docker Hub',
    platform: {
      name: 'ubuntu',
      version: '16.04',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Phoenix Web BO' },
      { label: 'Written by', value: 'Bizzy SDET Team' },
      { label: 'Repo', value: 'https://bitbucket.org/bizzyindonesia/nightwatch-mocha-poc-automation.git' },
    ],
  },
});
