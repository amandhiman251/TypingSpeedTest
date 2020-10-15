var a, b, c;
function start() {
	 a = new Date();
	 
}
function stop() {
	b = new Date();
	c = (b - a);
	c= (c/1000)/60;
	

	document.getElementById("i1").innerHTML = c;
}