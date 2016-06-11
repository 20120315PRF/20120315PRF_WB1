var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(document).ready(function(){
    var user = getUrlParameter("member");
    if(user === undefined){
        user = "unknown";
    }
    
    $('.profile').hide();
    
    if(user === 'unknown'){
        $('#unknown-profile').height($('body').height());
    }
    
    $('#' + user + '-profile').show();
    //Set the height to 100% of the body
    
    
})