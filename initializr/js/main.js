
angular.module('miniCartApp',[])
	.controller('MiniCartController', function($scope){
		var itemList = this;
		
		itemList.items = [
			{
				name: "EOS Rebel T6i EF-S 18-55mm f/3.5-5.6 IS STM Kit",
				number: "0591C003",
				image: "camera.png",
				price: 849.99,
				count: 0
			}, {
				name: "Custom Gadget Bag 100EG",
				number: "12345AB",
				image:"bag.png",
				price: 123.50,
				count: 0
			}
		];
		
		itemList.totalCount = 0;
		
		itemList.totalPrice = function($scope){
			itemList.total = 0;
			angular.forEach(itemList.items, function(item, key){
				itemList.total += item.count * item.price;
			});
			
			return itemList.total;
		};
		
		itemList.itemTotalCount = function($scope){
			itemList.totalCount = 0;
			
			angular.forEach(itemList.items, function(item, key){
				itemList.totalCount += item.count;
			});
			
			itemList.totalPrice();
			
			return itemList.totalCount;
		};		
	});
	
$('#myCart').click(function(){
	$(this).toggleClass("closed");
	$("#mini-cart").toggleClass("hidden");
});
