(function() {
  function ResumeController(ResumeFactory) {
    var vm = this;

    vm.technicalSkills = ResumeFactory.getTechnicalSkills();

    vm.interests = ResumeFactory.getInterests();

    vm.employerChronological = true;

    vm.employers = ResumeFactory.getEmployers();

    vm.links = ResumeFactory.getLinks();
    
  }
  ResumeController.$inject = ['ResumeFactory'];
  app.controller('ResumeController', ResumeController);
})();
