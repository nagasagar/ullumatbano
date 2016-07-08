
function combineUrlBits(url_a,url_b) {
	if (url_a.indexOf('?')==-1) {
		return url_a+'?'+url_b;
		}
	else {
		return url_a+'&'+url_b;
	}
}


function affyLinkify(dyn_prod_deets_var,raw_link) {

	var prod_link;

	if (raw_link=='') {
		prod_link = dyn_prod_deets_var.prod_link;
	} 
	else {
		prod_link = raw_link;
	}

	if (prod_link == null) {
		prod_link ='';
	}
	var raw_link = prod_link, redir_link, chop_link = false;


	if (((prod_link.length>0) && (prod_link[0]=='/')) || ((prod_link.slice(0,4).search('http')==-1) && (prod_link.slice(0,3).search('www')==-1))) {
		//this is not a full link
		chop_link=true;
		}

	if ( dyn_prod_deets_var.prod_site=='ib'){
			if (chop_link) {
				raw_link='http://www.infibeam.com'+prod_link;
			} 
		redir_link = combineUrlBits(raw_link,'trackId=saic');
	}
	else if ( dyn_prod_deets_var.prod_site=='ip'){
			if (chop_link) {
				raw_link='http://www.indiaplaza.com'+prod_link;
			} 

		redir_link = raw_link;

	} //ip
	else if ( dyn_prod_deets_var.prod_site=='it'){
			if (chop_link) {
				raw_link='http://shopping.indiatimes.com'+prod_link;
			} 


		redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=387804&PID=10091&CID=3931614&WID=44470&redirect='+encodeURIComponentFix(combineUrlBits(raw_link,'utm_source=omg&utm_medium=Affiliate&utm_campaign=productname_date'));

	} //indiatimes
	else if ( dyn_prod_deets_var.prod_site=='hs'){
			if (chop_link) {
				raw_link='http://www.homeshop18.com'+prod_link;
			} 
			redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=331902&PID=9394&CID=3785995&WID=44470&redirect='+encodeURIComponentFix(combineUrlBits(raw_link,'utm_source=affiliate&utm_medium=OMG&utm_campaign=text'));

	} //hs
	else if ( dyn_prod_deets_var.prod_site=='ms'){
			if (chop_link) {
				raw_link='http://www.mysmartprice.com'+prod_link;
			} 
		redir_link = raw_link;
	} //ms
	else if ( dyn_prod_deets_var.prod_site=='nt'){
			if (chop_link) {
				raw_link='http://www.naaptol.com'+prod_link;
			} 

		redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=329962&PID=9378&CID=3786070&WID=44470&redirect='+encodeURIComponentFix(combineUrlBits(raw_link,'ntpromoid=2095&utm_source=Omg&utm_medium=Banner&utm_campaign=Hot-Deal-Generic&utm_code=Affiliate'));

	} //nt
	else if ( dyn_prod_deets_var.prod_site=='sa'){
			if (chop_link) {
				raw_link='http://www.saholic.com'+prod_link;
			} 
		redir_link = raw_link;
	} //sa
	else if ( dyn_prod_deets_var.prod_site=='sd'){
			if (chop_link) {
				raw_link='http://www.snapdeal.com'+prod_link;
			} 
	//redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=159526&PID=8053&CID=3786003&WID=44470&redirect='+encodeURIComponentFix(combineUrlBits(raw_link,'utm_source=omegatxn&utm_campaign=afts'));

	redir_link = combineUrlBits(raw_link,'utm_source=aff_prog&utm_campaign=afts&offer_id=16&aff_id=2042');


	} //sd
	else if ( dyn_prod_deets_var.prod_site=='tr'){
			if (chop_link) {
				raw_link='http://www.tradus.com'+prod_link;
			} 
		redir_link = raw_link;
	}//tr
	else if ( dyn_prod_deets_var.prod_site=='fk'){
			if (chop_link) {
				raw_link='http://www.flipkart.com'+prod_link;
			} 
		redir_link = combineUrlBits(raw_link,'affid=nagasahas');
	} //fk
	else if ( dyn_prod_deets_var.prod_site=='az'){
			if (chop_link) {
				raw_link='http://www.amazon.in'+prod_link;
			} 
		redir_link = combineUrlBits(raw_link,'tag=makkhichoos0c-21');
	} //az
	else if ( dyn_prod_deets_var.prod_site=='eb'){
			if (chop_link) {
				raw_link='http://www.ebay.in'+prod_link;
			} 

		redir_link = raw_link;


	} //ebay
	else if ( dyn_prod_deets_var.prod_site=='ye'){
			if (chop_link) {
				raw_link='http://www.yebhi.com'+prod_link;
			} 

		redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=248729&PID=8782&CID=3931684&WID=44470&redirect='+encodeURIComponentFix(combineUrlBits(raw_link,'utm_source=OMG&utm_medium=affiliate&utm_campaign=AID&aff=K5MHQM6'));

	} //yebhi
	else if ( dyn_prod_deets_var.prod_site=='my'){
			if (chop_link) {
				raw_link='http://www.myntra.com'+prod_link;
			} 

		redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=349836&PID=9640&CID=3785702&WID=44470&redirect='+encodeURIComponentFix(combineUrlBits(raw_link,'semp=eoss&utm_source=aff-omg&utm_medium=aff-omg&utm_campaign=logo=aff=AID'));

	} //myntra
	else if ( dyn_prod_deets_var.prod_site=='ja'){
			if (chop_link) {
				raw_link='http://www.jabong.com'+prod_link;
			} 

		redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=304697&PID=9170&CID=3785701&WID=44470&redirect='+encodeURIComponentFix(combineUrlBits(raw_link,'aff=in.affiliate.1230441.AID.shoes.aff&utm_source=OMGPM.COM1&utm_medium=dc-clicktracker&utm_campaign=AID&utm_content=shoes'));


	} //jabong


	else if ( dyn_prod_deets_var.prod_site=='sc'){
			if (chop_link) {
				raw_link='http://www.shopclues.com'+prod_link;
			} 

		redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=420562&PID=10314&CID=3931686&WID=44470&redirect='+encodeURIComponentFix(combineUrlBits(raw_link,'utm_source=markgroup'));

	} //shopclues

	else if ( dyn_prod_deets_var.prod_site=='fc'){
			if (chop_link) {
				raw_link='http://www.firstcry.com'+prod_link;
			} 
		redir_link = raw_link;
	} //firstcry
	else if ( dyn_prod_deets_var.prod_site=='bo'){
			if (chop_link) {
				raw_link='http://www.babyoye.com'+prod_link;
			} 
		redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=192436&PID=8137&CID=3785692&WID=44470&redirect='+encodeURIComponentFix(combineUrlBits(raw_link,'aff_id=109&utm_source=Omgpm.com&utm_medium=babyoyeaffiliate&utm_campaign=regular'));

	} //babyoye


	else if ( dyn_prod_deets_var.prod_site=='ba'){
			if (chop_link) {
				raw_link='http://www.bookadda.com'+prod_link;
			} 
		redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=563587&PID=11799&CID=4114744&WID=44470&redirect='+encodeURIComponentFix(combineUrlBits(raw_link,'utm_source=aff-omg&affiliateID=BA-A337E190'));

	} //bookadda


	else if ( dyn_prod_deets_var.prod_site=='wk'){
			if (chop_link) {
				raw_link='http://www.watchkart.com'+prod_link;
			} 
		redir_link = 'http://track.in.omgpm.com/?AID=435070&MID=350174&PID=9644&CID=3786002&WID=44470&redirect='+encodeURIComponentFix(combineUrlBits(raw_link,'utm_source=omg'));

	} //watchkart




	return redir_link;

} //affyLinkify


function createStringLink(dyn_prod_deets_var) {

	var repl_strng;
	var redir_link = affyLinkify(dyn_prod_deets_var,'');

	if ( dyn_prod_deets_var.prod_site=='ib'){
				site_name = 'InfiBeam';
			}
		else if ( dyn_prod_deets_var.prod_site=='ip'){
				site_name = 'IndiaPlaza';
			} //ip
		else if ( dyn_prod_deets_var.prod_site=='it'){
				site_name = 'IndiaTimes';
			} //indiatimes
		else if ( dyn_prod_deets_var.prod_site=='hs'){
				site_name = 'HomeShop18';
			} //hs
		else if ( dyn_prod_deets_var.prod_site=='ms'){
				site_name = 'MySmartPrice';
			} //ms
		else if ( dyn_prod_deets_var.prod_site=='nt'){
				site_name = 'NaapTol';
			} //nt
		else if ( dyn_prod_deets_var.prod_site=='sa'){
				site_name = 'Saholic';
			} //sa
		else if ( dyn_prod_deets_var.prod_site=='sd'){
				site_name = 'SnapDeal';
			} //sd
		else if ( dyn_prod_deets_var.prod_site=='tr'){
				site_name = 'Tradus';
			}//tr
		else if ( dyn_prod_deets_var.prod_site=='fk'){
				site_name = 'Flipkart';
			} //fk
		else if ( dyn_prod_deets_var.prod_site=='az'){
				site_name = 'Amazon';
			} //az
		else if ( dyn_prod_deets_var.prod_site=='eb'){
				site_name = 'Ebay.in';
			} //ebay
		else if ( dyn_prod_deets_var.prod_site=='ye'){
				site_name = 'Yebhi';
			} //yebhi
		else if ( dyn_prod_deets_var.prod_site=='my'){
				site_name = 'Myntra';
			} //myntra
		else if ( dyn_prod_deets_var.prod_site=='ja'){
				site_name = 'Jabong';
			} //jabong
		else if ( dyn_prod_deets_var.prod_site=='sc'){
				site_name = 'Shopclues';
			} //shopclues
		else if ( dyn_prod_deets_var.prod_site=='fc'){
				site_name = 'FirstCry';
			} //firstcry
		else if ( dyn_prod_deets_var.prod_site=='bo'){
				site_name = 'BabyOye';
			} //babyoye
		else if ( dyn_prod_deets_var.prod_site=='ba'){
				site_name = 'BookAdda';
			} //bookadda
		else if ( dyn_prod_deets_var.prod_site=='wk'){
				site_name = 'WatchKart';
			} //watchkart

			if (dyn_prod_deets_var.prod_price=='-1') {

				repl_strng = site_name+': (Not Available) <a href="'+redir_link+'" target="_blank" style="display:inline !important">Search</a>';			
			}
			else {
				repl_strng = site_name+': Rs. <span class="'+pricespan+'" style="display:inline !important">'+dyn_prod_deets_var.prod_price+'</span> <a href="'+redir_link+'" target="_blank" style="display:inline !important">View</a>';
		
			}


	return repl_strng;

}





function createNotFoundStringLink(dyn_prod_deets_var, raw_search_url) {
	var repl_strng;
	var redir_link = affyLinkify(dyn_prod_deets_var,raw_search_url);

	if ( dyn_prod_deets_var.prod_site=='ib'){
				site_name = 'InfiBeam (Not Available)';
			}
		else if ( dyn_prod_deets_var.prod_site=='ip'){
				site_name = 'IndiaPlaza (Not Available)';
			} //ip
		else if ( dyn_prod_deets_var.prod_site=='it'){
				site_name = 'IndiaTimes (Not Available)';
			} //indiatimes
		else if ( dyn_prod_deets_var.prod_site=='hs'){
				site_name = 'HomeShop18 (Not Available)';
			} //hs
		else if ( dyn_prod_deets_var.prod_site=='ms'){
				site_name = 'MySmartPrice (Not Available)';
			} //ms
		else if ( dyn_prod_deets_var.prod_site=='nt'){
				site_name = 'NaapTol (Not Available)';
			} //nt
		else if ( dyn_prod_deets_var.prod_site=='sa'){
				site_name = 'Saholic (Not Available)';
			} //sa
		else if ( dyn_prod_deets_var.prod_site=='sd'){
				site_name = 'SnapDeal (Not Available)';
			} //sd
		else if ( dyn_prod_deets_var.prod_site=='tr'){
				site_name = 'Tradus (Not Available)';
			}//tr
		else if ( dyn_prod_deets_var.prod_site=='fk'){
				site_name = 'Flipkart (Not Available)';
			} //fk
		else if ( dyn_prod_deets_var.prod_site=='az'){
				site_name = 'Amazon (Not Available)';
			} //az
		else if ( dyn_prod_deets_var.prod_site=='eb'){
				site_name = 'Ebay.in (Not Available)';
			} //ebay
		else if ( dyn_prod_deets_var.prod_site=='ye'){
				site_name = 'Yebhi (Not Available)';
			} //yebhi
		else if ( dyn_prod_deets_var.prod_site=='my'){
				site_name = 'Myntra (Not Available)';
			} //myntra
		else if ( dyn_prod_deets_var.prod_site=='ja'){
				site_name = 'Jabong (Not Available)';
			} //jabong

		else if ( dyn_prod_deets_var.prod_site=='sc'){
				site_name = 'ShopClues (Not Available)';
			} //shopclues
		else if ( dyn_prod_deets_var.prod_site=='fc'){
				site_name = 'FirstCry (Not Available)';
			} //firstcry
		else if ( dyn_prod_deets_var.prod_site=='bo'){
				site_name = 'BabyOye (Not Available)';
			} //babyoye
		else if ( dyn_prod_deets_var.prod_site=='ba'){
				site_name = 'BookAdda (Not Available)';
			} //bookadda

		else if ( dyn_prod_deets_var.prod_site=='wk'){
				site_name = 'WatchKart (Not Available)';
			} //watchkart

				repl_strng = site_name+': <a href="'+redir_link+'" target="_blank" style="display:inline !important">Search</a>';			
	return repl_strng;

}


function createClosestFoundStringLink(dyn_prod_deets_var, raw_search_url, price_val) {
	var site_name, repl_strng;
	var redir_link = affyLinkify(dyn_prod_deets_var,raw_search_url);

	if ( dyn_prod_deets_var.prod_site=='ib'){
				site_name = 'InfiBeam (*)';
			}
		else if ( dyn_prod_deets_var.prod_site=='ip'){
				site_name = 'IndiaPlaza (*)';
			} //ip
		else if ( dyn_prod_deets_var.prod_site=='it'){
				site_name = 'IndiaTimes (*)';
			} //indiatimes
		else if ( dyn_prod_deets_var.prod_site=='hs'){
				site_name = 'HomeShop18 (*)';
			} //hs
		else if ( dyn_prod_deets_var.prod_site=='ms'){
				site_name = 'MySmartPrice (*)';
			} //ms
		else if ( dyn_prod_deets_var.prod_site=='nt'){
				site_name = 'NaapTol (*)';
			} //nt
		else if ( dyn_prod_deets_var.prod_site=='sa'){
				site_name = 'Saholic (*)';
			} //sa
		else if ( dyn_prod_deets_var.prod_site=='sd'){
				site_name = 'SnapDeal (*)';
			} //sd
		else if ( dyn_prod_deets_var.prod_site=='tr'){
				site_name = 'Tradus (*)';
			}//tr
		else if ( dyn_prod_deets_var.prod_site=='fk'){
				site_name = 'Flipkart (*)';
			} //fk
		else if ( dyn_prod_deets_var.prod_site=='az'){
				site_name = 'Amazon (*)';
			} //az
		else if ( dyn_prod_deets_var.prod_site=='eb'){
				site_name = 'Ebay.in (*)';
			} //ebay
		else if ( dyn_prod_deets_var.prod_site=='ye'){
				site_name = 'Yebhi (*)';
			} //yebhi
		else if ( dyn_prod_deets_var.prod_site=='my'){
				site_name = 'Myntra (*)';
			} //myntra
		else if ( dyn_prod_deets_var.prod_site=='ja'){
				site_name = 'Jabong (*)';
			} //jabong

		else if ( dyn_prod_deets_var.prod_site=='sc'){
				site_name = 'ShopClues (*)';
			} //shopclues

		else if ( dyn_prod_deets_var.prod_site=='fc'){
				site_name = 'FirstCry (*)';
			} //firstcry

		else if ( dyn_prod_deets_var.prod_site=='bo'){
				site_name = 'BabyOye (*)';
			} //babyoye
		else if ( dyn_prod_deets_var.prod_site=='ba'){
				site_name = 'BookAdda (*)';
			} //bookadda
		else if ( dyn_prod_deets_var.prod_site=='wk'){
				site_name = 'WatchKart (*)';
			} //watchkart

				repl_strng = site_name+': Rs. <span class="'+simpricespan+'" style="display:inline !important">'+price_val+' <a href="'+redir_link+'" target="_blank" style="display:inline !important">View</a> *';			
	return repl_strng;

}
