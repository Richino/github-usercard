import axios from "axios";
//declare variables
var result = axios.get("https://api.github.com/users/Richino");
var container = document.querySelector(".cards");
const followersArray = [
	"tetondan",
	"dustinmyers",
	"justsml ",
	"luishrd",
	"bigknell",
];
//data from my personal github
result.then((results) => {
	let cards = myProfile(results);
	container.appendChild(cards);
});
//data from other github
followersArray.forEach((e) => {
	let followers = axios.get(`https://api.github.com/users/${e}`);
	followers.then((results) => {
		let cards = myProfile(results);
		container.appendChild(cards);
	});
});

function myProfile(file) {
	//declare variables to create tags
	const card = document.createElement("div");
	const image = document.createElement("img");
	const cardInfo = document.createElement("div");
	const name = document.createElement("h3");
	const username = document.createElement("p");
	const location = document.createElement("p");
	const profile = document.createElement("p");
	const followers = document.createElement("p");
	const following = document.createElement("p");
	const bio = document.createElement("p");
	const link = document.createElement("a");
	//create class for said tags
	card.className = "card";
	name.classList = "name";
	cardInfo.className = "card-info";
	username.classList = "username";
	//add text to tags
	image.src = file.data.avatar_url;
	name.innerHTML = file.data.login;
	username.innerHTML = file.data.name;
	location.innerHTML = file.data.location;
	link.innerHTML = file.data.url;
	followers.innerHTML = file.data.followers;
	following.innerHTML = file.data.following;
	bio.innerHTML = file.data.bio;
	//display elements to dom
	card.appendChild(cardInfo);
	card.appendChild(image);
	cardInfo.appendChild(name);
	cardInfo.appendChild(username);
	cardInfo.appendChild(location);
	cardInfo.appendChild(profile);
	profile.appendChild(link);
	cardInfo.appendChild(followers);
	cardInfo.appendChild(following);
	cardInfo.appendChild(bio);
	//return parent element
	return card;
}

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml 
    luishrd
    bigknell
*/
