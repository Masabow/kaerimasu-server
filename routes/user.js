
/*
 * GET users listing.
 */
require('date-utils');
exports.list = function(req, res){
  res.send("respond with a resource");
};


var STATUS_NORMAL = 0;
var STATUS_KAERU = 1;
var NM_STATUS_NORMAL = '異常なし';
var NM_STATUS_KAERU = '帰ります';
exports.tochan = {
	data : {
		status_code : 0,
		status_name : NM_STATUS_NORMAL,
		start_address : "",
		format_time : "",
		pos : {}
	},
	kaerimasu : function() {
		this.data.status_code = STATUS_KAERU;
		this.data.status_name = NM_STATUS_KAERU;
	},
	kaerimasita : function() {
		this.data.status_code = STATUS_NORMAL;
		this.data.status_name = NM_STATUS_NORMAL;		
	},
	setPos : function(pos) {
		var sec = pos.duration.value;
		var date = new Date();
		date.setTime(date.getTime() + sec * 1000);
		this.data.format_time = 'Arrive:' + date.toFormat("YYYY/MM/DD HH24:MI:SS");
		this.data.start_address = pos.start_address;
		this.data.pos = pos;
	}
};