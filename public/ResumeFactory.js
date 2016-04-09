(function() {

  var technicalSkills = [
    {
      category: 'Platforms',
      members: [
        'Windows', 'Mac OS X', 'Debian/Ubuntu', 'CentOS/RHEL',
        'Android', 'iOS', 'Tizen', 'WebOS'
      ]
    },

    {
      category: 'Languages',
      members: [
        'HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'C#/VB .NET'
      ]
    },

    {
      category: 'Frameworks',
      members: [
        'AngularJS', 'Laravel 4/5', 'Lumen', 'CodeIgniter', 'Ionic'
      ]
    },

    {
      category: 'Software',
      members: [
        'Photoshop', 'InDesign', 'Illustrator', 'Excel'
      ]
    },

  ];

  var interests = [
    { name: 'Tech', image: 'img/sdcard.png' },
    { name: 'Music', image: 'img/guitar.png' },
    { name: 'Science', image: 'img/atom.png' },
    { name: 'Outdoors', image: 'img/tent.png' }
  ];

  var employers = [
    {
      endYear: 2016,
      dates: '2013-Present',
      name: 'Church Budget Envelope Company',
      position: 'Lead Developer / Tech Support',
      summary: 'Worked on several projects from design to completion including multitenant web applications and a complete ' +
               'redesign of internal operations software. Implemented bug fixes and refactored many existing applications, ' +
               'extracting repeated processes into reusable libraries. Led tech support team for web applications.'
    },
    {
      endYear: 2013,
      dates: '2010-2013',
      name: 'Cocca\'s Pizza',
      position: 'General Manager',
      summary: 'Grew new location to second in revenue of five locations within the first year. Guided young employees with ' +
               'little experience into a highly effective team who tackled problems head-on. Installed and supported a new ' +
               'point-of-sale system company-wide and trained supervisors to use the system to track and improve driver efficiency.'
    },
    {
      endYear: 2010.5,
      dates: '2007-2010',
      name: 'Dunkin Donuts',
      position: 'Assistant Manager',
      summary: 'Developed detail-oriented and knowledgable team who consistently led the district in inspection and test scores.'
    },
    {
      endYear: 2010.0,
      dates: '2000-2010',
      name: 'Forsythe Focal Group',
      position: 'Developer / Network Installer',
      summary: 'Developer for web application projects. Pulled and punched down network cable. Installed network hardware.'
    }
  ];

  var links = [
    { title: 'GitHub Profile', url: 'https://github.com/jdforsythe' },
    { title: 'GitHub Resume', url: 'http://resume.github.io/?jdforsythe' },
    { title: 'StackOverflow', url: 'http://stackoverflow.com/users/2990349/jdforsythe' },
    { title: 'Samsung Apps (on-device only)', url: 'samsungapps://SellerDetail/mha2hepcnj' }
  ];

  function ResumeFactory() {
    return {
      getTechnicalSkills: function() {
        return technicalSkills;
      },
      getInterests: function() {
        return interests;
      },
      getEmployers: function() {
        return employers;
      },
      getLinks: function() {
        return links;
      }
    }
  }
  app.factory('ResumeFactory', ResumeFactory);
})();
