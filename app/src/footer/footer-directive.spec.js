require('./footer-directive.js');

describe('Footer Directive', function() {
    var $compile,
        $rootScope,
        $scope,
        $http,
        element;

    beforeEach(angular.mock.module('ncs'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();

        $http = _$httpBackend_;
        $http.whenGET('src/app/footer/footer.html').respond(200, '');

        element = $compile(angular.element("<div my-footer></div>"))($scope);

        $scope.$digest();
        $http.flush();
    }));

    it('is true', function() {


        expect(true).toBe(true);
    });
});