$(function(){
    // Add smooth scrolling to navbar links
    $(".navbar .navbar-collapse #list-tab a").on('click', function() {       
        if (this.hash !== "") {
            hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - $('.navbar').height()-20
            }, 1000)
        }        
    })   
})
    
