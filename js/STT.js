
AWS.config.accessKeyId = 'AKIAIL4KBU4YTE7APEFQ';
AWS.config.secretAccessKey = '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';
AWS.config.region = 'us-east-1';

var polly = new AWS.Polly();
var parms = {
	OutputFormat: 	"mp3",
	TextType:		"text",
	Text:			"testing 1 2 3... hello, can you hear me? testing 1 2 3",
	VoiceId:		"Joanna"
};

polly.synthesizeSpeech(params, function(err, data) {
   if (err){
    console.log(err, err.stack);
   } 
   else {
      var uInt8Array 	= new Uint8Array(data.AudioStream);
      var arrayBuffer 	= uInt8Array.buffer;
      var blob 			= new Blob([arrayBuffer]);
      var audio 		= $('audio');
      var url 			= URL.createObjectURL(blob);
      audio[0].src 		= url;
      audio[0].play(); 
  }
 });
 