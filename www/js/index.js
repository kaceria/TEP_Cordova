var authUrl = 'https://script.google.com/a/macros/ikr-solutions.de/s/AKfycbyrInW2Y_Vy883UmVpTZ3RjaIz1hcgSNt2Gm-Ijs43S/dev';
var Code_Succ = 'Test';

var app = {
 
  init: function() {
        $('#login a').on('click', function() {
            app.onLoginButtonClick();
        });

       
            app.showLoginView();
        
    },showLoginView: function() {
        $('#login').show();
        $('#greet').hide();
		$('#load').hide();
		
    }, showGreetView: function() {
        $('#login').hide();
        $('#greet').show();
		$('#load').hide();
	}, onLoginButtonClick: function() {
	
		 gaslogin.init();
	}
};

$(document).on('deviceready', function() {

	gaslogin.check();
   app.init();
  
});

