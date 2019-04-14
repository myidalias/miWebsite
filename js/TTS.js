var API_ENDPOINT = "https://qzagekccr9.execute-api.us-east-1.amazonaws.com/dev"



document.getElementById("sayButton").onclick = function(){
	var inputData = {
		"voice": $('#voiceSelected option:selected').val(),
		"text" : $('#postText').val()
	};

	$.ajax({
	      url: API_ENDPOINT,
	      type: 'POST',
	      data:  JSON.stringify(inputData)  ,
	      contentType: 'application/json; charset=utf-8',
	      success: function (response) {
					document.getElementById("postIDreturned").textContent="Post ID: " + response;
					
	      },
	      error: function () {
	          alert("error");
	      }
	  });
}


document.getElementById("searchButton").onclick = function(){

	var postId = $('#postId').val();


	$.ajax({
				url: API_ENDPOINT + '?postId='+postId,
				type: 'GET',
				success: function (response) {

					$('#posts tr').slice(1).remove();

	        jQuery.each(response, function(i,data) {

						var player = "<audio controls><source src='" + data['url'] + "' type='audio/mpeg'></audio>"

						if (typeof data['url'] === "undefined") {
	    				var player = ""
						}

						$("#posts").append("<tr> \
								<td>" + player + "</td> \
								</tr>");
	        });
				},
				error: function () {
						alert("error");
				}
		});
}

document.getElementById("postText").onkeyup = function(){
	var length = $(postText).val().length;
	document.getElementById("charCounter").textContent="Characters: " + length;
}

var r = document.getElementById('postText');
r.innerHTML = 'insert text here';
document.getElementById("recordButton").onclick = function(){
					if (!('webkitSpeechRecognition' in window)) {
						r.innerHTML = 'Unfortunately, your browser is not supported. Please use Google Chrome';
					} else {
							r.innerHTML = 'its recording...';
							var speechRecognizer = new webkitSpeechRecognition();{
							speechRecognizer.continuous = false;
							speechRecognizer.interimResults = false;
							speechRecognizer.lang = 'en-ZA';
							speechRecognizer.start();
							var interimTranscripts = 	'';
							var finalTranscripts 	=		'';
								speechRecognizer.onresult = function(event) {
								for (var i = event.resultIndex; i < event.results.length; i++) {
												if (event.results[i].isFinal) {
														finalTranscripts 		+= event.results[i][0].transcript;
												} else {
														interimTranscripts 	+= event.results[i][0].transcript;
													}
												r.innerHTML = finalTranscripts;
											}
								};
						}
					}
				}	