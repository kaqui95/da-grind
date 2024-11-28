

















let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";
let today = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }

myDay = parseInt(myDay);//must change to integer for switch 

//myDay = 6;//test only remove this

switch(myDay){


    case 0:
        today = "Sunday";


        coffee = {
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of a caramel latte",
            color: "orange",
            day: "Sunday",
            desc: `I like duh caramel latte!`
        };


    break;

    case 1:
        today = "Monday";


        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of a cold brew",
            color: "brown",
            day: "Monday",
            desc: `I like me some Cold Brew!`
        };


    break;


    case 2:
        today = "Tuesday";


        coffee = {
            name: "Drip Coffee",
            pic: "images/drip.jpg",
            alt: "A pic of drip coffee",
            color: "yellow",
            day: "Tuesday",
            desc: `I need drip coffee!`
        };


    break;
   
    case 3:
        today = "Wednesday";


        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of a bubble tea",
            color: "pink",
            day: "Wednesday",
            desc: `I like me some bubble tea!`
        };


    break;

    case 4:
        today = "Thursday";


        coffee = {
            name: "Frappachino",
            pic: "images/frappaccino.jpg",
            alt: "A pic of a frappaccino",
            color: "purple",
            day: "Thursday",
            desc: `I like a Frappaccino!`
        };


    break;

    case 5:
        today = "Friday";


        coffee = {
            name: "Frappachino",
            pic: "images/mocha.jpg",
            alt: "A pic of a mocha drink",
            color: "blue",
            day: "Friday",
            desc: `I love mochas!`
        };


    break;

    case 6:
        today = "Saturday";


        coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of a pumpkin spice latte",
            color: "brown",
            day: "Saturday",
            desc: `I love Pumpkin Spice Lattes!`
        };


    break;


    default:
        today = "Something went wrong"


}




//alert(today);
console.log(coffee);


document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;


function coffeeTemplate(coffee){
    return `<p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
   <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;
}
