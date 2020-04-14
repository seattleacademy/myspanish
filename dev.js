//Developer code for creating input boxes
$("img").mousedown(onmousedown);
$("img").mouseup(onmouseup);
var iLeft = 0;
var pLeft = 1;
var pTop = 1;
var iTop = 0;
var counter = 0;

// function onmousedown(evt) {
//   let pWidth = (evt.offsetX/evt.target.width)-pLeft;
//   let pHeight = (evt.offsetY/evt.target.height)-pTop;
//   let l = `${(pLeft*100).toFixed(2)}%`   
//   let t = `${(pTop*100).toFixed(2)}%`   
//   let w = `${(pWidth*100).toFixed(2)}%`   
//   let h = `${(pHeight*100).toFixed(2)}%`   
//   let str = `<input style='position:absolute;left:${l};top:${t};width:${w};height:${h}' data-correct=''/>`;
//   pLeft = evt.offsetX/evt.target.width
//   pTop = evt.offsetY/evt.target.height
//   counter ++;
//   if(counter%2==0)
//   $('#area').val($('#area').val()+str+'\n');
// return false;
// }

function onmousedown(evt) {
    pLeft = evt.offsetX / evt.target.width
    pTop = evt.offsetY / evt.target.height
    return false;
}
$("body").on('change', '#makeme', makeinput);

function makeinput(evt) {
    //console.log($(this).val())
    //$("#makeme").data("greeting", "Hello World");
    //$('#makeme').data('correct',$(this).val());
    let theData = `data-correct="${$(this).val()}"`
    if (lastTime) theData += ` data-start='${lastTime.toFixed(2)}'`;

    if (lastDuration) theData += ` data-duration='${((aud.currentTime - lastTime)*1000).toFixed(0)}'`
    let str = $('#makeme').prop('outerHTML');
    str = str.replace('id="makeme"', theData);
    //console.log(str)
    $('#area').val($('#area').val() + str + '\n');
    $("#myAudio").focus();
    //return false;
}

function onmouseup(evt) {
    let pWidth = (evt.offsetX / evt.target.width) - pLeft;
    let pHeight = (evt.offsetY / evt.target.height) - pTop;
    let l = `${(pLeft*100).toFixed(2)}%`
    let t = `${(pTop*100).toFixed(2)}%`
    let w = `${(pWidth*100).toFixed(2)}%`
    let h = `${(pHeight*100).toFixed(2)}%`
    $('#makeme').css('left', l);
    $('#makeme').css('top', t);
    $('#makeme').css('width', w);
    $('#makeme').css('height', h);
    $("#makeme").focus();
    $('#makeme').val('');


}
var lastTime = 0;
var lastDuration = 0;
var aud = document.getElementById("myAudio");

aud.onpause = function() {
    lastDuration = ((aud.currentTime - lastTime) * 1000).toFixed(0);
    //let str = `data-start='${lastTime.toFixed(2)}' data-duration='${((aud.currentTime - lastTime)*1000).toFixed(0)}'`;
    // $('#area').val($('#area').val()+str+'\n');
};

aud.onplay = function() {
    lastTime = aud.currentTime;
};