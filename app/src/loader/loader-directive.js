var LoaderDirective = function(common) {
    return {
        templateUrl: common.VIEW_PATH + "/loader/loader.html",
        scope: {
            watch: '=',
            page: '@'
        },
        link: function(scope) {
            scope.display = true;

            scope.isEmpty = function() {
                if(!angular.equals(scope.watch, {}) && scope.display) {
                    angular.element(document.querySelector('#'+scope.page+'-loader-wrapper')).addClass('loaded');
                    setTimeout(function() {
                        scope.display = false;
                    },1000);
                }

                return scope.display;
            };
        }
    };
};

angular.module('ncs').directive('loader', ['COMMON', LoaderDirective]);
