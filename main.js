function populatePostList() {
  let postList = document.getElementById('posts')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json();
    })
    .then(function (posts){
      for (post of posts) {
        postList.innerHTML += `<li onclick="displayText(${post.id})">${post.title}</li><br>`
      }
    })
};

function displayText(i) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(post){
      document.getElementById('text').innerHTML = `<p>${post.body}</p>`;
    })
    .then(() => {
      displayComments(i);
    })
};

function displayComments(i) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${i}/comments`)
  .then(function(response) {
    return response.json();
  })
  .then(function(comments){
    allComments = []
    comments.forEach(individualComment => {
      allComments.push('<br><br> ' + individualComment.name + ': ' + individualComment.body + '<br>' + individualComment.email)
    });
    document.getElementById('commentsDisplay').innerHTML = `<p>${allComments}</p>`;
  })
}

window.onload = populatePostList();