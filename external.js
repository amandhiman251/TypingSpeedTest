let a, b, c, d, e, f = true;
function clk() {
	a = Date.now();
}
function start() {
	document.getElementById("i2").style.display = "block";
  	document.getElementById("i3").innerHTML = "Done";
  	document.getElementById("i3").addEventListener("click", stop);
}
function stop() {
	if (f == true) {
		b = Date.now();
		c = (b - a);
		c = (c/1000)/60;
		d = document.getElementById("i2").value.split(' ');
		e = d.length/c;
		e = Math.round(e);
		if ( e < 27) {
			document.getElementById("i1").innerHTML = "Your typing speed is " + "<b>"+ e + "</b>" + " words per minute." + "<br>" + "You need to do more Practice &#128546;";
		}else {
			document.getElementById("i1").innerHTML = "Your typing speed is " + "<b>"+ e + "</b>" + " words per minute." + "<br>" + "You are Good to Go." +"<br>" +"Best of Luck &#128077;";
		}
	}
		f = false;
}