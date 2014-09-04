var currentlyTalking = false;
var colors = ['red', 'green', 'blue', 'yellow'];
var bodyParts = ['left foot', 'right foot', 'left hand', 'right hand'];
function takeTurn() {
  var color = colors[Math.floor((Math.random() * colors.length))];
  var bodyPart = bodyParts[Math.floor((Math.random() * bodyParts.length))];
  var phrase = bodyPart + ', ' + color;
  $('#turns').append('<div>' + phrase + '</div>');
  currentlyTalking = true;
  speechSynthesis.speak(new SpeechSynthesisUtterance(phrase));
}

var recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.continuous = true;
recognition.interimResults = true;
recognition.onstart = function() {
  $('.start').prop('disabled', true);
  $('.stop').prop('disabled', false);
  console.log('start', arguments);
}
recognition.onresult = function(e) {
  console.log('result', e);
  if (currentlyTalking) {
    // ignore the first result immediately following speech, as it was the computer
    currentlyTalking = false;
  } else if (e.results.length) {
    var result = e.results[e.resultIndex];
    if (result.isFinal) {
      console.log('Speech result: ' + result[0].transcript);
      if (/\bgo\b/i.test(result[0].transcript)) {
        takeTurn();
      }
    } else {
      console.log('result not final');
    }
  } else {
    console.log('no results');
  }
};
recognition.onerror = function(e) {
  console.log('error', e);
};
recognition.onend = function() {
  $('.start').prop('disabled', false);
  $('.stop').prop('disabled', true);
  console.log('done!');
  speechSynthesis.speak(new SpeechSynthesisUtterance("Are you done? I think you're done."));
};

$('.start').on('click', function() {
  recognition.start();
  console.log('starting!');
});
$('.stop').on('click', function() {
  recognition.stop();
  console.log('stopping!');
})
