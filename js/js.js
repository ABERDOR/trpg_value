//alert('123')

url = 'json/js.json';

fetch(url, {})
.then((response) => {
  //console.log(response);
  return response.json(); 
}).then((jsonData) => {
  show(jsonData['魔藝師']);
  //console.log(jsonData);
}).catch((err) => {
  console.log('錯誤:', err);
})
var add = '<button onclick=\"addf(this)\">+<//button>';
var reduce = '<button onclick=\"reducef(this)\">-<//button>';
var allch = ['ch0','ch1','ch2','ch3'];
var a=0;
function addch(){
	var newch=document.getElementById('newch');
	fetch(url, {})
	.then((response) => {
	  //console.log(response);
	  return response.json(); 
	}).then((jsonData) => {
	  show(jsonData[newch.value]);
	  //console.log(jsonData);
	}).catch((err) => {
	  console.log('錯誤:', err);
	})
}
function addf(self){
	var num = self.previousSibling;
	num.value=int(num.value)+int(1);
	num.innerHTML=num.value;
}
function reducef(self){
	var num = self.nextSibling;
	num.value=int(num.value)-int(1);
	num.innerHTML=num.value;
}
function show(obj){
	if(a<4 && obj!=null){
	var ch=document.getElementById(allch[a]);
	a+=1;
	ch.innerHTML ='';
	ch.innerHTML+='<div>'+obj['職業']+'</div>';
	for (skSP in obj['skillSP']){
		//console.log(skSP);
		ch.innerHTML+='<div title=\"'+obj['skillSP'][skSP]+'\">'
			+skSP
			+"</div>";
	}
	for (va in obj['value']){
		//console.log(va);
		ch.innerHTML+='<div>'
			+va
			+reduce
			+'<a>'
			+obj['value'][va]
			+'</a>'
			+add
			+'</div>';
	}
	for (sk in obj['skill']){
		//console.log(sk);
		ch.innerHTML+='<div title=\"'+obj['skillEX'][sk]+'\">'
			+sk
			+'<a>'
			+obj['skill'][sk]
			+'</a>'
			+'</div>';
	}
		
	//ch.innerHTML+='<div>'+obj['職業']+'</div>';	
	//ch.innerHTML+='<div>'+obj['職業']+'</div>';	
	//ch.innerHTML+='<div>'+obj['職業']+'</div>';
	//ch.innerHTML+='<div>'+obj['職業']+'</div>';
	}
}
