// Write code here to communicate with Github

var inputSearch = document.querySelector("#input-search");
var searchBtn = document.querySelector(".btn-search");

var linksReposCount = document.querySelector("#repos-count");
var paragraphRepo = document.querySelector(".paragraph-repositories");
var reposList = document.querySelector("#repos-list");

fetch("https://api.github.com/users/sonmezali/repos")
  .then(function(response) {
    return response.json();
  })
  .then(function(result) {
    linksReposCount.innerText = result.length;
    for (var i = 0; i < result.length; i++) {
      var reposList = document.querySelector("#repos-list");
      var li = document.createElement("li");
      var a = document.createElement("a");
      reposList.appendChild(li);
      li.appendChild(a);
      a.innerText = result[i].name;
      var link = result[i].html_url;
      a.setAttribute("href", link);
    }
  });

function listRepositories(event) {
  if (inputSearch.value === "" || inputSearch.value == "sonmezali") {
    paragraphRepo.innerText = "My Repositories";
    fetch("https://api.github.com/users/sonmezali/repos")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        for (var i = 0; i < result.length; i++) {
          var reposList = document.querySelector("#repos-list");
          var li = document.createElement("li");
          var a = document.createElement("a");
          reposList.appendChild(li);
          li.appendChild(a);
          a.innerText = result[i].name;
          var link = result[i].html_url;
          a.setAttribute("href", link);
        }
      });
  } else {
    paragraphRepo.innerText = inputSearch.value + "'s Repositories";

    fetch("https://api.github.com/users/" + inputSearch.value + "/repos")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        for (var i = 0; i < result.length; i++) {
          var reposList = document.querySelector("#repos-list");
          var li = document.createElement("li");
          var a = document.createElement("a");
          reposList.appendChild(li);
          li.appendChild(a);
          a.innerText = result[i].name;
          var link = result[i].html_url;
          a.setAttribute("href", link);
        }
      });
  }
  reposList.innerText = "";
}

searchBtn.addEventListener("click", listRepositories);
