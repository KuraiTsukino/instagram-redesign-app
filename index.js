const username = document.getElementById("username");
const posts = document.getElementById("posts");
const photos = document.getElementById("photos");

const BASE_API = "https://graph.instagram.com/me";
const ACCESS_TOKEN = "IGQVJVTHVFUS03RkQ2MkwwcmFZAV2xtTTR3bFV1RDd4VW5oZAnBwLUZAWREY0a0c4Ny15aHJTbi1rNkVhQzRBSE1oR29YT1NkTU1xQjByZAkZAkbzRYdVJkQmpWUTNkcDNmekNLZADFoSFhWSjRoZAU5LZAXhWWjRlbjk0X25qUjE4";


async function getUserInfo() {
  const response = await fetch(
    `${BASE_API}?fields=username, media_count&access_token=${ACCESS_TOKEN}`
  );
  const userInfo = await response.json();
  console.log(userInfo);
  username.innerHTML = userInfo.username;
  posts.innerHTML = userInfo.media_count;
  return userInfo;
}

getUserInfo();

async function getUserMediaInfo() {
  const response = await fetch(
    `${BASE_API}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`
  );
  const userMediaInfo = await response.json();
  console.log(userMediaInfo);
  return userMediaInfo;
}

getUserMediaInfo().then((media) => {
  media.data.map((mediaInfo) => {
    const img = document.createElement("img");
    img.style.width = "100px";
    img.src = mediaInfo.media_url;
    photos.appendChild(img);
  });
});
