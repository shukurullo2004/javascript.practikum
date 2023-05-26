let choosebtn =  document.getElementById('choose'),
    receivebtn = document.getElementById('receive'),
    modal = document.getElementsByClassName('modal')[0],
    text = document.getElementsByTagName('h2')[0],
    closebtn = document.querySelector( '.close'),
    contactForm = document.getElementsByClassName('contactform_name')[0],
    message = document.getElementsByName('message')[0];

function hover(){
    text.textContent = 'Meliboyev Shukurullo Hover section'
}
text.addEventListener('mouseenter', hover)
text.addEventListener('mouseleave', function(){
    text.textContent = 'it can be hover'
})

receivebtn.addEventListener("click",function (){
    modal.style.display = 'block'
})
closebtn.addEventListener('click', function (){
    modal.style.display = 'none'
})
contactForm.addEventListener('input',function(){
    message.value = `My name is ${contactForm.value}, my dream :`
})