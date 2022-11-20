// Joke
var joke = {
  categories: [],
  created_at: "2020-01-05 13:42:27.496799",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "Lpj9bMdWSvCMPvZWGhN7Dg",
  updated_at: "2020-01-05 13:42:27.496799",
  url: "https://api.chucknorris.io/jokes/Lpj9bMdWSvCMPvZWGhN7Dg",
  value:
    "Chuck Norris graduated from preschool, high school, and college before he was even born.",
};

document.getElementById("joke").textContent = `${joke.value}`;
var dateGen = new Date(joke.created_at);
document.getElementById("generated").textContent= `This joke was generated on ${dateGen}`

var movie = {
  title: "Die Hard",
  cast: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"],
  reviewer: {
    revName: "Steve",
    stars: 4,
  },
};
// --- Using movie object
movie.genre = "Christmas";
movie["rating"] = "R";

var castString = "";
var castElements = document.querySelectorAll(".cast");

for (var i = 0; i < movie.cast.length; i++) {
  castElements[i].innerHTML = movie.cast[i];
}
document.getElementById(
  "review"
).textContent = `${movie.reviewer.revName} gives this ${movie.reviewer.stars} stars 
as his favorite ${movie.genre} movie. It is rated ${movie.rating} `;

// ----
var courses = {
  CSCI: {
    100: "Intro to Programming",
    105: "Computer Fluency",
    111: "Java Programming",
  },
  ITS: {
    210: "Network OS Desktop",
    218: "Network Security",
    224: "Intro to Linux",
  },
};
var courseElements = document.querySelectorAll(".course");
var i = 0;
for (k in courses.CSCI) {
  courseElements[i].textContent = `${k} -- ${courses.CSCI[k]}`;
  i++;
}

for (k in courses.ITS) {
  courseElements[i].textContent = `${k} -- ${courses.ITS[k]}`;
  i++;
  console.log(k, courses.ITS[k]);
}
