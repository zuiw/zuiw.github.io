let path = "https://zuiw.github.io/_post/";

let posts = [];

fetch(path)
  .then((response) => response.json())
  .then((data) => {
      
    posts = data;
    console.log(posts);
    posts.forEach((post) => {
      let title = post.title;
      let date = post.date;

      let html = `
        <div class="post">
          <h2>${title}</h2>
          <p>${date}</p>
          <p>${content}</p>
        </div>
      `;
      document.getElementById("posts").appendChild(html);
    })
  })