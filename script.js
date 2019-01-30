let phase1 = ["Moo", "Woof", 1];

let person = new Object();

person.name = "moo";
person.age = 18;
person.lastName = "woof";
person.superhero = true;


document.addEventListener("DOMContentLoaded", function(event) {

	setTimeout(function() { 
		document.querySelector("#btn").style.display = "block";
	}, 5000);

  });

 
document.querySelector("#btn").addEventListener("click", function() {
	phase1.push(person);
	phase2();
});

function phase2() {
	phase1.forEach(function(element, index) {
	  let body = document.querySelector("body");
	  if (index == phase1.length - 1) {
		body.style.backgroundColor = "#333";
	  }
	  if (body.style.backgroundColor == "rgb(51, 51, 51)") {
		getHolidays();
	  }
	});
  }
  
  function getHolidays() {
	fetch('https://holidayapi.com/v1/holidays?key=99cafd06-ed8d-43b4-896d-5218994882c7&country=US&year=2018')
	  .then(function(response) {
	  return response.json();
	})
	  .then(function(myJson) {
	  console.log("Georgies birthday: " + myJson["holidays"]["2018-02-19"][0]["date"]);
	});
  }