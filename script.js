
const APIURL = 'https://api.github.com/users/';

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchValue = document.getElementById("search").value;
    getUserProfile(searchValue);
    });

    function getUserProfile(username) {
        axios.get(APIURL + username).then(function (response) {
            const userProfile = response.data;
      

    const main = document.getElementById("main");
    main.innerHTML = `
        <div class="card">
            <img src="${userProfile.avatar_url}" alt="Avatar" class="avatar">
            <p class="name">${userProfile.name}</p>
            <p class="name">Bio: ${userProfile.bio}</p>
            <p class="user-info">Profile: ${userProfile.login}</p>
            <p class="user-info">Followers: ${userProfile.followers}</p>
            <p class="user-info">Followings: ${userProfile.following}</p>
        </div>`;
    });
}