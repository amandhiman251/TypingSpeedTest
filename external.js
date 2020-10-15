var a, b, c;
function clk() {
	a = Date.now();
}
function start() {
	 document.getElementById("i3").innerHTML = "Done";
	 document.getElementById("i3").addEventListener("click", stop);
}
function stop() {
	b = Date.now();
	c = (b - a);
	c = (c/1000)/60;
	document.getElementById("i1").innerHTML = c;
}