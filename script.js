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
        console.log(event)
        if (event.shiftKey) {
          console.log('shift')
            $("input").each(function() {

                correct = $(this).data('correct');
                console.log(correct)

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
        setTimeout(() => x.pause(), duration);
    }
});