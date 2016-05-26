angular.module('stockApp').controller('CustomerCtrl', ['$scope', '$http', function($scope, $http){

    var imageDir = "asset/images/" ;
    $scope.menu = [
        {id:"DepositMenu",      title:"افزایش موجودی", image:imageDir+"cash.png",   name:"افزایش موجودی"},
        {id:"OrderMenu",        title:"خرید و فروش",   image:imageDir+"order.png",  name:"ثبت سفارش"},
        {id:"AddCustomerMenu",  title:"ثبت نام",       image:imageDir+"user.png",   name:"کاربر جدید"},
        {id:"ReportMenu",       title:"درخواست ها",    image:imageDir+"report.png", name:"مدیریت درخواست ها"},
        {id:"BackupMenu",       title:"پشتیبان",       image:imageDir+"backup.png", name:"نسخه پشتیبان"},
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