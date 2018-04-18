var url = 'https://randomuser.me/api/';
var avatar = document.querySelector('#avatar');
var fullname = document.querySelector('#fullname');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var city = document.querySelector('#city');
var btn = document.querySelector('#btn');

btn.addEventListener("click", function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printError)
})

function handleErrors(request){
 if(!request.ok){
   throw Error(request.status);
 }
  return request;
}

function parseJSON(request){
  return request.json();
}

function updateProfile(request){
  avatar.src = request.results[0].picture.medium;
  fullname.innerText = request.results[0].name.first;
  username.innerText = request.results[0].login.username;
  email.innerText = request.results[0].email;
  city.innerText = request.results[0].location.city;
}

function printError(error){
  console.log(error);
}
