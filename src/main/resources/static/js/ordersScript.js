var isPresented=0;
$(document).delegate('.table td','click',function(){
	if($('#content').is(":visible") || isPresented==1){
		$('.products-table').hide();
		$('[colspan="5"]').hide();
		isPresented=0;
	}
	else{
		$('.products-table').show();
		$('[colspan="5"]').parent('tr').remove();
		$(this).parents('tr').after('<tr/>').next().append('<td colspan="5"/>').
			children('td').append('<div/>').
			children().css('background','#32383e').html($('#content').html());
		isPresented=1;
	}


});
/*
$(".table tbody").delegate('tr','click',function(){
	alert("function");
	$('[colspan="5"]').parent('tr').remove();
	$(this).parents('tr').after('<tr/>').next().append('<td colspan="5"/>').children('td').append('<div/>').children().css('background','#32383e').html($('#content').html());
});*/
var app = angular.module('orderApp', []);
app.controller('resultController', function($scope){
     $scope.orders=[{
       rollNo:1,
       name:"Some Name",
       date:"28-04-2018"
     },
     {
       rollNo:2,
       name:"Some Name",
       date:"28-04-2018"
     },
     {
       rollNo:3,
       name:"Some Name",
       date:"28-04-2018"
     },
     {
       rollNo:4,
       name:"Some Name",
       date:"28-04-2018"
     },
   ];
});