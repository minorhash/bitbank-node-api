var req= require('request');

var headers = {
    'Accept': 'application/json'
};
var dat="20190312"
var opt= {

url:'https://public.bitbank.cc/xrp_jpy/candlestick/5min/'+dat,
headers: headers
};

function cb(err, res, body) {
if (!err&& res.statusCode == 200) {
    //console.log(body);
var obj=JSON.parse(body)
var oh=obj.data.candlestick[0].ohlcv
var len=oh.length
console.log(len)
for(var i=0;i<len;i++){
if(oh[i][4]>100000){

if(oh[i][3]>37){
console.log("=== sell")
console.log("vol:"+Math.round(oh[i][4]).toLocaleString())
console.log(new Date(oh[i][5]))
console.log(oh[i][3])
}else if(oh[i][3]<34.5){
console.log("=== buy")
console.log("vol:"+Math.round(oh[i][4]).toLocaleString())
console.log(new Date(oh[i][5]))
console.log(oh[i][3])
}
}
}//for
}
}

req(opt,cb)
