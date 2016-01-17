var EmailDirective = function(common) {
    return {
        templateUrl: common.VIEW_PATH + "/forms/email.html",
        scope: {
            model: "="
        },
        require: '^form',
        link: function(scope, element, attrs, formCtrl) {
            scope.formName = formCtrl;
        }
    };
};

angular.module('ncs').directive('email', ['COMMON', EmailDirective]);
