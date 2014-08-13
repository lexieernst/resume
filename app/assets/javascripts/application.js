// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//=require jquery
//=require jquery_ujs
//= require turbolinks
//= require_tree .


$( document ).ready(function() {	
  $('h1').mouseenter(function() {
  	$(this).css("font-weight", "normal")
    	.animate({'letter-spacing': '7px'}, 1000);
  });
  $('h1').mouseleave(function() {
  	$(this).css("font-weight", "bold")
  		.animate({'letter-spacing': '0px'}, 1000);
  });
});
