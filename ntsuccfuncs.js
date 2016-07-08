
var ntSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {
	//closure


	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	
	resp_elem = $('<div/>').append($.parseHTML(response));

	var err_msg=resp_elem.find('#catalogPage div.searchInfo span.errMsg');

	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'nt',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};



	if (err_msg.length>0) {

		repl_strng='Naaptol: (Not Available) ' + '<a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		sendDynData(dyn_prod_deets);
		return true;

	}

	else {

		price_hold_all = resp_elem.find('#productView div.gridInfo:eq(0) p.values strong').contents();
		price_str = textFind(price_hold_all);
		prodlink_href=resp_elem.find('#productView div.gridInfo:eq(0) p.proName a').attr('href');
		prodlink_txt=resp_elem.find('#productView div.gridInfo:eq(0) p.proName a').html();

		
		repl_strng='Naaptol: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+'</span> <a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';

		dyn_prod_deets.prod_title=prodlink_txt;
		dyn_prod_deets.prod_price=price_str;
		dyn_prod_deets.prod_link=prodlink_href;
		dyn_prod_deets.prod_avail=true;


	}//else


	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

} //closure
}




var hsSuccess = function (server_prod_deets_var, fetch_url) {

return function(response, textStatus,sent_req) {
	

	var resp_elem, price_hold_all, price_str, prodlink_href, prodlink_txt, redir_link, repl_strng;
	
	resp_elem = $('<div/>').append($.parseHTML(response));


	var dyn_prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_price: -1,
	orig_prod_price: prod_deets.prod_price,
	prod_link:fetch_url,
	prod_site:'hs',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	if (resp_elem.find('div.failed-order-section').length>0) {
		repl_strng='HomeShop18: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		insertPrice(repl_strng,-1);
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		sendDynData(dyn_prod_deets);
		return true;
		}

	if (isBook()) {

		price_hold_all = resp_elem.find('#searchResultsDiv div.box:eq(0) p.price span.current').contents();
		price_str = textFind(price_hold_all);
		//if below gets multiple, use box instead of inside
		prodlink_txt=resp_elem.find('#searchResultsDiv div.inside:eq(0) a.productTitle').html();
		prodlink_href=resp_elem.find('#searchResultsDiv div.inside:eq(0) a.productTitle').attr('href');

	}
	else if (resp_elem.find('#searchResultsDiv').length>0) {
		
		price_hold_all = resp_elem.find('#searchResultsDiv div[class*="product_div"]:eq(0) p.price').contents();

		price_str = textFind(price_hold_all);
		prodlink_txt = resp_elem.find('#searchResultsDiv div[class*="product_div"]:eq(0) p.product_title a').attr('title');
		prodlink_href = resp_elem.find('#searchResultsDiv div[class*="product_div"]:eq(0) p.product_title a').attr('href');
	} // elseif

	else  {
		price_hold_all = resp_elem.find('#hs18Price').contents();
		prodlink_txt = resp_elem.find('#productInfoDes h1.product-name span[itemprop="name"]').html();
		prodlink_href = resp_elem.find('link[rel="canonical"]').attr('href');
		if (prodlink_href==undefined) {
			prodlink_href=fetch_url;
		}
		price_str = textFind(price_hold_all);
	}


		repl_strng='HomeShop18: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;


	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);


} //closure
} // end of hsSuccess function



var trSuccess = function (server_prod_deets_var, fetch_url) {

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
	prod_site:'tr',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};

	resp_elem = $('<div/>').append($.parseHTML(response));

	if (resp_elem.find('#zeroCountMessage, div.no-result-text').length>0) {
		repl_strng='Tradus: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';
		insertPrice(repl_strng,-1);
		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		sendDynData(dyn_prod_deets);
		return true;
		}


	var tr_ass = {'price': 'div.listing-container ul.prodListings-search li.prodListing-item:eq(0) > a div.price-info span.price span[itemprop="lowPrice"]',
				'link': 'div.listing-container ul.prodListings-search li.prodListing-item:eq(0) > a',
				'brand':'div.listing-container ul.prodListings-search li.prodListing-item:eq(0) > a h2.prod-name',
				'title':'div.listing-container ul.prodListings-search li.prodListing-item:eq(0) > a h2.prod-name'}
;


		price_hold_all = resp_elem.find(tr_ass.price).contents();	

		price_str = textFind(price_hold_all);
	
		prodlink_href = resp_elem.find(tr_ass.link).attr('href');
		prodlink_txt = textFindAll(resp_elem.find(tr_ass.title).contents());



	repl_strng='Tradus: Rs. <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';

	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;

	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);


} //closure
} //trSuccess



var saSuccess = function (server_prod_deets_var, fetch_url) {

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
	prod_site:'sa',
	bundle_key: prod_deets.bundle_key,
	call_type: prod_deets.call_type,
	prod_avail: false
	};


	resp_elem = $('<div/>').append($.parseHTML(response));

	if (resp_elem.find('#resultFoundNo span.redColor').length>0) {
		repl_strng = 'Saholic: (Not Available) <a href="'+affyLinkify(dyn_prod_deets,fetch_url)+'" target="_blank" style="display:inline !important">Search</a>';

		dyn_prod_deets.prod_link=fetch_url;
		dyn_prod_deets.prod_avail=false;
		insertPrice(repl_strng,-1);
		sendDynData(dyn_prod_deets);
		return true
		} 
	else {
	price_str = resp_elem.find('#productListCenter div.productItem:eq(0) span.newPrice:eq(1)').html();
	prodlink_href = resp_elem.find('#productListCenter div.productItem:eq(0) div.title a').attr('href');
	prodlink_txt = resp_elem.find('#productListCenter div.productItem:eq(0) div.title a').html();

	price_str=$.trim(price_str.replace(/rs\.*|\*|\,/gi,''));

	repl_strng='Saholic: <span class="'+pricespan+'" style="display:inline !important">'+price_str+' </span><a href="'+affyLinkify(dyn_prod_deets,prodlink_href)+'" target="_blank" style="display:inline !important">View</a>';


	dyn_prod_deets.prod_title=prodlink_txt;
	dyn_prod_deets.prod_price=price_str;
	dyn_prod_deets.prod_link=prodlink_href;
	dyn_prod_deets.prod_avail=true;



	insertPriceSendData(server_prod_deets_var, dyn_prod_deets, repl_strng, fetch_url);

	} //endelse

} //closure
} //saholic

