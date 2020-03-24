//Developer code for creating input boxes
$("img").mousedown(onmousedown);
var iLeft = 0;
var iTop = 0;
var counter = 0;

function onmousedown(evt) {
  let str = `<input style='position:absolute;left:${iLeft}px;top:${iTop}px;width:${evt.pageX -
    iLeft}px;height:${evt.pageY - iTop}px' data-correct=''/>`;
  iLeft = evt.pageX;
  iTop = evt.pageY;
  counter ++;
  if(counter%2==0)
  $('#area').val($('#area').val()+str+'\n');
}

var lastTime = 0;
var aud = document.getElementById("myAudio");

aud.onpause = function() {
	  let str = `data-start='${lastTime.toFixed(2)}' data-duration='${((aud.currentTime - lastTime)*1000).toFixed(0)}'`;
      $('#area').val($('#area').val()+str+'\n');
};

aud.onplay = function() {
	lastTime = aud.currentTime;	      
};
