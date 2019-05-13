fetch(" https://api.github.com/repos/rarmatei/js-exercises/pulls")
  .then(function(response) {
    return response.json();
  })
  .then(function(result) {
    result.forEach(function(key) {
      if (key.user.login === "sonmezali") {
        var pullRequestsList = document.querySelector("#pull-requests-list");
        var li = document.createElement("li");
        var a = document.createElement("a");
        pullRequestsList.appendChild(li);
        li.appendChild(a);
        a.innerText = key.user.login;
        var link = key.html_url;
        a.setAttribute("href", link);
      }
    });
  });

var searchInput = document.querySelector("#search-input");

function getUsersPullRequest(event) {
  var value = event.target.value;
  //console.log(value);

  fetch("https://api.github.com/repos/rarmatei/js-exercises/pulls")
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      // result = [{title: '', html_url: ''}, {title: '', html_url: ''}]
      // filter result -> [{title: '', html_url: ''}]
      // forEach -> render a list item
      result.forEach(function(item) {
        if (item.user.login.toLowerCase() === value.toLowerCase()) {
          console.log(value);
          console.log(item.title);
          console.log(item.html_url);
        }
      });
    });
}

searchInput.addEventListener("keyup", getUsersPullRequest);
