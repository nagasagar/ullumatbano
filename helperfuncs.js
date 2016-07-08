var cssLocs ={

		fk:{title: 'div.mprod-summary-title h1, div.mprod-section div.fk-prod-title h1', 
			bracktitle: 'div.mprod-summary-title span.extra_text', 
			price : 'div.mprod-summary span.fk-font-finalprice:eq(0), div.mprod-summary div.prices span.pprice',
			price_alt: 'div.mprod-summary span.final-price' ,
			pricealert:'div.mprod-summary div.prices',
			category: '#fk-mainbody-id div.fk-lbreadbcrumb span:nth-child(3) a',
			category_alt: '#fk-mainbody-id div.fk-lbreadbcrumb span:nth-child(2) a'},
		az:{title: 'div.buying #btAsinTitle, #ppd #title #productTitle', 
			bracktitle: '', 
			price : '#priceBlock #actualPriceValue b.priceLarge, #priceBlock #actualPriceValue b.priceLarge span, #ppd #price_feature_div #priceblock_saleprice, #ppd #price_feature_div #priceblock_ourprice',
			price_alt: '' ,
			pricealert:'#priceBlock #actualPriceValue, #ppd #price_feature_div',
			category: '#nav-subnav > li:eq(0) a',
			category_alt: '#nav-subnav > li:eq(2) a'},
		sd:{title: 'div.productDeal-right div.prodtitle-head h1, div.prodtitle-head h1, div.productDeal-right div.productTitle h1',
			bracktitle: '', 
			price : 'div.pdp_rightbox div.buyContainer #selling-price-id, div.pdp_hnypt div.ringe #selling-price, div.buyPriceWrapper #selling-price-id',
			price_alt: '' ,
			pricealert:'div.buyVendorShipBox',
			category: '#breadCrumbWrapper span[itemprop="breadcrumb"]:eq(0) a',
			category_alt: '#breadCrumbWrapper span[itemprop="breadcrumb"]:eq(1) a'},

		hs:{title: '#productInfoDes h1.product-name > span[itemprop="name"]', 
			bracktitle: '', 
			price : '#hs18Price',
			price_alt: '#hs18Price' ,
			pricealert: '#hs18Price' ,
			category: 'div.section ul.breadcrumb > li:eq(1)  > a > span[itemprop="title"]',
			category_alt: 'div.section ul.breadcrumb > li:eq(2) > a > span[itemprop="title"]'},

		ip:{title: '#mainContainer div.product_details h1 #lblTitle, div.fdpSkuArea h1 > span[itemprop="name"]', 
			bracktitle: '', 
			price : 'div.price_details #lblOurPrice, div.fdpOurPrice span[itemprop="price"] span.blueFont',
			price_alt: 'div.price_details #lblOurPrice' ,
			pricealert: 'div.price_details, div.fdpOurPrice',
			category: '#virtualPath a:eq(1)',
			category_alt: '#virtualPath a:eq(2)'},

		ib:{title: '#ib_details h1.fn, #title >h1', 
			bracktitle: '', 
			price : '#ib_details span.infiPrice, div.pdp_hnypt div.inf #ibTitle, #pricing_summary #price-after-discount span.price',
			price_alt: '#price_table div.buy-value' ,
			pricealert: '#ib_details, #price_table',
			category: '#submenu span.active a',
			category_alt: '#product-overview span.breadcrumb > a:eq(2)'},


		eb:{title: '#vi-tTbl h1.vi-is1-titleH1', 
			bracktitle: '', 
			price : '#vi-tTbl span.vi-is1-prcp',
			price_alt: '#vi-tTbl span.vi-is1-prcp' ,
			pricealert: '#vi-tTbl h1.vi-is1-titleH1',
			category: 'div.vi-ih-header div.bbc-nav ul.in > li:eq(0) a',
			category_alt: 'div.vi-ih-header div.bbc-nav ul.in > li:eq(1) a'},

		tr:{title: '#product-title, div.dd_product_specs_container h1.dd_title1, #left-content-product-details-part1 h1[itemprop="name"]', 
			bracktitle: '', 
			price : 'div.product-info div.prod-detail div.product-price-box div.priceBox span.wsPrice span[itemprop="lowPrice"]',
			price_alt: '#seller-content-container div[id*="seller"]:eq(0)  div.priceDiv p.price-content span[itemprop="highPrice"]' ,
			pricealert: 'div.product-info div.prod-detail div.product-price-box div.priceBox, #price-and-save-details, div.dd_product_specs_container div.mrpDiv',
			category: '#breadcrumb li:eq(1) > a, #breadcrump div[itemtype*="Breadcrumb"]:eq(1) > a > span',
			category_alt: '#breadcrumb li:eq(2) > a, #breadcrump div[itemtype*="Breadcrumb"]:eq(2) > a > span'},

		it:{title: '#content div.producthead h1[itemprop="name"]', 
			bracktitle: '', 
			price : '#content div.productsummary div.priceinfo div.newprice span[itemprop="price"]',
			price_alt: '#content div.productsummary div.priceinfo div.newprice span[itemprop="price"]' ,
			pricealert:'#content div.productsummary div.priceinfo',
			category: '#pagenav div.navigation > a:eq(1)',
			category_alt: '#pagenav div.navigation > a:eq(2)'},

		sa:{title: '#productDetail div.product-main-title div.name', 
			bracktitle: '#productDetail div.product-main-title div.desc', 
			price : '#productDetail div.price-n-warranty div.price #sp',
			price_alt: '#productDetail div.price-n-warranty div.price span[class*="price"]' ,
			pricealert:'#productDetail div.price-n-warranty div.price',
			category: '#main div.main-top div.bread-crumbs a:eq(1)',
			category_alt: '#main div.main-top div.bread-crumbs a:eq(2)'},

		nt:{title: '#product_page div.productDetails h1', 
			bracktitle: '', 
			price : '#product_page div.productDetails div.pro_PriceInfo ul li strong',
			price_alt: '#product_page div.productDetails div.pro_PriceInfo ul li strong' ,
			pricalert: '#product_page div.productDetails div.pro_PriceInfo',
			category: '#bradCrumb div.bradCrumbDiv ul > li:eq(2) a',
			category_alt: '#bradCrumb div.bradCrumbDiv ul > li:eq(4) a'},
		ye:{title: 'div.pdnamedescrpt #productTitle', 
			bracktitle: '', 
			price : 'div.PDRightPriceMain div.your_price span[itemprop="price"]',
			price_alt: 'div.PDRightPriceMain div.your_price span[itemprop="price"]' ,
			pricealert:'div.PDRightPriceMain div.your_price',
			category: 'div.pdmaingbg span[itemprop="breadcrumb"] > a:eq(0)',
			category_alt: 'div.pdmaingbg span[itemprop="breadcrumb"] > a:eq(1)'},

		my:{title: 'div.details div.summary div[data-styleid] h1', 
			bracktitle: '', 
			price : 'div.details div.summary div[data-styleid] div.price',
			price_alt: 'div.details div.summary div[data-styleid] div.price' ,
			pricealert: 'div.details div.summary div[data-styleid] div.price',
			category: 'div.details ul.breadcrumb li:eq(1) a',
			category_alt: 'div.details ul.breadcrumb li:eq(2) a'},
		ja:{title: '#qa-prd-brand', 
			bracktitle: '#qa-title-product', 
			price : '#price_container #price_div #before_price span[itemprop="price"]',
			price_alt: '#price_container #price_div #before_price' ,
			pricealert: '#qa-title-product',
			category: '#breadcrumbs > a:eq(1)',
			category_alt: '#breadcrumbs > a:eq(2)'},

		sc:{title: 'div.product-info h1.mainbox-title', 
			bracktitle: '', 
			price : 'div.product-info div.prices-container span.price-update span[id*="sec_discounted_price"], div.product-info table tbody p > span.price',
			price_alt: 'div.product-info div.clear span[id*="price_update"] span[id*="line_discounted_price"]' ,
			pricealert: 'div.product-info h1.mainbox-title',
			category: 'div.central-content > div.breadcrumbs > a:eq(1)',
			category_alt: 'div.central-content > div.breadcrumbs > a:eq(1)'},

		fc:{title: '#ctl00_ContentPlaceHolder1_showproduct div.product_display_css #ctl00_ContentPlaceHolder1_lbl_ProductName, #ctl00_ContentPlaceHolder1_showproduct #ctl00_ContentPlaceHolder1_lbl_ProductName', 
			bracktitle: '', 
			price : '#ctl00_ContentPlaceHolder1_showproduct div.product_display_css #ctl00_ContentPlaceHolder1_lbl_mrp',
			price_alt: '#ctl00_ContentPlaceHolder1_showproduct div.product_display_css #ctl00_ContentPlaceHolder1_lbl_mrp' ,
			pricealert: '#ctl00_ContentPlaceHolder1_showproduct div.product_display_css #ctl00_ContentPlaceHolder1_divprice',
			category: '#ctl00_ContentPlaceHolder1_showproduct div.breadcurm_css > a:eq(1)',
			category_alt: '#ctl00_ContentPlaceHolder1_showproduct div.breadcurm_css > a:eq(2)'},

		bo:{title: 'div.productDetail div.productName', 
			bracktitle: '', 
			price : 'div.productDetail div.productPrice #current_product_price',
			price_alt: 'div.productDetail div.productPrice #current_product_price' ,
			pricealert: 'div.productDetail div.productPrice',
			category: '#breadcrumbs ul > li:eq(1) a',
			category_alt: '#breadcrumbs ul > li:eq(2) a'},


		ba:{title: '#prdctdetl div.prdcol2 h1[itemprop="name"]', 
			bracktitle: '', 
			price : '#prdctdetl div.prdcol3 div.prcbox div.extrinr span[itemprop="offers"] span[itemprop="price"]',
			price_alt: '#prdctdetl div.prdcol3 div.prcbox div.exfringr span[itemprop="offers"] span[itemprop="price"]',
			pricealert: '#prdctdetl div.prdcol3 div.prcbox div.extrinr div.brdr',
			category: '#breadcrumbs ul > li:eq(1) a',
			category_alt: '#breadcrumbs ul > li:eq(2) a'},


};

var prod_deets ={
	prod_title:'',
	prod_bracktitle:'',
	prod_fulltitle:'',
	prod_categ:'',
	prod_categ_alt:'',
	prod_price:'',
	prod_link:window.location.href,
	prod_srch:'',
	prod_site:''
	};


var whisperbox, whisperboxtab, whisperboxalerttab, whisperboxcontent, allprice, simprice, nofound, pricespan, warnbox, hightlightm, mfpricealert, mfpricedesc, base_url_img, base_url_str, alert_url_img, alert_url_str, feedbackTab;

//var all_sites=['fc','bo','az','eb','sd','fk','my','ja','sa','ye','ib','tr','hs','ba','nt','sc'];
//var highfreq_sites=['fk','az','sd'];
//var top_sites=['az','eb','sd','fk','my','ja','hs','sc'];
//var babylife_sites=['fk','az','sd','bo','fc','my','ja','ib','sc'];
//var baby_sites=['fk','az','sd','bo','fc','ib','sc'];
//var watch_sites=['az','eb','sd','fk','my','ja','ib','ye','tr','hs','sc','nt'];
//var life_sites=['eb','sd','fk','my','ja','ye','ib','tr','hs','sc','nt'];
//var elec_sites=['az','eb','sd','fk','sa','ye','ib','tr','hs','sc','nt'];
//var book_sites=['az','eb','sd','fk','sc','ib','hs','nt','ba'];


var all_sites=['fc','bo','az','sd','fk','my','ja','sa','ye','tr','hs','ba','sc'];
var highfreq_sites=['fk','az','sd'];
var top_sites=['az','sd','fk','my','ja','hs','sc'];
var babylife_sites=['fk','az','sd','bo','fc','my','ja','sc'];
var baby_sites=['fk','az','sd','bo','fc','sc'];
var watch_sites=['az','sd','fk','my','ja','ye','tr','hs','sc'];
var life_sites=['eb','sd','fk','my','ja','ye','tr','hs','sc'];
var elec_sites=['az','sd','fk','sa','ye','tr','hs','sc'];
var book_sites=['az','sd','fk','sc','hs','ba'];


function insertTag() {
whisperbox = createRandString();
whisperboxtab = createRandString();
whisperboxalerttab = 'a'+whisperboxtab ;
whisperboxcontent = createRandString();
allprice= createRandString();
simprice= 'sim'+allprice;
warnbox = createRandString();
highlightm = 'hg'+warnbox; 
mfpricealert = 'pr'+warnbox;
mfpricedesc = 'dc'+warnbox;

pricespan = 'spn'+allprice;
simpricespan = 'spn'+simprice;
nofound = 'nfd'+allprice;


$('body:first').prepend('<div id="'+whisperbox+'"><span class="'+whisperboxtab+'" style="display:inline !important">Feedback</span><div id="'+whisperboxcontent+'" style="display:inline !important"><a href="http://bit.ly/1cy32lK" target="_blank" style="display:block !important">*BackUp Mat Bhulo Bhai!*</a><br/> <div id="'+allprice+'" class="empty" style="line-height:12px; display:block !important">.</div><br/> <div id="'+simprice+'" class="empty" style="line-height:12px; display:block !important"></div> <br/><div id="'+nofound+'" class="empty" style="line-height:12px; display:block !important"></div> <p id="'+warnbox+'" style="display:block !important"><br>*Identical product not found!</p><br><p id="'+highlightm+'"><a href="https://www.facebook.com/pages/Makkhichoose/409594222457987" target="_blank" style="display:inline !important">Like the Makkhi</a> on Facebook and help us spread the word! | <a href="mailto:makkhichoose@kernelinsights.com?subject=MakkhiChoose%20is%20awesome" target="_blank" style="display:inline !important">Write to us!</a></p><br/><a href="http://bit.ly/1cy32lK" target="_blank" style="display:block !important">*Are you backing up your movies?</a></div></div>');


$('#'+whisperbox).css({
	'visibility':'hidden',
	'padding':'20px',
	'width':'250px',
	'height': '350px',
	'background':'#ccc',
	'border-color':'#29216d',
	'border-width':'1px',
	'position':'fixed',
	'bottom':'100px',
	'left':'-291px',
	'z-index':'9999'});

$('#'+whisperboxcontent).css({
	'visibility':'hidden',
	'font-size':'12px',
	'text-align':'left'});


$('#'+highlightm).css({
	'background':'#eee'});

base_url_img = chrome.extension.getURL('mcicon.png');
base_url_str='url('+base_url_img+')';
alert_url_img = chrome.extension.getURL('mciconalert.png');
alert_url_str='url('+alert_url_img+')';

//alert_url_sml_img = "resource://jid1-W2ygRzycWiAk6Q-at-jetpack/mctest/data/icons/mciconalert32.png";;
alert_url_sml_img = chrome.extension.getURL('mciconalert32.png');
alert_url_sml_str='url('+alert_url_sml_img+')';

$('#'+whisperbox).css('height',$('#'+whisperbox).outerHeight() + 'px');
 
        $('span.'+whisperboxtab).click(function(event){
            if ($('#'+whisperbox).hasClass('open')) {
				$('#'+whisperboxcontent).css('visibility','hidden');
                $('#'+whisperbox)
                .animate({left:'-' + $('#'+whisperbox).outerWidth()}, 300)
                .removeClass('open');
            } else {
				$('#'+whisperboxcontent).css('visibility','visible');
                $('#'+whisperbox)
                .animate({left:'0'},  300)
                .addClass('open');
            }
            event.preventDefault();
        });


$('#'+whisperbox+' span.'+whisperboxtab).css({
	'background-image':base_url_str,
	'border-width':'1px',
	'display':'block',
	'height':'64px',	
	'left':'85px',
	'bottom':'21px',
	'position':'relative',
	'float':'right',
	'text-indent':'-9999px',
	'width':'64px',
	'outline':'none',
	'z-index':'9999'});

console.log('mc:clappity the gag is in');
} // endofinserttag




Array.prototype.diff = function(a) {
    return this.filter(function(i) {return !(a.indexOf(i) > -1);});
};



var createRandIntString = function(icon_type) {
	var num_int;
	if (icon_type=='init'){
		num_int=Math.floor(Math.random() * 15)+1;
		}
	else {
		num_int=Math.floor(Math.random() * 50)+30;
		}
	return num_int;
}

var createRandString = function() {
	var init_str='mprod-summary'
	var num_inc=Math.floor(Math.random() * 13)+1;
	var len_val = Math.floor(Math.random() * 4)+5;
	var randnum_arr=[];
	for (var num=0;num<len_val;num++){
		randnum_arr.push(Math.floor(Math.random() * 25)+97);
	}
	var rand_str = init_str.slice(0,num_inc+1)+String.fromCharCode.apply(null,randnum_arr);
	return rand_str
}


function isBook() {
	if ((prod_deets.prod_categ+' '+prod_deets.prod_categ_alt+ ' ' + prod_deets.prod_bracktitle).match(/(^|\s)(book|books|hardcover|paperback)(\s|$)/gi)) {
	return true;
	}
	else {
	return false;
	}
}





function isMobile() {
	if ( (prod_deets.prod_categ.toLowerCase().search('mobile')>-1) || (prod_deets.prod_categ_alt.toLowerCase().search('mobile')>-1)) {
	return true;
	}
	else {
	return false;
	}
}

function isLifeStyle() {
	var reg_pat = /(women|unisex|accessories|clothing|footwear|shoes|bags|wallet|beauty|jewellery|fragrance|decor|furniture|fashion)/gi;

	if ((prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat))) {
	 return true;
	}
	else {
	 return false;
		}
} //isLifeStyle

function isElec() {
	var reg_pat = /(games|gaming|mobile|smartphone|phones|computers|tablets|cameras|electronics|appliances)/gi;
	if ((prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat))) {
	 return true;
	}
	else {
	 return false;
		}
} //isElec

function isBaby() {
	var reg_pat = /(toys|babies|diaper|feeding|wipes|baby|kids|dolls|stroller)/gi;
	if (($.inArray(prod_deets.prod_site,['fc','bo'])>-1) || (prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat))) {
	 return true;
	}
	else {
	 return false;
		}
} //isBaby


function isWatch() {
	var reg_pat = /(watches)/gi;
	if ((prod_deets.prod_categ.match(reg_pat)) || (prod_deets.prod_categ_alt.match(reg_pat))) {
	 return true;
	}
	else {
	 return false;
		}
} //isBaby


function fetchMissingData(prod_deets_arr) {
		var prods_arr=prod_deets_arr['prodvals'];
		var prods_sites_arr=[],missing_sites_arr=[];
		for (i=0;i<prods_arr.length;i++) {
				prods_sites_arr[prods_sites_arr.length]=prods_arr[i]['prod_site'];
		}
		for (i=0;i<all_sites.length;i++) {
			
				if ($.inArray(all_sites[i],prods_sites_arr)==-1) {
					//Not in fetched, go fetch
					missing_sites_arr[missing_sites_arr.length]=all_sites[i];
					}
		}
		return missing_sites_arr;

}

function cleanPrice(in_str) {
	var clean_price_str = $.trim(in_str.replace(/rs\.*|\*|\,|\:/gi,''));
	clean_price_str = clean_price_str.split(" ")[0];
	if (isNaN(parseFloat(clean_price_str))) {
	//if the string is still notafloatthengocharbychar
	    return clean_price_str.split("").filter(function(each) {
        		if (!isNaN(each) || (each=='.')) {
               		return each;
        		}//if
    			}).join(''); //func                                                                           
        
	} //if
	else {
	 return clean_price_str;  
	}


} //cleanPrice

function cleanShipPrice(in_str) {
	return $.trim(in_str.replace(/rs\.*|\*|\,|\+|shipping/gi,''));
} //cleanPrice

function sameProd(a_prc_str,b_prc_str) {
	a_prc=parseFloat(a_prc_str);
	b_prc=parseFloat(b_prc_str);
	if ((a_prc>(2*b_prc)) || (b_prc>(2*a_prc))) {
		return false;
		}
	else {
		return true;
	}

} //sameProd




function textFind(contents_arr) {
	var price_val='';
	//nodetype only fetches textnode
	$.each(contents_arr, function () {
			if ((this.nodeType === 3) && $.trim($(this).text())!=''){
					price_val += ' '+$.trim($(this).text());
				} //ifloop
			}); // eachFunction

	return cleanPrice(price_val);
	
} // textFind


//lookforuidinword
function lookForUID(each) {
    if (each.length>4 && each.match(/\d+/gi)) {
         return each;
    }
}

function lopAfterFor(in_str) {
	if (in_str.match(/for\s(women|men)/gi)) {
		return in_str;
	}
	else if (isElec()) {
		if (!in_str.match(/for\s(women|men)/gi) && in_str.match(/\sfor\s/gi)) {
				var formatch_val = in_str.match(/\sfor\s/gi);
				return in_str.split(formatch_val[0])[0];
				
		}	else {
			return in_str;
			}

	}	else {
		return in_str;
		}

}

//lookforuidintitlestring
function findProductUID(in_str) {
	var uid_matches = in_str.split(' ').filter(lookForUID);

	if (uid_matches.length==0) {
		return '';
	}
	else if (uid_matches.length==1) {
		return uid_matches[0];
	} //elseif
	else {
		var uid_match_val = uid_matches[0];
		for (var i=1;i<uid_matches.length;i++) {
			if 	(uid_match_val.length<uid_matches[i].length)	{
				uid_match_val=uid_matches[i];
			}
		return uid_match_val;
		}
	} //else
}

function cleanTitle(in_str) {


	var out_str = in_str.replace(/\*|\!|\(|\)|\[|\]|\,|\t+|\n+|\r+|\!|\s\-\s/gi,' ');
	
	if (prod_deets.prod_site=='eb') {
		out_str = out_str.replace(/\W/gi,' ');
	}


	var title_uid = findProductUID(out_str);

	if (title_uid!='') {
		var lop_str = lopAfterFor(out_str);

		if (lop_str.match(title_uid)) {
			//uid in lop str, truncate till there
			var trunc_str = lop_str.split(title_uid)[0]+title_uid;
			return $.trim(trunc_str)
		} else {
			//uid not in lop str, tack on
			return $.trim(lop_str+' '+title_uid);
		}
	}

	out_str = out_str.replace(/(mobile|mobiles|free|shipping|ship|cellphone|brand|(^|\s)new(\s|$)|sealed|unlocked|completely|edition|1st|running|sports|phone)/gim,' ');

	out_str=$.trim(out_str.replace(/digital|camera|smartphone|tablet|phablet|point\-and\-shoot|unpacked|warranty/gim,' '));


	if (!isBook()){
	var color_chk = out_str.split(" ").slice(3,7).join(' ');
	var gb_vals = extractTechDeets(out_str.split(" ").slice(7,17).join(' '));
	out_str= $.trim(out_str.split(" ").slice(0,3).join(' ')+' ' + $.trim(color_chk.replace(/\s(black|white|silver|yellow|grey|gray|steel|slate|green|orange|blue|ceramic|metallic|cyan|(slate|steel)(\-|\s)*(grey|gray|black))(\s|$)/gim,' ')))+' '+gb_vals;
	}
	else {
		out_str= $.trim(out_str.split(" ").slice(0,7).join(' '));
	}

	return out_str;


} //

function textFindAll(contents_arr) {
	var text_val='';
	$.each(contents_arr, function () {
			if ($.trim($(this).text())!=''){
					text_val += ' '+$.trim($(this).text());
				} //ifloop
			}); // eachFunction
	return $.trim(text_val);
	
} // textFindAll




function insertSimilarPrice(repl_strng_var,price_str_var) {
		var price_val=parseFloat(price_str_var);
		var simprice_arr=$('#'+simprice).children();
		var nofound_arr=$('#'+nofound).children();
		var curr_price;


		if (price_val==-1){
			if (nofound_arr.length==0) {
				$('#'+nofound).html('<p>'+repl_strng_var+'</p>');
			}
			else {
				$('<p>'+repl_strng_var+'</p>').insertAfter(nofound_arr[nofound_arr.length-1]);
			}
		return true;
		}

		if (simprice_arr.length==0) {
			$('#'+simprice).html('<p>'+repl_strng_var+'</p>');
			return true;
			}


		for (i=0;i<simprice_arr.length;i++) {
						curr_price=parseFloat($(simprice_arr[i]).children('span.'+simpricespan).html());
						if ( price_val < curr_price) {
							$('<p>'+repl_strng_var+'</p>').insertBefore(simprice_arr[i]);
							return;
						} //ifstatement


		} //forstatement
		//hmm if we are here, we have not prepended it yet
		$('<p>'+repl_strng_var+'</p>').insertAfter(simprice_arr[simprice_arr.length-1]);
}






function insertPrice(repl_strng_var,price_str_var) {

		var price_val=parseFloat(price_str_var);
		var price_arr=$('#'+allprice).children();

		var nofound_arr=$('#'+nofound).children();
		var curr_price;


		
		if (price_val==-1){
			if (nofound_arr.length==0) {
				$('#'+nofound).html('<p>'+repl_strng_var+'</p>');
			}
			else {
				$('<p>'+repl_strng_var+'</p>').insertAfter(nofound_arr[nofound_arr.length-1]);
			}
		return true;
		}

		if (price_arr.length==0) {
			$('#'+allprice).html('<p>'+repl_strng_var+'</p>');
			return true;
			}


		for (i=0;i<price_arr.length;i++) {

						curr_price=parseFloat($(price_arr[i]).children('span.'+pricespan).html());
						if ( price_val < curr_price) {
							$('<p>'+repl_strng_var+'</p>').insertBefore(price_arr[i]);
							return;
						} //ifstatement


		} //forstatement
		//hmm if we are here, we have not prepended it yet
		$('<p>'+repl_strng_var+'</p>').insertAfter(price_arr[price_arr.length-1]);
}


function brandStrip(in_str) {
	var out_str = in_str.replace(/adidas|asics|bata|converse|crocs|fila|lotto|skechers|timberland|nike|puma|woodland|reebok|lee\scooper|red\stape|kalenji|catwalk/gi,"");
	
	if (out_str!=in_str) {
		return $.trim(out_str);
		}

	out_str=out_str.replace(/allen\ssolly|artengo|calvin\sklein|campus|carlton\slondon|clarks|dunlop|franco\sleone|levi|louis\sphilippe|provogue|salomon|slazenger|vans|wilson|yonex/gi,"");

	if (out_str!=in_str) {
		return $.trim(out_str);
		}

	out_str = out_str.replace(/united\scolors\sof\sbenetton|ralph\slauren|park\savenue|hugo\sboss|peter\sengland|davidoff|wrangler|freecultr|blackberrys|status\squo|fastrack|casio|titan|fossil|tommy|hilfiger|timex|maxima|citizen|giordano/gi,"");

	if (out_str!=in_str) {
		return $.trim(out_str);
		}
	return out_str;

} //brandStrip


function SinFind(in_str) {
	syn_strs={'flats':'sandals','sandals':'flats'};
	if (in_str in syn_strs) {
		return syn_strs[in_str];
		}
	else  {
		return false;
		}

} // SinFind

function addSins(in_arr) {
	var out_arr = [];
	var syn_val;
	for (var i=0;i<in_arr.length;i++){
		syn_val = SinFind(in_arr[i]);
		if (syn_val) {
			out_arr.push(syn_val)
		}
			out_arr.push(in_arr[i]);
	}
	return out_arr

} // addSins


function commonWordLen(in_str_a,in_str_b) {
    //NOT BIDIRECTIONAL, BUT OK AS RARELY DO SUBSTRINGS SIT INSIDE STRINGS
    var in_str_b_lower=$.trim(in_str_b).toLowerCase();
    
	var curr_srch_words = $.trim(in_str_a).toLowerCase().split(/\s+/gi);
	curr_srch_words = addSins(curr_srch_words);
	var common_length = curr_srch_words.filter(function (each) {
    			if (in_str_b_lower.indexOf(each)>-1 ){
            		return true;
    				}
				}).length;

	return common_length;

}

function checkProductMatch(server_prod_deets_var, dyn_prod_deets_var, repl_strng_var, raw_search_url) {
	//check if same product

	var compare_title;
	if  ((server_prod_deets_var=='') || ($.trim(server_prod_deets_var.prod_title)=='') || (server_prod_deets_var.prod_avail==false)) {
		compare_title = prod_deets.prod_srch;
		}

	else {
		compare_title = cleanTitle(server_prod_deets_var.prod_title);
	}
	


	var check_title=cleanTitle(dyn_prod_deets_var.prod_title.toLowerCase());	
	var check_title_len=check_title.split(/\s+/gi).length
	//now append spaces
	check_title=' '+check_title+' ';
	var curr_srch_words = $.trim(compare_title).toLowerCase().split(/\s+/gi);

	common_length = commonWordLen(compare_title,check_title);

	var match_val='nan';
	if (common_length>4){
		match_val = 'y';
		//return true;
	}

	else if (common_length==curr_srch_words.length) {
		if ((common_length*3)<check_title_len) {

			match_val = 'm';
			//return false;
 
		} else  {
			match_val = 'y';
			//return true;
			}
	}
	else if ((common_length>1) && (common_length==curr_srch_words.length-1)) {

		if (commonWordLen(brandStrip(compare_title),brandStrip(check_title))>0){

			if (curr_srch_words.length<4) {
				match_val = 'm';
			} else {
				match_val = 'y';
			}
		}	
		else {
			match_val = 'n';
		}
	}

	else if (common_length>1) {
		match_val = 'm';
	}

	else {

		if (isLifeStyle()) {
			match_val = 'n';
		} else {
			
			match_val = 'm';
		}
	
		//return false;
	}

	return match_val;
} //checkProductMatch

//

function insertPriceSendData(server_prod_deets_var, dyn_prod_deets_var, repl_strng_var, raw_search_url) {


	var price_val, orig_price, stat_val='avail';
	var server_price;
	if (server_prod_deets_var==''){
		//TODO is the best idea?
		server_price=-10;
	} else {
		server_price=parseFloat(server_prod_deets_var.prod_price);
	}

	if (isNaN(parseFloat(dyn_prod_deets_var['prod_price']))) {
		stat_val='notfound';
	} //if
	else {


			price_val=parseFloat(dyn_prod_deets_var['prod_price']);
			orig_price=parseFloat(dyn_prod_deets_var['orig_prod_price']);


			if ((orig_price*4<price_val) || (orig_price>4*price_val)) {
					stat_val='notfound';
			}			

			else {
				//sendregular
			
				//check if title matches


				var check_product_match = checkProductMatch(server_prod_deets_var, dyn_prod_deets_var, repl_strng_var, raw_search_url);


				if (check_product_match=='y'){
					stat_val='avail';
				}
				else if (check_product_match=='m'){
					stat_val='similar';
				} else {
					stat_val='notfound';
				}

			}
		
		} //else


		if (stat_val=='notfound') {
			insertPrice(createNotFoundStringLink(dyn_prod_deets_var, raw_search_url),-1);
			
			dyn_prod_deets_var.prod_title=prod_deets.prod_srch;
			dyn_prod_deets_var.prod_link=raw_search_url;
			dyn_prod_deets_var.prod_avail=false;
			dyn_prod_deets_var.prod_price=-1;
			
		} else if (stat_val=='similar') {
			insertSimilarPrice(createClosestFoundStringLink(dyn_prod_deets_var, raw_search_url, price_val),price_val);

			dyn_prod_deets_var.prod_title=prod_deets.prod_srch;
			dyn_prod_deets_var.prod_link=raw_search_url;
			dyn_prod_deets_var.prod_avail=false;
			comparePrices(dyn_prod_deets_var);
			$('#'+warnbox).css('visibility','visible');

		} else {

			insertPrice(repl_strng_var,dyn_prod_deets_var['prod_price']);
			comparePrices(dyn_prod_deets_var);
		}

		
		sendDynData(dyn_prod_deets_var);




} //checkinsert



var removeParentheticals = function(orig_ttl){
	return orig_ttl.replace(/\(.+?\)/g,"");
};

var matchParentheticals = function(orig_ttl){
	var matched_val = orig_ttl.match(/\(.+?\)/g);
	if (matched_val) {
		return matched_val[0];
	}
	else {
		return '';
	}
};

var trimForNT = function(orig_ttl){
	var trimmed_ttl=orig_ttl.split(' ');
	trimmed_ttl.splice(5);
	return $.trim(trimmed_ttl.join(' ').replace(/\(.+?\)/g,""));
};



//extract memory strings and search for both variants --with space and with-no space
var extractGB = function(str_val) {
	if (str_val.match('\\d+GB')) {
		return str_val.match('\\d+GB') + ' ' + str_val.match('\\d+GB')[0].replace('GB',' GB');
	}
	else if (str_val.match('\\d+\\s+GB')) {
		return (str_val.match('\\d+\\s+GB') + ' ' + str_val.match('\\d+\\s+GB')[0].replace(/\s+/g, ''));
	}

	else {
		return '';
		}

};

var extractTechDeets = function (str_val) {
	var match_val = str_val.match(/(\d+(g|mp))(\s|$)|wifi/gi);
	if (match_val) {
		return (extractGB(str_val)+' '+match_val.join(" "));
	}
   else {
	   return extractGB(str_val);
	}
}



var checkTitleMatch = function(orig_ttl,srch_ttl){

	var orig_words = $.trim(orig_ttl).toLowerCase().split(' ');
	var srch_words = $.trim(srch_ttl).toLowerCase().split(' ');
	var titlesMatched = true;

	if (orig_words.length >=3 && srch_words.length >=3) {
	    for (var i = 0;i<3; i++)  {
			if (orig_words[i] != srch_words[i]) {

				titlesMatched = false;
				return false;             
			}        
		}

	}
	else if (orig_words.length == srch_words.length)  {
	    for (var i = 0;i<orig_words.length; i++)  {
			if (orig_words[i] != srch_words[i]) {

				titlesMatched = false;
				return false;             
			}        
		}
	}
	else {
		titlesMatched = false;
		return false;
		} 
	if (titlesMatched) {
		return true;
	}

};



var checkGBMatch = function(orig_ttl,srch_ttl){

	if (orig_ttl.match('\\d+\\s*GB') && srch_ttl.match('\\d+\\s*GB')) {		
		var orig_gb, srch_gb;
		orig_gb = 	orig_ttl.match('\\d+\\s*GB')[0].replace(/\s*GB/g, '');
		srch_gb = 	srch_ttl.match('\\d+\\s*GB')[0].replace(/\s*GB/g, '');
		if (srch_gb != orig_gb) {
			return false;
			}
		else {
			return true;
		}
	}
	else {
		return true;
	}

};



// msp

function getFetchSites() {

	if (isBaby()) {
		if (isLifeStyle()) {
			return babylife_sites;
		} else {
			return baby_sites;
		}
	}
	else if (isElec()) {
		return elec_sites;
	}
	else if (isLifeStyle()) {
		return life_sites;
	}
	else if (isBook()) {
		return book_sites;
	}
	else if (isWatch()) {
		return watch_sites;
	}
	else {
		return top_sites;
	}
}



function capitaliseWord(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function jsonBookResponse(response) {
	var obj = JSON.parse(response);
	if (Object.keys(obj).length > 0) {
		var isbn_val=Object.keys(obj)[0];
		var srch_link = 'http://www.mysmartprice.com/books/msp_book_single.php?q='+obj[isbn_val]['isbn']
		var repl_strng=capitaliseWord(obj[isbn_val]['merchant'])+': Rs.'+obj[isbn_val]['price']+ ' <a href="' + srch_link + '" target="_blank" style="display:inline !important">View</a> <br>';
		if ($('#'+msprice).hasClass('empty')){
			$('#'+msprice).removeClass('empty');
			$('#'+msprice).html(repl_strng);
		}
		else {
			$('#'+msprice).append(repl_strng);
			
		}
	}

}



var getPrAlertStr = function() {
	return '<p id="'+mfpricedesc+'" style="display:inline !important"> <span id="'+mfpricealert+'" style="display:inline !important"></span> Lower price available on another site! Click on tag at bottom left to see.</p>';
}


var setPrAlertCSS = function() {


	$('#'+mfpricedesc).css({
		'font-size':'8px',
		'color':'#95002b',
		'background-color':'#a6f16c',
		'margin':'5px'});



if (prod_deets.prod_site=='fk') {
	$('#'+mfpricealert).css({
		'background-image':alert_url_sml_str,
		'border-width':'1px',
		'display':'block',
		'height':'32px',
		'width':'32px',
		'position':'relative',
		'float':'left',
		'outline':'none'});
}
else {
	$('#'+mfpricealert).css({
		'background-image':alert_url_sml_str,
		'border-width':'1px',
		'display':'block',
		'height':'32px',
		'width':'32px',
		'position':'relative',
		'float':'left',
		'outline':'none'});
} //else


}




function publishProdData(server_prod_deets_var) {
	return function(response,textStatus,sent_req) {
		insertPrice(createStringLink(server_prod_deets_var),server_prod_deets_var.prod_price);
		comparePrices(prod_deets.prod_price,server_prod_deets_var.prod_price,prod_deets.prod_site);
	}//closure
} //publishProdData




function genFail(server_prod_deets_var, fetch_site, fetch_url) {
	return function(response,textStatus,sent_req) {
		if (server_prod_deets_var!='') {
			publishProdData(server_prod_deets_var);
		}//ifstale
		else {

			var err_prod_deets ={
			prod_title:'',
			prod_bracktitle:'',
			prod_fulltitle:'',
			prod_categ:'',
			prod_price: -1,
			orig_prod_price: prod_deets.prod_price,
			prod_link: this.url,
			prod_site:fetch_site,
			bundle_key: prod_deets.bundle_key,
			call_type: prod_deets.call_type,
			prod_avail: false
			};
			
			sendDynData(err_prod_deets);
			insertPrice(createNotFoundStringLink(err_prod_deets,this.url),-1);
		}
	} //closure
}

function addNoFetchSiteLink(fetch_site){

	var nofetch_prod_deets ={
			prod_title:'',
			prod_bracktitle:'',
			prod_fulltitle:'',
			prod_categ:'',
			prod_price: -1,
			orig_prod_price: prod_deets.prod_price,
			prod_link: '',
			prod_site:fetch_site,
			bundle_key: prod_deets.bundle_key,
			call_type: prod_deets.call_type,
			prod_avail: false
			};
	insertPrice(createNotFoundStringLink(nofetch_prod_deets,createFetchURL('', fetch_site)),-1);

} //addNoFetchSiteLink



function alertEach(dyn_prod_deets_var) {
	return function (each) {
		alert(dyn_prod_deets_var.prod_site+' to: '+each);
		}//closure
}//alertEach



var comparePrices = function(dyn_prod_deets_var) {

	var orig_price_fl, srch_price_fl;

	if ((dyn_prod_deets_var.prod_price=='-1') || (dyn_prod_deets_var.prod_price==-1)) {
		return true;
		}


	if (typeof prod_deets.prod_price == 'string') {
		orig_price_fl = parseFloat(prod_deets.prod_price.replace('Rs.','').replace(',',''));
	} 
	else {
		orig_price_fl = parseFloat(prod_deets.prod_price);
	}

	if (typeof dyn_prod_deets_var.prod_price == 'string') {
		srch_price_fl = parseFloat(dyn_prod_deets_var.prod_price.replace('Rs.','').replace(',',''));
	} 
	else {
		srch_price_fl = parseFloat(dyn_prod_deets_var.prod_price);
	}

	if (srch_price_fl<orig_price_fl) {
		

		if ($('span.'+whisperboxtab).length > 0) {


			if (prod_deets.prod_site=='fk'){
			//FLIPFUCKFLIP

			$('#'+ whisperbox + ' span.'+whisperboxtab).css({
				'color':'#44dd44'});
			/* CHANGEIFBLOCKED
			$('#'+whisperbox+' span.'+whisperboxtab).html('<div class="lastUnit dis-img discount-'+createRandIntString('')+'"></div>');
			*/
			$('#'+ whisperbox + ' span.'+whisperboxtab).css({
				'background-image':alert_url_str});		
			} //iffk
			else {
			$('#'+ whisperbox + ' span.'+whisperboxtab).css({
				'background-image':alert_url_str,'display':'inline !important'});
			
			}
			$('#' + whisperbox +' span.'+whisperboxtab).addClass(whisperboxalerttab).removeClass(whisperboxtab);
			
		} //ifwhispertab

		if ($('#'+mfpricedesc).length == 0) {
			$(getPrAlertStr()).insertAfter($(cssLocs[prod_deets.prod_site].pricealert));
			//SetCSSforAlertImg
			setPrAlertCSS();				
		}


		return true;

		}
	else {
		return false;
		}

};

function encodeURIComponentFix(in_str) {
	return encodeURIComponent(in_str).replace(/%20/g,'+').replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}
