document.addEventListener('DOMContentLoaded', function(event){

    const engagement = document.getElementById("serviceOne");
    const serviceBox = document.getElementsByClassName("serviceBox");
    const toggleMenu = document.getElementById("toggleMenu");
    const collMenu = document.getElementById("collMenu");
    
    console.log("loaded");

    for(i = 0; i < serviceBox.length; i++) {
        serviceBox[i].addEventListener('touchstart', function(){
            this.classname= '.hover';
            console.log('touchstart');
        });
    }

    toggleMenu.addEventListener('change', function(event){
        if(toggleMenu.checked) {
            collMenu.style.display = "block";
            console.log("checked");
        } else {
            collMenu.style.display = "none";
            console.log("unchecked");
        }
    });
        

});


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}

// var userFeed = new Instafeed({
//     get: 'user',
//     target: "instafeed-container",
//     resolution: 'low_resolution',
//     accessToken: 'IGQVJYdUlaUUxqU0lRNVFtQTZAlbGhXMUhWOHVxRnpaUWNVRm9OS3ViQThzbXM5c1Vic3gxcUZA5TUIxekdMZAkhWV3NScUpfaDk1c2Q0ZAVdOV0RFaFhxbm53VWV0ZA0x5VGZAjcHJIbmtKNC1VWnpKMzVSbgZDZD'
// });
// userFeed.run();

