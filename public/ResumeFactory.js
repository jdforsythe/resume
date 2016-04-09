(function() {
  function ResumeFactory($http) {
    return {
      getTechnicalSkills: function() {
        return $http.get('data/technical-skills.json');
      },
      getInterests: function() {
        return $http.get('data/interests.json');
      },
      getEmployers: function() {
        return $http.get('data/employers.json');
      },
      getLinks: function() {
        return $http.get('data/links.json');
      }
    }
  }
  ResumeFactory.$inject = ['$http'];
  app.factory('ResumeFactory', ResumeFactory);
})();
