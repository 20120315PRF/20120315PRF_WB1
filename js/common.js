/**
* Write text on screen animated
*/
var COLOSSEUM_TEXT = "Be battle, my friend.";

var counter = 0;
function tipeText(text, idElement){
    var fieldValue = document.getElementById(idElement).innerHTML;
    
    if(counter < text.length){
        fieldValue = fieldValue + text[counter];
        counter++;
        document.getElementById(idElement).innerHTML = fieldValue;
    }


    else{
        clearInterval(idTimer);
    }
}
/** callback function to call repeteadly */
function writeColosseum(){
    tipeText(COLOSSEUM_TEXT, "written-text");
}

var idTimer = setInterval(writeColosseum, 200);

/** Reset the writable text of colosium */
function resetWritable (){
    if(idTimer !== undefined){
        clearInterval(idTimer);
    }
    counter = 0;
    document.getElementById("written-text").innerHTML = "";
    idTimer = setInterval(writeColosseum, 200);
}

/** Scroll effect */
$(document).on('scroll', function(){
    var scrollPositionY = window.scrollY;
    
    if(scrollPositionY > 100 && !$('nav').hasClass('white-background')){
        console.log('change element!');
        $('nav').addClass('white-background');
    }
    else if(scrollPositionY < 100 && $('nav').hasClass('white-background')){
        console.log('change element!');
        $('nav').removeClass('white-background');
    }
    
    if(scrollPositionY == 0){
        if (document.getElementById("written-text").innerHTML === COLOSSEUM_TEXT){
        resetWritable();
        }
    }
    
    /** Fade in event for technology div*/
    if(scrollPositionY > TECHNOLOGY_POSITION_Y){
        $('#techonologies-items').fadeIn();
    }
    
    
    
});


var TECHNOLOGY_POSITION_Y = $('header').height() + $('#information').height() - 200;
$('#techonologies-items').fadeOut();

/**
Select the tab option
*/

$(".tab-panel-option").click(function(){
    $(".tab-panel-option").removeClass('selected');
    $(this).addClass('selected');
    console.log($(this).attr('id'));
    //Show only the selected option
    $('.tab-panel-content').addClass('hidden');
    $('#' + $(this).attr('id') + '-content').removeClass('hidden');
});