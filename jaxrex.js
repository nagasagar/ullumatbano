

var checkUUID = function() {
	console.log('mc: attempting connection with mothership for uustuff');
	chrome.runtime.sendMessage({method: "getUUID"}, sendRequestClosure); //chromeextension
	return;
}


function fetchDynProdData(server_prod_deets_var) {
	return function(fetch_site) { 

		if (prod_deets.prod_site == fetch_site) {
			return;
			}
	

		var fetch_req = createFetchURL(server_prod_deets_var, fetch_site);
		var dyn_req = $.ajax({
	    	type: "GET",
	    	url: fetch_req
		});
		dyn_req.fail(genFail(server_prod_deets_var, fetch_site, fetch_req));


		if ( fetch_site=='ib'){
			dyn_req.done(ibSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='ip'){
			dyn_req.done(ipSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='it'){
			dyn_req.done(itSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='hs'){
			dyn_req.done(hsSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='ms'){
			dyn_req.done(msSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='nt'){
			dyn_req.done(ntSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='sa'){
			dyn_req.done(saSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='sd'){
			dyn_req.done(sdSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='tr'){
			dyn_req.done(trSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='fk'){
			dyn_req.done(fkSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='az'){
			dyn_req.done(azSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='eb'){
			dyn_req.done(ebSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='ye'){
			dyn_req.done(yeSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='my'){
			dyn_req.done(mySuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='ja'){
			dyn_req.done(jaSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='sc'){
			dyn_req.done(scSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='fc'){
			dyn_req.done(fcSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='bo'){
			dyn_req.done(boSuccess(server_prod_deets_var, fetch_req));
			}
		else if ( fetch_site=='ba'){
			dyn_req.done(baSuccess(server_prod_deets_var, fetch_req));
			}
		
	}//closure
}//fetchDyn


function sendDynData(dyn_prod_deets_var) {

	if (dyn_prod_deets_var.call_type=='Dynamic') {
		return true;
		}
	
	if (isNaN(parseFloat(dyn_prod_deets_var['prod_price']))) {
		dyn_prod_deets_var['prod_price']=-1;
	} //if
	else {
		dyn_prod_deets_var['prod_price']=parseFloat(dyn_prod_deets_var['prod_price']);
	}
		


	var req_send = $.ajax({
		type: "POST",
		url: "http://makkhichecky.appspot.com/postprod",
		data: JSON.stringify(dyn_prod_deets_var),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		});
} //sendDynData


var sendData = function() {
		var req_send = $.ajax({
		    type: "POST",
		    url: "http://makkhichecky.appspot.com/postsearch",
		    data: JSON.stringify(prod_deets),
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
			timeout: 1500
			});
		//munch on data here
		console.log('mc: ok enough talk, parcel the deets');
		req_send.done(checkProdServerData());
		req_send.fail(fetchDynData());
		return req_send;
};



var sendRequestClosure =  function(response) {

		try {
			uuid_val = response.status;
		}
		catch (err) {
			console.log('Wha wha not even a status?')
			uuid_val = false;
		}

		console.log('mc: mothership sent msg');
		if (uuid_val) {
			try{
				console.log('mc: mothership says in clipped tones '+uuid_val.substr(0,5));
			}
			catch (err){
				console.log('mc: mothership talk scrambled, me confused, scared!');
				console.log('mc: '+err.message);
			}
			prod_deets.id_val = uuid_val;
			req_send = sendData();
			}
		else {
			console.log('mc: mothership says go and find your identity, son');
			var ip_req_send = $.ajax({
		    type: "GET",
			url: "http://makkhichecky.appspot.com/getip"
			});

			ip_req_send.done(function(response){

				console.log('mc: mothership mute, contact fatherboat and receive msg!');
				var ipval = response.replace(/\./gi,'').substr(0,40);
				var date_val=(new Date()).getTime();
				console.log(date_val);
				var rand_str=Math.floor(Math.random() * 10000);
				var rand_uuid=ipval+'b'+date_val+'b'+rand_str;
				prod_deets.id_val = rand_uuid;
				req_send = sendData();
				chrome.runtime.sendMessage({method: "setUUID", key:rand_uuid}, function(response) {});
			});
			ip_req_send.fail(function(response){
				console.log('mc: mothership mute, contact fatherboat also fail, so tragic!');
				var ipval = 'iperr';
				var date_val=(new Date()).getTime();
				var rand_str=Math.floor(Math.random() * 100000);
				var rand_uuid=ipval+'b'+date_val+'b'+rand_str;
				prod_deets.id_val = rand_uuid;
				req_send = sendData();
				chrome.runtime.sendMessage({method: "setUUID", key:rand_uuid}, function(response) {});
			});
			
		}
	}//closurebrace






