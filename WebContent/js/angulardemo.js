/**
 * 
 */
var app = angular.module('demoApp', ["ngRoute"]);

app.config(function($routeProvider,$locationProvider){
	$routeProvider
	
	.when('/detailStudent',{	
		controller: 'detailCtrl',
		templateUrl:'./detailStudent.html'
	})
	.when('/listStudent',{	
		controller: 'demoCtrl',
		templateUrl:'/listStudent.html'
	})
	.otherwise('/',{
		template:'./index.html'
	});
	
}
	
);

app.controller("detailCtrl",function( $scope, $location){
	$location.path('/detailStudent');
	$scope.message="hello word";
})


app.controller("demoCtrl",function( $scope, $location) {
	$location.path('/listStudent');
	
	$scope.delete = function (id) {
		 
		for (i in $scope.inforStudent) {
		 
		if ($scope.inforStudent[i].id == id) {
		 
		$scope.inforStudent.splice(i, 1);
		 	 
		}	 
		}	 
		}
	
	$scope.inforStudent = [ {
		id:1,
		name : 'Hieu',
		age:18,
		country : 'Nghe An'
	}, {
		id:2,
		name : 'Thao',
		age:20,
		country : 'Ha Noi'
	}, {
		id:3,
		name : 'Kai',
		age:19,
		country : 'Ha Tinh'
	},{
		id:4,
		name : 'Linh Chi',
		age:18,
		country : 'Nghe An'
	},{
		id:5,
		name : 'Xuan Hai',
		age:18,
		country : 'Ha Tinh'
	},{
		id:6,
		name : 'Thanh Quang',
		age:18,
		country : 'TPHCM'
	},{
		id:7,
		name : 'Anh Minh',
		age:18,
		country : 'Nghe An'
	},{
		id:8,
		name : 'Cong Anh',
		age:18,
		country : 'Vinh'
	},{
		id:9,
		name : 'Xuan Quan',
		age:18,
		country : 'Vung Tau'
	},{
		id:10,
		name : 'Tran Thien',
		age:18,
		country : 'Ha Noi'
	},{
		id:11,
		name : 'Bao An',
		age:18,
		country : 'Bac Ninh'
	} ];

	
});