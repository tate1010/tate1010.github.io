function getParams()
{
	var toParse = document.URL
	if (toParse.indexOf("perc") == -1) 
	{
		alert("oops, something went wrong serverside");
	} 
	else 
	{
		toParse = toParse.slice(toParse.lastIndexOf("=")+1, toParse.length)
		var percentage = toParse + "%"
		document.getElementById("percentage").innerHTML = percentage;
		document.getElementById("percentage").style.width = percentage;
	}
}