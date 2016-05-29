// create the module and name it stockApp
var stockApp = angular.module('stockApp', ['ngRoute']);

angular.module('stockApp').controller('AdminCtrl2', ['$scope', '$http', function($scope, $http){

    $scope.activeIndex = 'PersonalInfo' ;
    var imageDir = "asset/images/" ;
    $scope.menu = [

        //common
        {id:"PersonalInfo",      role:true , image:imageDir+"cash.png",   name:"اطلاعات شخصی"},
        {id:"MarketInfo",       role:true ,         image:imageDir+"status.png", name:"نبض بازار"},

        // customer permissions
        {id:"Orders",        role:"customer",   image:imageDir+"order.png",  name:"سفارش ها"},
        {id:"SymbolList",        role:"customer",   image:imageDir+"order.png",  name:"لیست نمادها"},
        {id:"ShareBasket",       role:"customer",       image:imageDir+"config.png", name:"سبد سهام"},
        {id:"Credits",       role:"customer",       image:imageDir+"config.png", name:"امور مالی"},

        // admin permissions
        {id:"Reports",       role:"admin",       image:imageDir+"config.png", name:"گزارش ها"},
        {id:"ChangeLimit",       role:"admin",       image:imageDir+"config.png", name:"اعمال محدودیت"},
        {id:"CustomersList",       role:"admin",       image:imageDir+"config.png", name:"کاربران"},
        {id:"AddRole",       role:"admin",       image:imageDir+"config.png", name:"تعیین سطح دسترسی"},

        // financial permissions
        {id:"ManageCreditRequests",       role:"financial",    image:imageDir+"report.png", name:"مدیریت درخواست"},
        {id:"ManageLimitedOrders",       role:"financial",       image:imageDir+"backup.png", name:"مدیریت سفارش ها"},

        // company permissions
        {id:"CompanySymbolList",       role:"company",              image:imageDir+"config.png", name:"نمادهای شرکت"},
        {id:"AddSymbol",        role:"company",   image:imageDir+"order.png",  name:"نماد جدید"},
        {id:"ChargeSymbol",       role:"company",              image:imageDir+"config.png", name:"شارژ نماد"}

    ];

    $scope.isActive = function(i){
        return (i === $scope.activeIndex) ;
    };

    $scope.goToPage = function(i){
        //alert($scope.activeIndex + '\t' + i);
        $scope.activeIndex = i ;
    };

    $scope.hasRole = function(i){
        return (i==='company') || (i===true);
    };

    $scope.showLogin = false;

    $scope.userInfo = {id:51, name:'غلام'};

    $scope.welcome = $scope.userInfo.name + " عزیز خوش آمدید " ;


    $('.form').find('input, textarea').on('keyup blur focus', function (e) {

        var $this = $(this),
            label = $this.prev('label');

        if (e.type === 'keyup') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if( $this.val() === '' ) {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (e.type === 'focus') {

            if( $this.val() === '' ) {
                label.removeClass('highlight');
            }
            else if( $this.val() !== '' ) {
                label.addClass('highlight');
            }
        }

    });

    $('.tab a').on('click', function (e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

    });


}]);
