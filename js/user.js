 const loaduser = () => {
   fetch('https://randomuser.me/api/?results=1')
   .then(res => res.json())
   .then(data => displayUser(data))
 }

 document.getElementById('btn').addEventListener('click',function(){
   loaduser();
   loadQuote();
 })
 

 const displayUser = data => {
    let user = data.results
    let userImg = document.getElementById('user-img');
    userImg.innerHTML = `
      <img class="img-fluid rounded-start" src="${user[0].picture.large}" style="width:100%; height: 100%">
    `
    let userName = document.getElementById('user-name');
    userName.innerText = `${user[0].name.title +' '+ user[0].name.first +' '+ user[0].name.last}`

    let userID = document.getElementById('user-id');
    userID.innerText = `${user[0].login.username}`

    let userGender = document.getElementById('user-gender');
    userGender.innerText = `${user[0].gender}`

    let userAge = document.getElementById('user-age');
    userAge.innerText = `${user[0].dob.age}`

    let userPhone = document.getElementById('user-phone');
    userPhone.innerText = `${user[0].cell}`

    let userMail = document.getElementById('user-mail');
    userMail.innerText = `${user[0].email}`

    let userAddress = document.getElementById('user-address');
    userAddress.innerHTML = `
      <span>${user[0].location.city}</span>,
      <span>${user[0].location.state}</span>, 
      <span id="user-country">${user[0].location.country}</span>
    `

   loadCountry(user[0].location.country);
   
    console.log(user[0].cell);
 }


 const loadCountry = country => {
   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
   .then(res => res.json())
   .then(data => displayCountry(data))
}


const displayCountry = countryName => {

   const flag = document.getElementById('flag');
   flag.setAttribute('src',`${countryName[0].flag}`)

   const countryNativeName = document.getElementById('country-name');
   countryNativeName.innerText = `${countryName[0].nativeName}`

   const countryCapital= document.getElementById('country-capital');
   countryCapital.innerText = `${countryName[0].capital}`
   console.log(countryName[0]);
}

const loadQuote = () => {
   fetch('https://api.kanye.rest/')
   .then(res => res.json())
   .then(data => displayQuote(data))
}



const displayQuote = quote => {
   document.getElementById('user-intro').innerText = `${quote.quote}`
}