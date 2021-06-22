const contactForm = document.querySelector('.contact_form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let comments = document.getElementById('comments');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        comments: comments.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            comments.value = '';
        }
        else{
            alert('Something went wrong!!');
        }
    }

    xhr.send(JSON.stringify(formData));
})