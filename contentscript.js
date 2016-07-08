/*
 * Copyright (c) 2012 Kernel Insights. All rights reserved.  
 */



var fetchDynData = function() {
	return function(response,textStatus,sent_req) {
	prod_deets.call_type='Dynamic';
	var curr_fetch_sites= getFetchSites();
	var curr_nofetch_sites=top_sites.diff(curr_fetch_sites);
	curr_fetch_sites.slice(0,12).filter(fetchDynProdData(''));
	curr_nofetch_sites.filter(addNoFetchSiteLink);
	}//clousre
} //fetchDynData

var checkProdServerData = function() {
	return function(response) {


		console.log('mc:fatherboat has msg for me?');
		var fetched_sites=[],mod_sites=[],upd_time, now_time, delay_hours, insertPriceBool=true;
		now_time=Date.parse(response['t'].split('.')[0]);
		//examine data that is coming in and figure out, which data to call
		
		//tack on bundle id
		prod_deets.bundle_key = response['bundlekey'];
		//senddata to server
		prod_deets.call_type='Server';

		
		var curr_fetch_sites= getFetchSites();
		var curr_nofetch_sites=top_sites.diff(curr_fetch_sites);

		if (response['found']) {

			console.log('mc:fatherboat has nice msg for me');
			var prods_rec_arr = response['prodvals'];
			for (var i=0; i<prods_rec_arr.length; i++) {
				insertPriceBool=true;
			
				upd_time=Date.parse(prods_rec_arr[i]['prod_updated'].split('.')[0]);
				
				delay_hours = Math.round((now_time-upd_time)/(1000*60));
					//currtime will be 330 (5:30) ahead because of GMT
				//alert(delay_hours+' ' + prods_rec_arr[i]['prod_site']);

				if ((prod_deets.prod_site == prods_rec_arr[i]['prod_site']) || ($.inArray(prods_rec_arr[i]['prod_site'],curr_fetch_sites)==-1)) {
					insertPriceBool=false;
					fetched_sites.push(prods_rec_arr[i]['prod_site']);
				} //samesite or fetch from unlisted site

				else if (prods_rec_arr[i]['prod_mod']) {
					//product available and must fetch now
					mod_sites.push(prods_rec_arr[i]['prod_site']);
					fetched_sites.push(prods_rec_arr[i]['prod_site']);
					fetchDynProdData(prods_rec_arr[i])(prods_rec_arr[i]['prod_site']);
					insertPriceBool=false;
				}//prod_mod
				//TODO 690 for avail and 1410(18hrs) if not; HIGHFREQ 10 MINS (330+10 = 340)
				//TODO 360 for avail and 1080 (18hrs); HIGHFREQ 10 CHANGED NOW TIME

				else if ((delay_hours>=10) && ($.inArray(prods_rec_arr[i]['prod_site'],highfreq_sites)>-1) && ((prods_rec_arr[i]['prod_avail']) || (parseFloat(prods_rec_arr[i].prod_price)!=-1))) {
					mod_sites.push(prods_rec_arr[i]['prod_site']);
					fetched_sites.push(prods_rec_arr[i]['prod_site']);
					fetchDynProdData(prods_rec_arr[i])(prods_rec_arr[i]['prod_site']);
					insertPriceBool=false;

				}

				else if ((delay_hours>=360) && ((prods_rec_arr[i]['prod_avail']) || (parseFloat(prods_rec_arr[i].prod_price)!=-1))) {
					mod_sites.push(prods_rec_arr[i]['prod_site']);
					fetched_sites.push(prods_rec_arr[i]['prod_site']);
					fetchDynProdData(prods_rec_arr[i])(prods_rec_arr[i]['prod_site']);
					insertPriceBool=false;

				}//elseif
				else if (delay_hours>=1080) {
					mod_sites.push(prods_rec_arr[i]['prod_site']);
					fetched_sites.push(prods_rec_arr[i]['prod_site']);
					fetchDynProdData(prods_rec_arr[i])(prods_rec_arr[i]['prod_site']);
					insertPriceBool=false;

				}//elseif


				if (insertPriceBool) {


					if (!prods_rec_arr[i]['prod_avail'] && (parseFloat(prods_rec_arr[i].prod_price)!=-1)) {

						insertSimilarPrice(createClosestFoundStringLink(prods_rec_arr[i], createFetchURL('', prods_rec_arr[i].prod_site), prods_rec_arr[i].prod_price),prods_rec_arr[i].prod_price);
					}
					else {
						//pump info into insertPrice
						insertPrice(createStringLink(prods_rec_arr[i]),prods_rec_arr[i].prod_price);
						//show tag
					}
					//show lp tag
					comparePrices(prods_rec_arr[i]);
					fetched_sites.push(prods_rec_arr[i]['prod_site']);

				} // if insertPriceBool
				}//for
	
			//check which sites need to be fetched
			//CHANGE LATER 
			//fetched_sites=mod_sites;

			var tofetch_sites=curr_fetch_sites.diff(fetched_sites);

			tofetch_sites.slice(0,12).filter(fetchDynProdData(''));
			curr_nofetch_sites.diff(fetched_sites).filter(addNoFetchSiteLink);

		} //if responsefound
		else {
			console.log('mc:fatherboat say son do your own work');
			curr_fetch_sites.slice(0,12).filter(fetchDynProdData(''));
			curr_nofetch_sites.filter(addNoFetchSiteLink);
		}

		} //endclosure
}






if (window.location.hostname == 'www.flipkart.com') {


var flipref=window.location.href;

if (flipref.match('\\?pid=') || ($(cssLocs.fk.title).length>0)) {

console.log('mc: hippity hop, trying the tag!');
insertTag();

prod_deets.prod_site='fk';


$('#'+whisperbox).css('visibility','visible');


prod_deets.prod_categ = $.trim($(cssLocs.fk.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.fk.category_alt).text());

//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.fk.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.fk.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=$.trim($(cssLocs.fk.price).text());

if (chk_price=='') {
	prod_deets.prod_price = cleanPrice($(cssLocs.fk.price_alt).text());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}




prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}


console.log('mc: '+ prod_deets.prod_srch+' '+prod_deets.prod_price);

//console.log(prod_deets);

checkUUID();

} //   pidmatch

} // flipmatch

if (window.location.hostname == 'www.amazon.in') {

var flipref=window.location.href;

if ((flipref.match('/dp/') || flipref.match('/gp/product/')) && (!flipref.match('/gp/product/handle-buy'))){

insertTag();


prod_deets.prod_site='az';

$('#'+whisperbox).css('visibility','visible');

prod_deets.prod_categ = $.trim($(cssLocs.az.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.az.category_alt).text());

//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.az.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
//var chk_price=$.trim($(cssLocs.az.price).text());
prod_deets.prod_price=textFind($(cssLocs.az.price).contents());


prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}

console.log('mc: '+ prod_deets.prod_srch+' '+prod_deets.prod_price);

//console.log(prod_deets);

checkUUID();

} //   pidmatch

} // azmatch




// Homeshop


if (window.location.hostname == 'www.homeshop18.com') {


var flipref=window.location.href;

if (flipref.match('product\\:')) {

insertTag();


prod_deets.prod_site='hs';

$('#'+whisperbox).css('visibility','visible');

prod_deets.prod_categ = $.trim($(cssLocs.hs.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.hs.category_alt).text());


//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.hs.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.hs.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.hs.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}


prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();

} //   pidmatch

} // hsmatch



//tradus

if ((window.location.hostname == 'www.tradus.com') || (window.location.hostname == 'touch.tradus.com')) {


var flipref=window.location.href;

if ($('#product-title').length>0  || $('div.product-info').length>0 ||  $('#left-content-product-details-part1').length>0) {


insertTag();


prod_deets.prod_site='tr';

$('#'+whisperbox).css('visibility','visible');

prod_deets.prod_categ = $.trim($(cssLocs.tr.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.tr.category_alt).text());



//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.tr.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.tr.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.tr.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();

} //   pidmatch

} // trmatch



//indiaplaza

if (window.location.hostname == 'www.indiaplaza.com') {

var flipref=window.location.href;

if ((flipref.match('\\.htm') && $('div.fdpSkuArea').length>0) || (flipref.match('\\.htm') &&$('div.Containerarea').length>0)) {


insertTag();

prod_deets.prod_site='ip';

$('#'+whisperbox).css('visibility','visible');

prod_deets.prod_categ = $.trim($(cssLocs.ip.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.ip.category_alt).text());

//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.ip.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.ip.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.ip.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();

} //   pidmatch

} // ipmatch


// ebay


if (window.location.hostname == 'www.ebay.in') {


var flipref=window.location.href;

if ($('#vi-tTbl').length>0 ) {


insertTag();


prod_deets.prod_site='eb';

$('#'+whisperbox).css('visibility','visible');

prod_deets.prod_categ = $.trim($(cssLocs.eb.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.eb.category_alt).text());


//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.eb.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.eb.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.eb.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}


prod_deets.prod_srch = prod_deets.prod_title;


if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}


checkUUID();

} //   pidmatch

} // ebmatch




// infibeam


if (window.location.hostname.match('.infibeam.com')) {


var flipref=window.location.href;

if (flipref.match('\\.html') && (($('#ib_details').length>0) || ($('#product-overview').length>0)) )  {

insertTag();


prod_deets.prod_site='ib';

$('#'+whisperbox).css('visibility','visible');


prod_deets.prod_categ = $.trim($(cssLocs.ib.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.ib.category_alt).text());


//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.ib.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.ib.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.ib.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}


prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}


checkUUID();

} //   pidmatch

} // ibmatch



//naaptol

if (window.location.hostname == 'www.naaptol.com') {


var flipref=window.location.href;

if ($('#product_page').length>0) {


insertTag();

prod_deets.prod_site='nt';

$('#'+whisperbox).css('visibility','visible');


prod_deets.prod_categ = $.trim($(cssLocs.nt.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.nt.category_alt).text());


//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.nt.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.nt.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.nt.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.nt.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();

} //   pidmatch

} // naaptol


//indiatimes

if (window.location.hostname == 'shopping.indiatimes.com') {


var flipref=window.location.href;

if ($('div.productdetailwrapper').length>0) {


insertTag();


prod_deets.prod_site='it';

$('#'+whisperbox).css('visibility','visible');

prod_deets.prod_categ = $.trim($(cssLocs.it.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.it.category_alt).text());


//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.it.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.it.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.it.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}


prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();

} //   pidmatch

} // indiatimes

// SnapDeal


if (window.location.hostname == 'www.snapdeal.com') {


var flipref=window.location.href;

if (flipref.match('\\/product\\/')) {

insertTag();


prod_deets.prod_site='sd';

$('#'+whisperbox).css('visibility','visible');


prod_deets.prod_categ = $.trim($(cssLocs.sd.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.sd.category_alt).text());



//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.sd.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.sd.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=$.trim($(cssLocs.sd.price).text());

if (chk_price=='') {
	prod_deets.prod_price = cleanPrice($(cssLocs.sd.price_alt).text());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}


prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}


checkUUID();

} //   pidmatch

} // flipmatch



//saholic

if (window.location.hostname == 'www.saholic.com') {


var flipref=window.location.href;

if ($('#productDetail').length>0 && $('#resultFoundNo').length==0) {


insertTag();

prod_deets.prod_site='sa';

$('#'+whisperbox).css('visibility','visible');


prod_deets.prod_categ = $.trim($(cssLocs.sa.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.sa.category_alt).text());


//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.sa.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.sa.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.sa.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();

} //   pidmatch

} // saholic



//yebhi

if (window.location.hostname == 'www.yebhi.com') {


var flipref=window.location.href;

if ($('div.pdnamedescrpt').length>0) {


insertTag();


prod_deets.prod_site='ye';

$('#'+whisperbox).css('visibility','visible');

prod_deets.prod_categ = $.trim($(cssLocs.ye.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.ye.category_alt).text());



//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.ye.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = matchParentheticals(prod_deets.prod_title);

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.ye.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.ye.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();

} //   pidmatch

} // yebhi



//myntra

if (window.location.hostname == 'www.myntra.com') {


var flipref=window.location.href;

if ($('h4.pdt-code').length>0 || $('#product-description').length>0) {


insertTag();


prod_deets.prod_site='my';

$('#'+whisperbox).css('visibility','visible');

prod_deets.prod_categ = $.trim($(cssLocs.my.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.my.category_alt).text());



//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle($(cssLocs.my.title).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.my.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.my.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.my.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}


checkUUID();

} //   pidmatch

} // myntra


//jabong
if (window.location.hostname == 'www.jabong.com') {


var flipref=window.location.href;

if ($('div.product-detail-sec').length>0 || $('#productDetailNew').length>0) {


insertTag();

prod_deets.prod_site='ja';


$('#'+whisperbox).css('visibility','visible');

prod_deets.prod_categ = $.trim($(cssLocs.ja.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.ja.category_alt).text());


//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle(textFindAll($(cssLocs.ja.title).contents())) + ' ' + $.trim($(cssLocs.ja.bracktitle).text());

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.ja.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.ja.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.ja.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}


checkUUID();

} //   pidmatch

} // jabong



//shopclues
if (window.location.hostname == 'www.shopclues.com') {


var flipref=window.location.href;

if ($('div.product-info h1.mainbox-title').length>0) {


insertTag();


prod_deets.prod_site='sc';

$('#'+whisperbox).css('visibility','visible');


prod_deets.prod_categ = $.trim($(cssLocs.sc.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.sc.category_alt).text());



//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle(textFindAll($(cssLocs.sc.title).contents()));

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.sc.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.sc.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.sc.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();

} //   pidmatch

} // shopclues




//firstcry
if (window.location.hostname == 'www.firstcry.com') {

var flipref=window.location.href;

if ($(cssLocs.fc.title).length>0) {


insertTag();


prod_deets.prod_site='fc';

$('#'+whisperbox).css('visibility','visible');


prod_deets.prod_categ = $.trim($(cssLocs.fc.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.fc.category_alt).text());



//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle(textFindAll($(cssLocs.fc.title).contents()));

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.fc.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.fc.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.fc.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();

} //   pidmatch

} // firstcry



//babyoye
if (window.location.hostname == 'www.babyoye.com') {

var flipref=window.location.href;

if ($(cssLocs.bo.title).length>0) {


insertTag();


prod_deets.prod_site='bo';

$('#'+whisperbox).css('visibility','visible');


prod_deets.prod_categ = $.trim($(cssLocs.bo.category).text());
prod_deets.prod_categ_alt = $.trim($(cssLocs.bo.category_alt).text());



//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle(textFindAll($(cssLocs.bo.title).contents()));

//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.bo.bracktitle).text());

//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.bo.price).contents());

if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.bo.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();

} //   pidmatch

} // babyoye





//bookadda
if (window.location.hostname == 'www.bookadda.com') {

var flipref=window.location.href;

if ($(cssLocs.ba.title).length>0) {


insertTag();


prod_deets.prod_site='ba';

$('#'+whisperbox).css('visibility','visible');


prod_deets.prod_categ = 'books';
prod_deets.prod_categ_alt = $.trim($(cssLocs.ba.category).text())+' '+$.trim($(cssLocs.ba.category_alt).text());



//cssLocs in helperfuncs.js has the details stored
prod_deets.prod_title = cleanTitle(textFindAll($(cssLocs.ba.title).contents()));



//store text in brackets separately; this makes search heard 
prod_deets.prod_bracktitle = $.trim($(cssLocs.ba.bracktitle).text());



//if price not in this location, look in alternate
var chk_price=textFind($(cssLocs.ba.price).contents());



if (chk_price=='') {
	prod_deets.prod_price = textFind($(cssLocs.ba.price_alt).contents());
}
else {
	prod_deets.prod_price = cleanPrice(chk_price);
}



prod_deets.prod_srch = prod_deets.prod_title;

if (isBook()) {
		//check if this is paperback or hardcover
		if (prod_deets.prod_bracktitle.toLowerCase().match('paperback') ||  prod_deets.prod_bracktitle.toLowerCase().match('hardcover')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + prod_deets.prod_bracktitle;
		}
}
else if (prod_deets.prod_bracktitle.match('\\d+\\s*GB')) 	{
			prod_deets.prod_srch = prod_deets.prod_title + ' ' + extractGB(prod_deets.prod_bracktitle);
		}



checkUUID();

} //   pidmatch

} // bookadda




