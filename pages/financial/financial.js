angular.module('stockApp').controller('FinancialCtrl', ['$scope', '$http', function($scope, $http){

    var imageDir = "asset/images/" ;
    $scope.menu = [
        {id:"DepositMenu",      title:"ویرایش موجودی", image:imageDir+"cash.png",   name:"ویرایش موجودی"},
        {id:"StatusMenu",       title:"بازار",         image:imageDir+"status.png", name:"نبض بازار"},
        {id:"ConfigMenu",       title:"تنظیمات",       image:imageDir+"config.png", name:"تنظیمات"},
        {id:"ReportMenu",       title:"درخواست ها",    image:imageDir+"report.png", name:"مدیریت درخواست ها"},
        {id:"BackupMenu",       title:"پشتیبان",       image:imageDir+"backup.png", name:"تایید سفارش ها"}
    ];

    $scope.isActive = function(i){
        return (i === $scope.activeIndex) ;
    };

    $scope.goToPage = function(i){
        //alert($scope.activeIndex + '\t' + i);
        $scope.activeIndex = i ;
    };

}]);