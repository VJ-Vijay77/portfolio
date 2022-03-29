$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Developer", "Tech Enthusiast", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Tech Enthusiast", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const responseform = document.getElementById('responseform');
const fname= document.getElementById('fname');
const lname = document.getElementById('lname');
const phone = document.getElementById('phone');



responseform.addEventListener('submit', (e) => {
    checkInputs();
    if(isFormValid===true){
        responseform.submit();
    }else{
        e.preventDefault();
    }
     
     
});

function checkInputs(){
   const fnameValue = fname.value.trim();
   const lnameValue = lname.value.trim();
   const phoneValue = phone.value.trim();

   if(fnameValue === ''){
       setErrorFor(fname, 'Name cannot be blank');

   }else if(fname.value.trim().length <3 || fname.value.trim().length >15){

    setErrorFor(fname, 'Name should have atleast 3 characters and maximum 15');

   }else if(!fname.value.trim().match(/[A-Za-z]$/) ){

    setErrorFor(fname, 'Enter Valid name');
   }
   
   else{
    setSuccessFor(fname);
   }


   if(lnameValue === ''){
    setErrorFor(lname, 'Email cannot be blank');

}else if(!isEmail(lnameValue)){
    setErrorFor(lname, 'Email is not valid');
}
else{
 setSuccessFor(lname);
}

if(phoneValue === ''){
    setErrorFor(phone, 'Number cannot be blank');

}else if(!phone.value.trim().match(/^\d{10}$/)){
    setErrorFor(phone, 'Number is not valid');
}
else{
 setSuccessFor(phone);
}




}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
  
function isEmail(lname){

    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(lname);
    
}

function isFormValid(){
    const checkval = responseform.querySelectorAll('.namediv');
    let result = true;
    checkval.forEach((formControl)=>{
        if(formControl.classList.contains('error')){
            result = false;
        }
    });
    return false;
}