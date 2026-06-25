// Load Posts


fetch("/posts")

.then(res=>res.json())

.then(data=>{


let div=document.getElementById("posts");


if(div){


data.forEach(post=>{


div.innerHTML += `


<div class="post">


<h3>${post.title}</h3>


<p>${post.content}</p>


</div>


`;


});


}


});





// Register


function register(){


fetch("/register",{


method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({


name:name.value,

email:email.value,

password:password.value


})


})


.then(res=>res.json())

.then(data=>alert(data.message));


}






// Login


function login(){


fetch("/login",{


method:"POST",

headers:{


"Content-Type":"application/json"

},


body:JSON.stringify({


email:email.value,

password:password.value


})


})


.then(res=>res.json())

.then(data=>alert(data.message));


}







// Create Post


function createPost(){


fetch("/create-post",{


method:"POST",

headers:{


"Content-Type":"application/json"

},


body:JSON.stringify({


title:title.value,

content:content.value


})


})


.then(res=>res.json())

.then(data=>{


alert(data.message);


window.location="index.html";


});


}
