'use strict';
angular.module('stockApp').controller('AdminCtrl', ['$scope', '$http', function($scope, $http){

    $scope.activeIndex = 'PersonalInfo' ;
    var imageDir = "asset/images/" ;
    $scope.menu = [
        {id:"PersonalInfo",      title:"اطلاعات شخصی", image:imageDir+"cash.png",   name:"پروفایل"},
        {id:"Orders",        title:"",   image:imageDir+"order.png",  name:"سفارش ها"},
        {id:"SymbolList",        title:"",   image:imageDir+"order.png",  name:"لیست نمادها"},
        {id:"MarketInfo",       title:"بازار",         image:imageDir+"status.png", name:"نبض بازار"},
        {id:"ShareBasket",       title:"",       image:imageDir+"config.png", name:"سبد سهام"},
        {id:"Credits",       title:"",       image:imageDir+"config.png", name:"امور مالی"},


        {id:"Reports",       title:"",       image:imageDir+"config.png", name:"گزارش ها"}
    ];

    $scope.isActive = function(i){
        return (i === $scope.activeIndex) ;
    };

    $scope.goToPage = function(i){
        //alert($scope.activeIndex + '\t' + i);
        $scope.activeIndex = i ;
    };

    $scope.userInfo = {id:51, name:'آقامدیر'};

    $scope.welcome = $scope.userInfo.name + " عزیز به بخش میریت برنامه بورس خوش آمدید " ;

    $scope.symbolList = ['Rena', 'Saipa'];



    /// Reports Part :: Filter.html
    $scope.dater = function(x){
        return (new Date(x)).toDateString();
    }

    $scope.filteredExchanges = [] ;

    $scope.checkedPR = false;
    $scope.checkedID = false;
    $scope.checkedUN = false;
    $scope.checkedSB = false;
    $scope.checkedDate = false;
    $scope.checkedDate2 = false;

    $scope.search = function(){

        parameters = {
            id : $scope.IdNum,
            lowerPrice : $scope.minPrice,
            upperPrice : $scope.maxPrice,
            name : $scope.UnameSerach,
            symbol: $scope.symbolSearch,
            fromDate : '%',
            toDate : '%'
        };

        if(!$scope.checkedPR){
            parameters.lowerPrice  = '%' ;
            parameters.upperPrice = '%' ;
        }
        if(!$scope.checkedID){
            parameters.id = '%' ;
        }
        if(!$scope.checkedUN){
            parameters.name = '%' ;
        }
        if(!$scope.checkedSB){
            parameters.symbol = '%' ;
        }
        if(!$scope.checkedDate){
            parameters.fromDate = '%' ;
        }
        else{
            parameters.fromDate = (new Date($scope.YY1, $scope.MM1-1, $scope.DD1, 0, 0, 0, 0)).getTime();
        }
        if(!$scope.checkedDate2){
            parameters.toDate = '%' ;
        }
        else{
            parameters.toDate = (new Date($scope.YY2, $scope.MM2-1, $scope.DD2, 0, 0, 0, 0)).getTime();
        }

        $http({
            method : "POST",
            url : "filter",
            params : parameters
        }).then(function(response) {
            $scope.filteredExchanges = response.data;
            //alert(response.data);
        });
    };
}]);