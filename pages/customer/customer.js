angular.module('stockApp').controller('CustomerCtrl', ['$scope', '$http', function($scope, $http){

    var imageDir = "asset/images/" ;
    $scope.menu = [
        {id:"DepositMenu",      title:"ویرایش موجودی", image:imageDir+"cash.png",   name:"ویرایش موجودی"},
        {id:"OrderMenu",        title:"خرید و فروش",   image:imageDir+"order.png",  name:"ثبت سفارش"},
        {id:"StatusMenu",       title:"بازار",         image:imageDir+"status.png", name:"نبض بازار"},
        {id:"ConfigMenu",       title:"تنظیمات",       image:imageDir+"config.png", name:"تنظیمات"}
    ];

    $scope.isActive = function(i){
        return (i === $scope.activeIndex) ;
    };

    $scope.goToPage = function(i){
        //alert($scope.activeIndex + '\t' + i);
        $scope.activeIndex = i ;
    };
}]);