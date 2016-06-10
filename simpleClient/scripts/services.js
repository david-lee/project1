'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$http', 'baseURL', function($http, baseURL) {

		var dishes=[
                         {
                           name:'Uthapizza',
                           image: 'images/uthapizza.png',
                           category: 'mains',
                           label:'Hot', 
                           price:'4.99',
                           description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'images/zucchipakoda.png',
                           category: 'appetizer',
                           label:'',
                           price:'1.99',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
			}];

		this.getDishes = function(){
					//return dishes;
					return $http.get(baseURL + "phones");
                                    };

        }])
;

