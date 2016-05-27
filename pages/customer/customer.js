angular.module('stockApp').controller('CustomerCtrl', ['$scope', '$http', function($scope, $http){


    $scope.activeIndex = 'PersonalInfo' ;
    var imageDir = "asset/images/" ;
    $scope.menu = [
        {id:"PersonalInfo",      title:"اطلاعات شخصی", image:imageDir+"cash.png",   name:"پروفایل"},
        {id:"Orders",        title:"",   image:imageDir+"order.png",  name:"سفارش ها"},
        {id:"SymbolList",        title:"",   image:imageDir+"order.png",  name:"لیست نمادها"},
        {id:"MarketInfo",       title:"بازار",         image:imageDir+"status.png", name:"نبض بازار"},
        {id:"ShareBasket",       title:"",       image:imageDir+"config.png", name:"سبد سهام"},
        {id:"Credits",       title:"",       image:imageDir+"config.png", name:"امور مالی"}
    ];

    $scope.isActive = function(i){
        return (i === $scope.activeIndex) ;
    };

    $scope.goToPage = function(i){
        $scope.activeIndex = i ;
    };

    $scope.userInfo = {id:51, name:'غلام'};

    $scope.welcome = $scope.userInfo.name + " عزیز خوش آمدید " ;

    $scope.symbolList = ['Rena', 'Saipa'];

    $scope.setSymbol = function(s){
        $scope.selectedSymbol = s;
        //reloadSymbolInfo(s);
    };
}]);