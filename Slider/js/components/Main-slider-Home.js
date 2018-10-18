 
 $(function() {
 	'use strict';
	//Adjust slider Height  //  التحكم من خلال ال js 
	 var winH=$(window).height(),
	 upperH = $('.upper-bar').innerHeight(),
	 navH   = $('.navbar').innerHeight();
	 $('.slider,.carousel-item ').height(winH - (upperH + navH)); 

 });

