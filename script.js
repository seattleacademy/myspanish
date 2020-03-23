console.clear();

$("input").change(onChange);

function onChange(evt) {
  let correct = $(this).data("correct");
  let response = $(this).val();
  if (correct == response) {
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
  } else {
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
  }
}

//Play sound segment when enter is pressed
$("input").keypress(function(event) {
  if (event.key == "Enter") {
    let start = $(this).data("start");
    if (!start) return;
    var x = document.getElementById("myAudio");
    x.currentTime = start;
    x.play();
    let duration = $(this).data("duration");
    if (!duration) return;
    setTimeout(() => x.pause(), duration);
  }
});

//Developer code for creating input boxes
$("img").mousedown(onmousedown);
var iLeft = 0,
  iTop = 0;
function onmousedown(evt) {
  let str = `<input style='position:absolute;left:${iLeft}px;top:${iTop}px;width:${evt.pageX -
    iLeft}px;height:${evt.pageY - iTop}px' data-correct=''/>`;
  iLeft = evt.pageX;
  iTop = evt.pageY;
  console.table(str);
}