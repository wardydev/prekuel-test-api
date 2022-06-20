const postsContainer = document.querySelector(".posts");

const getPosts = async () => {
  //   const urlByID = "http://prekuel.com/wp-json/wp/v2/posts?include[]=470&include[]=4413";
  const url = "http://prekuel.com/wp-json/wp/v2/posts?per_page=100";
  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.id);

    showPosts(data);
  } catch (err) {
    console.log(err);
  }
};

const showPosts = (data) => {
  const posts = data.map((post) => {
    return `<li>
    <a href="${post.link}">${post.title.rendered}</a>
</li>`;
  });

  postsContainer.innerHTML = posts;
};

getPosts();
