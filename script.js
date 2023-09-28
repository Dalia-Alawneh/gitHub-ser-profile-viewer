const userWrapperContent = document.querySelector('.user--wrapper .content')
const fetchAPI = async (api) => {
    const response = await fetch(api)
    return await response.json()
}

const generateUserData = async (username) => {
    const API = `https://api.github.com/users/${username}`
    const data = await fetchAPI(API);
    const userRepos = await fetchAPI(`${data.repos_url}?per_page=100`)
    displayAvatar(data.avatar_url)
    displayUpperInfo(data.name, data.created_at, data.login, data.bio)
    displayAccountInfo(userRepos.length, data.followers, data.following)
    displayUserInfo(data.location, data.company,data.twitter_username, data.blog)
}

const searchInput = document.querySelector('.input-wrapper input')
const debounce = (func, delay = 500) => {
    let currentTimeout

    return function (...args) {
        clearTimeout(currentTimeout)
        currentTimeout = setTimeout(() => {
            func(...args)
        }, delay)
    }
}


const searchInputDebounce = debounce((value) => generateUserData(value), 700)
searchInput.addEventListener('input', () => { searchInputDebounce(searchInput.value) })

const displayAvatar = (avatar) => {
    document.querySelector('.img img').setAttribute('src', avatar)
}
const setLoading = () => {
    document.querySelector('.user--wrapper').innerHTML = '<div class="mt-2">Loading...</div>'
}

const displayUpperInfo = (name, joinData, username, bio) => {
    userWrapperContent.innerHTML = `
    <div class="flex flex--between align-center">
    <h2 >${name}</h2>
    <span class="light-weight">Joind at ${formatDate(joinData)}</span>
    </div>
    <div class="mt-1 color--blue">@${username}</div>
    <p class="bio mt-1">${bio ?? 'This profile has no bio'}</p>
    `
}
const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}


const displayAccountInfo = (repos, followers, following)=>{
    userWrapperContent.innerHTML += `
    <div class="flex mt-2 bg__dark wrapper flex--between">
        <div>
            <h3 class="light-weight">Repos</h3>
            <span class="bold__big-number">${repos}</span>
        </div>
        <div>
            <h3 class="light-weight">Followers</h3>
            <span class="bold__big-number">${followers}</span>
        </div>
        <div>
            <h3 class="light-weight">Following</h3>
            <span class="bold__big-number">${following}</span>
        </div>
    </div>
    `
}

const displayUserInfo = (location, company, twitterUsername, blog)=>{
    userWrapperContent.innerHTML += `
    <div class="user-info mt-2">
    <div class="flex flex--between flex-wrap">
        <div class="item flex gap-1">
            <i class="fa-solid fa-location-dot"></i>
            <span>${location}</span>
        </div>
        <div class="item flex gap-1">
            <i class="fa-brands fa-twitter"></i>
            <span>${twitterUsername??'Not Available'}</span>
        </div>
        <div class="item flex gap-1">
            <i class="fa-solid fa-link"></i>
            <a href="${blog}">https://github.blog</a>
        </div>
        <div class="item flex gap-1">
            <i class="fa-solid fa-building"></i>
            <span>@${company??'github'}</span>
        </div>
    </div>
</div>
    `
}   