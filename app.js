var username = document.getElementById("username");
var password = document.getElementById("password");
var againpassword = document.getElementById("againpassword");
var contact = document.getElementById("contact");

var form = document.querySelector("form");
var errorMessage = document.getElementById("errorMessage");


form.addEventListener("submit" , (e) => {
   var errors = [];

   if( username=="" ||contact==""||password=="" ||againpassword=="" ){
      errors.push("All field are mandatory")

   }
   
if(username.value.trim() === ""){
   errors.push("Username required")
}
if(password.value.length < 4){
   errors.push("Password must be at least 4 charaters")

}

if(contact.value.length < 10){
   errors.push("The number should be at least 10 marks")

}

if(isNaN(contact)){
   errors.push("only number are allowed")

}

if(password!=againpassword){
   errors.push("please enter the same password")

}

   if(errors.length > 0){
      e.preventDefault();
      errorMessage.toggleAttribute('hidden');
      errorMessage.innerHTML = errors.join(', ');
   }
})