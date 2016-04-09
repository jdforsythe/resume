(function() {
  function ResumeController(ResumeFactory) {
    var vm = this;

    ResumeFactory.getTechnicalSkills().success(function(data) {
      vm.technicalSkills = data;
    });

    ResumeFactory.getInterests().success(function(data) {
      vm.interests = data;
    });

    ResumeFactory.getEmployers().success(function(data) {
      vm.employers = data;
    });

    ResumeFactory.getLinks().success(function(data) {
      vm.links = data;
    });

    vm.employerChronological = true;
  }
  ResumeController.$inject = ['ResumeFactory'];
  app.controller('ResumeController', ResumeController);
})();
