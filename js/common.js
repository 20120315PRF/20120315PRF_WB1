/**
* Write text on screen animated
*/
var COLOSSEUM_TEXT = "THE FIRST BLOCKCHAIN GAMING PLATFORM";

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


//Animation: fadeIn combined with margin top
var fadeInWithTopMarginParams = {
    opacity: 1,
    marginTop: "50px",
}
// Animation: fadeIn for icons
var fadeInIconsParams = {
    opacity: 1,
}

/** Function to execute a function behind the elements of given selector. Execute each function with specified delay */
function executeEachWithDelay (selector, funcToExec, delayTime){
    var elementsList = $(selector);
        if(elementsList.length > 0){
            var i = 0;
            var repeatFunction = function(){
                var elem = $(elementsList[i]);
                funcToExec(elem);
                if( ++i < elementsList.length ){
                    setTimeout(repeatFunction, delayTime);
                }
            };
            repeatFunction();
    }
}

var lastScroll = 0, headerVisible = true;
/** Scroll effect */
$(document).on('scroll', function(){
    var scrollPositionY = window.scrollY;

    // Information blocks visibility. Only show this effect if media is not a device
    if(window.matchMedia('(min-width: 650px)').matches){
        if(!INFORMATION_IS_VISIBLE && scrollPositionY>100 && scrollPositionY>INFORMATION_POSITION_Y){
                executeEachWithDelay("#information .row .bet-icon",
                                    function(icon){
                    icon.show();
                    icon.animate(fadeInWithTopMarginParams, 1000);
                }, 800);
        }
    }
    
    // Features blocks visibility. Only show this effect if media is not a device
    if(window.matchMedia('(min-width: 650px)').matches){
        if(!FEATURE_ICONS_IS_VISIBLE && scrollPositionY>100 && scrollPositionY>FEATURE_ICONS_POSITION_Y){
                executeEachWithDelay(".feature-icon",
                                    function(icon){
                    icon.show();
                    icon.animate(fadeInIconsParams, 350);
                }, 800);
        }
    }
    
    // Disable the top header effect
    /*if(scrollPositionY > 100 && !$('nav').hasClass('white-background')){
        console.log('change element!');
        $('nav').addClass('white-background');
        $('nav').height('70');
        $('#logo img').attr('src','img/logo-mini.png');
    }
    else if(scrollPositionY < 100 && $('nav').hasClass('white-background')){
        console.log('change element!');
        $('nav').removeClass('white-background');
        $('nav').height('100');
        $('#logo img').attr('src','img/logo4.png');
    }*/
    
    if(scrollPositionY == 0){
        if (document.getElementById("written-text").innerHTML === COLOSSEUM_TEXT){
        resetWritable();
        }
    }
    
    /** Fade in event for technology div*/
    if(scrollPositionY > TECHNOLOGY_POSITION_Y){
        $('#techonologies-items').fadeIn();
    }
    
    /** Only show the header when on top os scrolling down */
    if(scrollPositionY < 200 || (scrollPositionY <= lastScroll) ){
        $('nav').css('opacity', '1');
        headerVisible = true;
    }
    else {
        $('nav').css('opacity', '0');
        headerVisible = false;
    }
    lastScroll = scrollPositionY;
    
});

//Information position for scroll +  offset
    if(window.matchMedia('(min-width: 750px)').matches){
    var INFORMATION_POSITION_Y = $("#information .row").position().top + $("#information .row").height() / 2;
    var INFORMATION_IS_VISIBLE = false;
    $("#information .row .bet-icon").css('opacity', '0');
    $("#information .row .bet-icon").hide();
    
    //FEATURE ICONS -- Hide feature icons  
    var FEATURE_ICONS_POSITION_Y = $("#features-content").position().top + $("#features-content").height() / 2;
    var FEATURE_ICONS_IS_VISIBLE = false;
    $(".feature-icon").css('opacity', '0');
}

// Techonologies section
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