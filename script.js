console.clear();

$("input").change(onChange);

function onChange(evt) {
    let correct = $(this).data("correct");
    let response = $(this).val();
    if (correct.toLowerCase() == response.toLowerCase()) {
        $(this)
            .removeClass("incorrect")
            .addClass("correct");
    } else {
        $(this)
            .removeClass("correct")
            .addClass("incorrect");
    }
}
var aud = document.getElementById("myAudio");

aud.onplay = function() {
    var num = $("#audiospeed").val();
    if (num) aud.playbackRate = num;
};
//Play sound segment when enter is pressed
$("input").keypress(function(event) {
    if (event.key == "Enter") {
        if (event.shiftKey) {
            $("input").each(function() {
                correct = $(this).data('correct');
                $(this).val(correct);
            })
        }
        let start = $(this).data("start");
        if (!start) return;
        var x = document.getElementById("myAudio");
        x.currentTime = start;
        x.play();
        let duration = $(this).data("duration");
        if (!duration) return;
        let num = $("#audiospeed").val();
        if (num) aud.playbackRate = num
        else num = 1;
        setTimeout(() => x.pause(), duration/num);
    }
});