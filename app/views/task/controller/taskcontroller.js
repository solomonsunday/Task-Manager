(function (){

  "use strict"
  angular.module ("taskApp").controller("taskCtrl", ["$scope", "$state", function($scope, $state){

    var vm = this;
    vm.formData = [];

    var formData = {
      assignedTo: "",
      PriorityLevel : "",
      ErrorDetail:""
    };
    vm.formData = formData;


  }])
})();