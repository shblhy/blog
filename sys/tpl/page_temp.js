/**
 * @author bh-lay
 *
 * get template that we have defined !
 * 
 * exports.get(mod_name,{init:true});
 *	  {init :true} replace public template
 *    {init :false} return original text
 *  
 */

var fs = require('fs');
var tpl = require('../tpl/module_tpl');

var temp_list = {
	'index' : {
		'src' : './templates/index.html',
		'Last-Modified' : null,
		'text' : null,
	},
	'blogDetail' : {
		'src' : './templates/blogDetail.html',
	},
	'blogList' : {
		'src' : './templates/blogList.html',
	},
	'opusList' : {
		'src' : './templates/opusList.html',
	},
	'opusDetail' : {
		'src' : './templates/opusDetail.html',
	},
	'shareList' : {
		'src' : './templates/shareList.html',
	},
	'shareDetail' : {
		'src' : './templates/shareDetail.html',
	},
}; 

//method get
exports.get = function(mod,param) {
	if(arguments.length<1){
		return 'please input template name !';
	}
	var mod = mod,
		param = param ;
		
	var temp = temp_list[mod];
	if(temp){
		var temp = fs.readFileSync(temp['src'], "utf8");
		if(param.init){
			temp = tpl.init(temp);
		}
		return temp ;
	}else{
		return 'please check template name !';
	}
}
