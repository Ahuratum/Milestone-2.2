// ensure document is ready before calling scripts
$(document).ready(()=>{
    console.log("Form ready for submission..");
    $('#requirements').hide();
    const name=document.getElementById('name-2');
    const email=document.getElementById('email-2');
    const message=document.getElementById('message-2');
    const form=document.getElementById('contact_form');
    form.addEventListener('submit', (e)=>{
        let requirements=[];
        if(name.value===''||name.value===null){
            requirements.push('Valid name required for submission');
        }
        if(!validateEmail(email)||email.value===null){
            requirements.push('Valid email required for submission');
        }
        if(requirements.length>0){
            form.submit(false);
            e.preventDefault();            
        }
    })
    // validate email
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return !regex.test(email)?true:false;
         
    }
})