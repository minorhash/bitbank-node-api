var req= require('request');

var headers = {
    'Accept': 'application/json'
};

var opt= {
url:'https://public.bitbank.cc/xrp_jpy/depth',
headers: headers
};

function cb(err, res, body) {
if (!err&& res.statusCode == 200) {
    //console.log(body);
var obj=JSON.parse(body)
console.log(obj);

    //console.log(Math.round(obj.data.vol).toLocaleString());

}
}

req(opt,cb)
