var qsbutton = document.getElementById("qs") ;
// var sqbutton = document.getElementById("sq");
var repo = document.getElementById("repo");
qsbutton.onclick = function(){
	linearray = repo.value.split("\n");
	res = "";
	var leng = linearray.length;
	for (var i=0; i<leng; ++i) {
		linearray[i] = "'" + linearray[i];
		resarray = linearray[i].split(" ");
		res = res + resarray[0]+" "+resarray[1];
		if (i-leng+1) res = res + "\r\n";
	}
	repo.value = res;
	alert("已将qq词库转换为搜狗可用的词库。");
}