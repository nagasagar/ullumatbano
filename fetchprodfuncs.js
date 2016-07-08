
var fkSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {



	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'fk',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	
	resp_elem = $('<div/>').append($.parseHTML(response));


	if ((resp_elem.find('div.no_results').length > 0) || (resp_elem.find('div.noResults').length > 0)) {

		prodlink_href = fetch_url;
		repl_strng='Flipkart (Not Available): <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		insertPrice(repl_strng,-1);
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		sendDynData(dyn_prod_deets);
		return true;
		
	} //if


	if (resp_elem.find('#search_results').length>0) {

	price_hold_all = resp_elem.find('#search_results div[class*="fk-srch-item"]:eq(0) b[class*="final_price"]').contents();
	price_str = textFind(price_hold_all);

	prodlink_href = resp_elem.find('#search_results div[class*="fk-srch-item"]:eq(0) a[class*="fk-srch-title-txt"]').attr('href');

	prodlink_txt = resp_elem.find('#search_results div[class*="fk-srch-item"]:eq(0) div[class*="fk-sitem-image-section"] img').attr('title');

	} //if
	
	else if (resp_elem.find('#products div.product-unit').length>0) {

		price_hold_all = resp_elem.find('#products div.product-unit:eq(0) div.pu-final span[class*="fk-bold"]').contents();
		price_str = textFind(price_hold_all);

		prodlink_href = resp_elem.find('#products div.product-unit:eq(0) div.pu-title a.fk-display-block').attr('href');

		prodlink_txt = resp_elem.find('#products div.product-unit:eq(0) div.pu-title a.fk-display-block').attr('title');


	} //elseif


	else if (resp_elem.find('#products div.browse-product').length>0) {


		price_hold_all = resp_elem.find('#products div.browse-product:eq(0) div.pu-final').contents();

		price_str = textFind(price_hold_all);

		prodlink_href = resp_elem.find('#products div.browse-product:eq(0) div.lu-title-wrapper > a.lu-title').attr('href');

		prodlink_txt = textFindAll(resp_elem.find('#products div.browse-product:eq(0) div.lu-title-wrapper > a.lu-title').contents());



	} //elseif

	else if (resp_elem.find('#all_search_page').length>0)  {
		

			price_hold_all = resp_elem.find('#all_search_page div[class*="product"]:eq(0) span[class*="final_price"]').contents();
			price_str = textFind(price_hold_all);
	
			prodlink_href = resp_elem.find('#all_search_page div[class*="product"]:eq(0) a[class*="fk-anchor-link"]').attr('href');

			prodlink_txt = resp_elem.find('#all_search_page div[class*="product"]:eq(0) div[class*="fk-product-thumb"] img').attr('title');

	} //elseif

	repl_strng='Flipkart: Rs. '+price_str+' <a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';



	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;

	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);
	
} //closure

} // fkSuccess



var ipSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {


	var resp_elem, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;

	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ip',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};



	resp_elem = $('<div/>').append($.parseHTML(response));


	if ( (resp_elem.find('#divSearchError').length>0) || ($.trim(resp_elem.find('#ContentPlaceHolder1_lblErrormsg').html())!='') || ($.trim(resp_elem.find('#ContentPlaceHolder1_Errorlbl').html())!='')){
	


		repl_strng='IndiaPlaza: Not available <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		insertPrice(repl_strng,-1);
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		sendDynData(dyn_prod_deets);
		return true;

	}
	else {
		price_str = resp_elem.find('div[id*="ContentPlaceHolder1_repBrowseLst"] div.ourPrice span').html();

		prodlink_href=resp_elem.find('div[id*="ContentPlaceHolder1_repBrowseLst"] div.skuName a[id*="ContentPlaceHolder1_repBrowseLst"]').attr('href')

		prodlink_txt=resp_elem.find('div[id*="ContentPlaceHolder1_repBrowseLst"] div.skuName a[id*="ContentPlaceHolder1_repBrowseLst"] span[id*="ContentPlaceHolder1_repBrowseLst"]').html()

	
		price_str=cleanPrice(price_str);

		repl_strng='IndiaPlaza: Rs. <span class="'+pricespan+'" style="display:inline !important">'+$.trim(price_str).replace('Our Price:','')+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';
		


	} // else


	
	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;


	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);


} //closure
}




var ibSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {
	

	var resp_elem, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;

	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ib',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};
	
	resp_elem = $('<div/>').append($.parseHTML(response));

	var check_listtype = resp_elem.find('ul.search_result, ul.srch_result').attr('class');


	if (check_listtype.search('search_result')>-1) {

		
		price_hold_all=resp_elem.find('ul.search_result > li:eq(0) div.price b').contents();
		price_str = textFind(price_hold_all)

		if ((price_str=='') || (price_str==undefined)) {
			price_hold_all=resp_elem.find('ul.search_result > li:eq(0) div.price span.price:eq(0)').contents();
			price_str = textFind(price_hold_all)
		}


		if (resp_elem.find('ul.search_result >  li:eq(0) h2').length>0) {
		prodlink_href = resp_elem.find('ul.search_result > li:eq(0) h2.simple a').attr('href');
		prodlink_txt = resp_elem.find('ul.search_result > li:eq(0) h2.simple a').html();
		}
		else {

		prodlink_href = resp_elem.find('ul.search_result > li:eq(0) > a').attr('href');
		prodlink_txt = resp_elem.find('ul.search_result > li:eq(0) > a').attr('title');

		}


	}
	else {


		price_hold_all=resp_elem.find('ul.srch_result > li:eq(0) div.price span.normal:eq(0)').contents();
		price_str = textFind(price_hold_all)
		if ((price_str=='') || (price_str==undefined)) {
			price_hold_all=resp_elem.find('ul.srch_result > li:eq(0) div.price span.price:eq(0)').contents();
			price_str = textFind(price_hold_all)
		}
	
		if (resp_elem.find('ul.srch_result > li:eq(0) h2').length>0) {
		prodlink_href = resp_elem.find('ul.srch_result > li:eq(0) http://www.infibeam.comh2.simple a').attr('href');
		prodlink_txt = resp_elem.find('ul.srch_result > li:eq(0) h2.simple a').html();
		}
		else {

		prodlink_href = resp_elem.find('ul.srch_result > li:eq(0) > a').attr('href');
		prodlink_txt = resp_elem.find('ul.srch_result > li:eq(0) > a').attr('title');

		}


	} // end of else	

	price_str=price_str.replace(/rs\.*|\*|\,/gi,'');
	repl_strng='InfiBeam: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+'</span> <a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'&trackId=saic" target="_blank" style="display:inline !important">View</a>';



	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;


	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

} //closure
}





// indiatimes

var itSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {
	

	var resp_elem, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng, out_of_stock;
	var foundProdListing = false;

	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'it',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};

	
	resp_elem = $('<div/>').append($.parseHTML(response));


	if (resp_elem.find('div.productlisting').length>0) {

		prodlink_txt = resp_elem.find('div.productlisting div.productcoloumn div.productdetail a:eq(0)').html();
		prodlink_href = resp_elem.find('div.productlisting div.productcoloumn div.productdetail a:eq(0)').attr('href');
		price_str = textFind(resp_elem.find('div.productlisting div.productcoloumn div.productdetail div.newprice span.price:eq(0)').contents());
		out_of_stock = resp_elem.find('div.productlisting div.productcoloumn div.outofstock-small').length;

		foundProdListing = true;



	}

	if (foundProdListing){

		repl_strng='Indiatimes: Rs.'+price_str+' <a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


	}

	else {

		repl_strng='Indiatimes (Not Available): ' + '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		insertPrice(repl_strng,-1);
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		sendDynData(dyn_prod_deets);
		return true;

	}



	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;


	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

} //closure
} //it




var msSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {



	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;


	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ms',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};

	resp_elem = $('<div/>').append($.parseHTML(response));

	if (resp_elem.find('div.search_cat_box').length>0) {

		
		price_hold_all=resp_elem.find('div.search_cat_box div.item:eq(0) div.price b').contents();
		price_str = textFind(price_hold_all);

		prodlink_href=resp_elem.find('div.search_cat_box div.item:eq(0) div.item_title a[id="link"]').attr('href');
		prodlink_txt=resp_elem.find('div.search_cat_box div.item:eq(0) div.item_title a[id="link"]').html();

	}

	else if (resp_elem.find('div.msp_left div.item').length>0){


		price_hold_all=resp_elem.find('div.msp_left div.item:eq(0) div.price b').contents();
		price_str = textFind(price_hold_all);
		prodlink_href=resp_elem.find('div.msp_left div.item:eq(0) div.item_title a[id="link"]').attr('href');
		prodlink_txt=resp_elem.find('div.msp_left div.item:eq(0) div.item_title a[id="link"]').html();

	}


	repl_strng='MySmartPrice: Rs.'+price_str.replace('Rs.','')+' <a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;


	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);


} //closure
}


var sdSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {	

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;

	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'sd',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};

	
	resp_elem = $('<div/>').append($.parseHTML(response));
	
	if (resp_elem.find('#products-main4 div.product_grid_cont').length>0) {


		prodlink_href=resp_elem.find('#products-main4 div.product_grid_cont:eq(0) div.productWrapper a:eq(0)').attr('href');
		prodlink_txt=$.trim(resp_elem.find('#products-main4 div.product_grid_cont:eq(0) div.productWrapper div.product-txtWrapper div.product-title a').html());

		price_hold_all=resp_elem.find('#products-main4 div.product_grid_cont:eq(0) div.productWrapper div.product-txtWrapper div.product-price').not('span').contents();
		price_str = textFind(price_hold_all);

		if (price_str=='') {
			price_hold_all=resp_elem.find('#products-main4 div.product_grid_cont:eq(0) div.productWrapper div.product-txtWrapper div.product-price div').not('span').contents();
			price_str = textFind(price_hold_all);


		}


	}
	else if (resp_elem.find('#products-main4 div.product_listing').length>0) {


		prodlink_href=resp_elem.find('#products-main4 div.product_listing:eq(0) a:eq(0)').attr('href');
		prodlink_txt=$.trim(resp_elem.find('#products-main4 div.product_listing:eq(0) a:eq(0) div.product_listing_heading').html());

		price_hold_all=resp_elem.find('#products-main4 div.product_listing:eq(0) a:eq(0) div.product_price').contents();
		price_str = textFind(price_hold_all);


	} // div.product_listing

	else if ($(response).find('#prodTypeId').length>0) {

		prodlink_href = fetch_url;

		
		prodlink_txt=$.trim(resp_elem.find('div.productDeal-right div.prodtitle-head h1').html());

		price_hold_all=resp_elem.find('div.pdp_rightbox div.buyContainer #selling-price-id').contents();
		price_str = textFind(price_hold_all);

	}

	else  {
		//no matches at all?


	
		repl_strng='<span style="color: rgb(2,159,204)">Snap</span><span style="color: rgb(189,8,1)">Deal</span>: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">View</a>';


		insertPrice(repl_strng,-1);
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		sendDynData(dyn_prod_deets);
		return true;

	}


	repl_strng='<span style="color: rgb(2,159,204)">Snap</span><span style="color: rgb(189,8,1)">Deal</span>: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+'</span> <a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;


	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

} //closure
}


var azSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {


	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'az',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;

	if (resp_elem.find('#atfResults #result_0 ul.rsltL > li:eq(0) span.grey').length>0) {
		avail_val  = (resp_elem.find('#atfResults #result_0 ul.rsltL > li:eq(0) span.grey').html().indexOf('unavailable') == -1);
		}


	if  ((!avail_val) || (resp_elem.find('#noResultsTitle').length>0)) {
		repl_strng = 'Amazon: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {

		if (resp_elem.find('#atfResults #result_0 ul.rsltL').length>0) {

			price_hold_all = resp_elem.find('#atfResults #result_0 ul.rsltL li.newp span.bld, #atfResults #result_0 ul.rsltL li.mkp2 span.price, #atfResults #result_0 ul.rsltL li.digp span.bld').contents()

		} //ifgridlist
		else if (resp_elem.find('#atfResults #result_0 ul.rsltGridList').length>0) {

			price_hold_all = resp_elem.find('#atfResults #result_0 ul.rsltGridList li.newp span.bld, #atfResults #result_0 ul.rsltGridList li.mkp2 span.price, #atfResults #result_0 ul.rsltGridList li.digp span.bld').contents();


		} //elseifgridlist
		price_str = textFind(price_hold_all);
		prodlink_href = resp_elem.find('#atfResults #result_0 h3.newaps > a').attr('href');
		prodlink_txt = $.trim(resp_elem.find('#atfResults #result_0 h3.newaps > a > span.lrg').attr('title'));
		if (prodlink_txt==''){
			prodlink_txt = $.trim(resp_elem.find('#atfResults #result_0 h3.newaps > a > span.lrg').html());
		}	
		price_str=$.trim(price_str.replace(/rs\.*|\*|\,/gi,''));
		repl_strng='Amazon: <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;

		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

	} //endelse

} //closure
} //amazon

var ebSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'eb',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if ((resp_elem.find('#Results div.msg div.cnt').length>0)  ||  (resp_elem.find('#ResultSetItems').html()=='')) {
		avail_val  = false;
		}


	if  ((!avail_val)) {
		repl_strng = 'Ebay.in: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {

	
		resp_elem.find('#ResultSetItems table[itemprop="offers"]  tr[itemprop="offers"]').each(function(index) {
			price_hold_all = $(this).find('td.prc div[itemprop="price"] span').contents();
			price_str = cleanPrice(textFind(price_hold_all));

			if (sameProd(price_str,prod_deets.prod_price)) {
				
				if ($(this).find('td.prc span.ship span.tfsp, td.prc span.ship span.gfsp').length==0) {
					ship_val = cleanShipPrice($(this).find('td.prc span.ship span.fee').html());

					price_str=parseFloat(price_str)+parseFloat(ship_val);
				}  

				prodlink_txt = $.trim($(this).find('td.dtl div.ittl a').html());
				prodlink_href = $(this).find('td.dtl div.ittl a').attr('href');
				return false;
				}

		}); //each

		repl_strng='Ebay.in: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';

		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;


		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

	} //endelse

} //closure
} //ebay



var yeSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ye',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if (resp_elem.find('#divserachzero').length>0  || resp_elem.find('div.price_Reviews').length==0) {
		avail_val  = false;
		}


	if  ((!avail_val)) {
		repl_strng = 'Yebhi: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {

		price_hold_all = resp_elem.find('div.price_Reviews:eq(0) p.priice span.inr').contents();	

		price_str = textFind(price_hold_all);
	
		prodlink_href = resp_elem.find('div.price_Reviews:eq(0) h2 > a').attr('href');
		prodlink_txt = $.trim(resp_elem.find('div.price_Reviews:eq(0) h2 > a').html());

		repl_strng='Yebhi: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';

		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;

		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

	} //endelse

} //closure
} //yebhi


//myntra
var mySuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'my',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};

	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if (resp_elem.find('div.no-results').length>0) {
		avail_val  = false;
		}



	if  ((!avail_val)) {
		repl_strng = 'Myntra: (Not Available) <a href="'+ affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {

		var myn_ass = {'price': 'div.results-cnt ul.results li[data-styleid]:eq(0) a div.price',
				'link': 'div.results-cnt ul.results li[data-styleid]:eq(0) a',
				'brand':'div.results-cnt ul.results li[data-styleid]:eq(0) a div.brand',
				'title':'div.results-cnt ul.results li[data-styleid]:eq(0) a div.brand, div.results-cnt ul.results li[data-styleid]:eq(0) a div.product'}
;
		price_hold_all = resp_elem.find(myn_ass.price).contents();	

		price_str = textFind(price_hold_all);
	
		prodlink_href = resp_elem.find(myn_ass.link).attr('href');
		prodlink_txt = textFindAll(resp_elem.find(myn_ass.title).contents());

		repl_strng='Myntra: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;

		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

	} //endelse

} //closure
} //myntra




//jabong
var jaSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ja',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if (resp_elem.find('#productsCatalog').length==0) {
		avail_val  = false;
		}


	if  ((!avail_val)) {
		repl_strng = 'Jabong: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {


		if (resp_elem.find('#productsCatalog > li:eq(0) a span.price > strong.fs16').length>0) {
			price_str = textFind(resp_elem.find('#productsCatalog > li:eq(0) a span.price > strong.fs16').contents());
		}
		else if (resp_elem.find('#productsCatalog > li:eq(0) span.itm-priceBox span.old').length>0) {
			price_str = textFind(resp_elem.find('#productsCatalog > li:eq(0) span.itm-priceBox span.old').contents());	
		}
		else {
			price_str = textFind(resp_elem.find('#productsCatalog > li:eq(0) span.itm-priceBox span.itm-price').contents());	
		}

	
		prodlink_href = resp_elem.find('#productsCatalog > li:eq(0) a[id*="cat_"]').attr('href');

		
		prodlink_txt = textFindAll(resp_elem.find('#productsCatalog > li:eq(0) span.qa-brandName, #productsCatalog > li:eq(0) span.qa-brandTitle').contents());


		repl_strng='Jabong: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;
		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

	} //endelse

} //closure
} //jabong


//shopclues
var scSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'sc',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if (resp_elem.find('div.mainbox-container p.no-items').length>0) {
		avail_val  = false;
		}


	if  ((!avail_val)) {
		repl_strng = 'ShopClues: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {


		if (resp_elem.find('div.mainbox-body div.box_GridProduct:eq(0) div.box_metacategory_pricing span.box_metacategory_priceoffer').length>0) {
			price_str = textFind(resp_elem.find('div.mainbox-body div.box_GridProduct:eq(0) div.box_metacategory_pricing span.box_metacategory_priceoffer').contents());
		}
		else if (resp_elem.find('#productsCatalog > li:eq(0) span.itm-priceBox span.old').length>0) {
			price_str = textFind(resp_elem.find('#productsCatalog > li:eq(0) span.itm-priceBox span.old').contents());	
		}
		else {
			price_str = textFind(resp_elem.find('#productsCatalog > li:eq(0) span.itm-priceBox span.itm-price').contents());	
		}

	
		prodlink_href = resp_elem.find('div.mainbox-body div.box_GridProduct:eq(0) a.box_metacategory_name').attr('href');

		
		prodlink_txt = $.trim(resp_elem.find('div.mainbox-body div.box_GridProduct:eq(0) a.box_metacategory_name').html());


		repl_strng='ShopClues: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;


		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

	} //endelse

} //closure
} //shopclues




//firstcry
var fcSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'fc',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	var fc_results_num = resp_elem.find('#ctl00_ContentPlaceHolder1_lBC span.resultshow').contents().get(0).nodeValue;
	if ((resp_elem.find('#Pagelistdiv').length=0) ||  (fc_results_num.indexOf(' 0 ')>-1) ) {
		avail_val  = false;
		}


	if  ((!avail_val)) {


		repl_strng = 'FirstCry: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {

		price_str = textFind(resp_elem.find('#Pagelistdiv ul.item_list > li:eq(0) div.item_list_inner_li4_dts > span[id*="Discountprice"], #Pagelistdiv ul.item_list > li:eq(0) div.item_list_inner_li4 > span[id*="Discountprice"]').contents());

		if (price_str=='') {

			price_str = textFind(resp_elem.find('#Pagelistdiv ul.item_list > li:eq(0) div.item_list_inner_li4_dts > span[id*="_MRP"], #Pagelistdiv ul.item_list > li:eq(0) div.item_list_inner_li4 > span[id*="_MRP"]').contents());

		}

	
		prodlink_href = resp_elem.find('#Pagelistdiv ul.item_list > li:eq(0) div.item_list_inner_li2_dts > a, #Pagelistdiv ul.item_list > li:eq(0) div.item_list_inner_li2 > a').attr('href');

		
		prodlink_txt = $.trim(resp_elem.find('#Pagelistdiv ul.item_list > li:eq(0) div.item_list_inner_li2_dts > a, #Pagelistdiv ul.item_list > li:eq(0) div.item_list_inner_li2 > a').attr('title'));


		repl_strng='FirstCry: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;


		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

	} //endelse

} //closure
} //firstcry



//babyoye
var boSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'bo',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if (resp_elem.find('#listing_right_section p.zero_results').length=0) {
		avail_val  = false;
		}


	if  ((!avail_val)) {
		repl_strng = 'BabyOye: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {


		price_str = textFind(resp_elem.find('div.search_products_main div.product_summary:eq(0) div.proPrice div.price-box p').contents());

		if (price_str=='') {

			price_str = textFind(resp_elem.find('div.search_products_main div.product_summary:eq(0) div.proPrice div.price-box p span.strike').contents());

		}

	
		prodlink_href = resp_elem.find('div.search_products_main div.product_summary:eq(0) span.product_title a').attr('href');

		
		prodlink_txt = $.trim(resp_elem.find('div.search_products_main div.product_summary:eq(0) span.product_title a').html());


		repl_strng='BabyOye: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;


		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

	} //endelse

} //closure
} //babyoye


//bookadda
var baSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	var ship_val;
	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'ba',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));


	var avail_val = true;
	if (resp_elem.find('#search_container ul.results a.didyoumeant').length>0) {
		avail_val  = false;
		}


	if  ((!avail_val)) {
		repl_strng = 'BookAdda: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		sendDynData(dyn_prod_deets);
		return true
		} 
	else if  (resp_elem.find('#search_container').length>0) {


		price_str = textFind(resp_elem.find('#search_container ul.results li:eq(0) div.details div.secondrow span.new_price strong').contents());

		if (price_str=='') {

			price_str = textFind(resp_elem.find('#search_container ul.results li:eq(0) div.details div.secondrow span.old_price').contents());

		}

	
		prodlink_href = resp_elem.find('#search_container ul.results li:eq(0) div.details > div > a').attr('href');

		
		prodlink_txt = $.trim(resp_elem.find('#search_container ul.results li:eq(0) div.details > div > a h4').html());



	} //endelseif

	else if (resp_elem.find(cssLocs.ba.title).length>0) {
		
		price_str =cleanPrice(textFind(resp_elem.find(cssLocs.ba.price).contents()));
		prodlink_txt = cleanTitle(textFindAll(resp_elem.find(cssLocs.ba.title).contents()));
		prodlink_href=fetch_url;
	}
	else {
		avail_val=false;
	}

	if (avail_val) {
	
		repl_strng='BookAdda: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;


		insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

	}


} //closure
} //bookadda


