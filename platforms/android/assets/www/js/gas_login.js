var authUrl = 'https://script.google.com/a/macros/ikr-solutions.de/s/AKfycbyrInW2Y_Vy883UmVpTZ3RjaIz1hcgSNt2Gm-Ijs43S/dev';
var Code_Succ = 'Test';



function GoTo(){


	app.showGreetView();

}




var gaslogin = {

	init:function(){
	
		var authWindow = window.open(authUrl, '_blank', 'location=no,toolbar=no');
		
			authWindow.addEventListener('loadstop', function(){
			
				$.get( authUrl)
				.done(function( data ) {
					
				
					if(data==Code_Succ){


					/*******-> After Login  Go To <**********/
					
							GoTo();
							authWindow.close();	



							
					}
				});
			});
	},check:function(){
	
		$.get( authUrl)
		.done(function( data ) {
			if(data==Code_Succ){
		
			GoTo();
			
			
			
			}else{
			
				app.showLoginView();
			
			}
		});
	
	}
};



