console.log("Im connected")

document.getElementById('sign-in-btn').addEventListener('click',function(){
    //get the number
    const userName=document.getElementById('username');
    const getUsername=userName.value;
    
    //get the pin
    const userPass=document.getElementById('input-pass');
    const getPass=userPass.value;
   
    //match the pin and number
    if(getUsername=='admin' && getPass=="admin123"){
         //--if match go to homepage
        window.location.replace("homepage.html");
    }
    else{
         //--if not reject
        alert("Input valid number and password");
    }
   
   
})