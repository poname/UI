'use strict';
angular.module('stockApp').controller('AdminCtrl', ['$scope', '$http', function($scope, $http){

    var imageDir = "asset/images/" ;
    $scope.menu = [
        {id:"DepositMenu",      title:"ویرایش موجودی", image:imageDir+"cash.png",   name:"ویرایش موجودی"},
        {id:"StatusMenu",       title:"بازار",         image:imageDir+"status.png", name:"نبض بازار"},
        {id:"ConfigMenu",       title:"تنظیمات",       image:imageDir+"config.png", name:"تنظیمات"},
        {id:"OrderMenu",        title:"خرید و فروش",   image:imageDir+"order.png",  name:"تایید نماد"},
        {id:"ReportMenu",       title:"درخواست ها",    image:imageDir+"report.png", name:"مدیریت درخواست ها"},
        {id:"ReportMenu",       title:"درخواست ها",    image:imageDir+"report.png", name:"دیگر کاربران"},
        {id:"BackupMenu",       title:"پشتیبان",       image:imageDir+"backup.png", name:"backup"}
    ];

    $scope.isActive = function(i){
        return (i === $scope.activeIndex) ;
    };

    $scope.goToPage = function(i){
        //alert($scope.activeIndex + '\t' + i);
        $scope.activeIndex = i ;
    };

}]);