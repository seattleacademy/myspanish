console.clear();
        let word = {
            spword : "palabra",
            left : "25%" ,
            top: "10%" ,
            image: "57.png"

        }
        console.log(word);

$("input").change(onChange);



function onChange(evt) {
    let correct = $(this).data("correct");
    if (!correct) {
        $(this)
            .removeClass("incorrect")
            .removeClass("correct");
        return;
    }
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
                // console.log(correct)
                $(this).val(correct);
            })
            return;
        }

        if (event.ctrlKey) {
            const correct = $(this).data('correct');
            let url = `https://www.spanishdict.com/conjugate/${correct}`;
            // console.log(url)
            window.open(url, '_blank');
            return;
        }
        var myObj = { name: "John", age: 31, city: "New York" };
        let start = $(this).data("start");
        if (!start) return;
        let num = $("#audiospeed").val();
        if (num) aud.playbackRate = num
        else num = 1;
        var x = document.getElementById("myAudio");
        x.currentTime = start;
        x.play();
        let duration = $(this).data("duration");
        if (!duration) return;

        setTimeout(() => x.pause(), duration / num);
    }
});