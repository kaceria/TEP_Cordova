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

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    db.transaction(Del_DB, errorCB, successCB);
    db.transaction(populateDB, errorCB, successCB);

});



document.addEventListener("offline", onOffline, false);

function onOffline() {

    app.init();


}


document.addEventListener("online", onOnline, false);

function onOnline() {

    gaslogin.check();
    app.init();
}

function populateDB(tx) {

    tx.executeSql('CREATE TABLE IF NOT EXISTS PREF (id unique, Status , Userid , Name , Vorname)');
    tx.executeSql('SELECT * FROM PREF WHERE id = 1',[],function(tb,res){

        if(res.rows.length = 0){

            tb.executeSql('INSERT INTO PREF (id, data) VALUES (1, 0)');
        }

    },errorCB);
}


function Del_DB(tx){
    tx.executeSql('DROP TABLE IF EXISTS PREF');
}

function errorCB(err) {
    alert("Error processing SQL: "+err);
}

function successCB() {
    alert("success!");
}
