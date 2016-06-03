'use strict';

angular.module('project1App')
.constant("baseURL", "http://localhost:3001/")
.factory('phoneFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "phones/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

}])
;
