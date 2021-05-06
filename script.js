document.addEventListener('DOMContentLoaded', function(event){

    const engagement = document.getElementById("serviceOne");
    const serviceBox = document.getElementsByClassName("serviceBox");
    const toggleMenu = document.getElementById("toggleMenu");
    const collMenu = document.getElementById("collMenu");
    
    console.log("loaded");

    // window.addEventListener('scroll', function(){
    //     var navi = document.querySelector('.header');

    //     if(this.window.scrollY > 0) {
    //         navi.className += ' scrolledHeader';
    //     } else {
    //         console.log("reached top");
    //         navi.classList.remove("scrolledHeader");
    //     }
    // });

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