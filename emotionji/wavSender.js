function sendDataFile() {
	var payload = null
	var file = document.getElementById("uploadBtn").files[0]
	if (file && file.name.lastIndexOf(".wav") == file.name.length-4) {
		var reader = new FileReader();
		payload  = btoa(reader.readAsBinaryString(file))
		alert(payload)
	}
	if (payload != null) {
		var text = "{\"type\":1," +
			"\"file\":\"" + payload + "\"}";
		alert(text)
		var obj = JSON.parse(text)
		jQuery.ajax({
			url: '/Postman Interceptor',
			data: {
				obj
			},
			dataType: 'json'
		});
		return true;
	} else {
		document.getElementById("error").innerHTML = "please choose a wav file"
		return false;
	}
}

function sendDataText() {
    jQuery.ajax({
        url: 'https://immense-lowlands-49222.herokuapp.com/yhackss17/1/' + document.getElementById("textToUpload").value,
				alert("hi");
		success: function(data) {
			var newUrl;
			var percentage = parseFloat(data.slice(data.indexOf(" ")+1, data.indexOf(".")+3))*100.00
			if (data.indexOf("Joy") != -1) {
				newUrl = "results/joy.html?perc=" + percentage
			} else if (data.indexOf("Neutral") != -1) {
				newUrl = "results/neutral.html?perc=" + percentage
			} else if (data.indexOf("Anger") != -1) {
				newUrl = "results/anger.html?perc=" + percentage
			} else if (data.indexOf("Surprise") != -1) {
				newUrl = "results/surprise.html?perc=" + percentage
			} else if (data.indexOf("Fatigue") != -1) {
				newUrl = "results/fatigue.html?perc=" + percentage
			} else if (data.indexOf("Sad") != -1) {
				newUrl = "results/sad.html?perc=" + percentage
			} else {
				newUrl = "UI.html";
			}
            document.location.href = newUrl;
        },
        error: function() {
            alert('Error occured');
			return false;
        }
    });
}
