# Github Repository Searcher

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
User can use this project to search users on github, then get repositories information of searched user.

## Features

- [x] Infinite Scroll
- [x] react-router-dom
- [x] styled-components
- [x] Github REST API

### `Infinite Scroll`

Use `Intersection Observer Web API` to achieve infinite scroll and only load more repositories while scrolling to current bottom boundary.

### `react-router-dom`

Use `<HashRouter>` to achieve SPA and use `useNavigate` and `useParams` to request data of searched user and repositories.

### `styled-components`

Use styled-components to manage all CSS code in js files.

### `Github REST API`

Follow information of [Repositories](https://docs.github.com/en/rest/repos/repos) provided by Github REST API, Using `axios` to send request and render components by response.

## Available Function

In the project directory, you can do:

### `Search User`

At [Home page](https://shanyujung.github.io/github-repository-searcher/), you can enter username that want to search in the search bar, then
Click search button or press Enter to search user on Github.\
![search_demo](https://github.com/ShanyuJung/github-repository-searcher/blob/master/src/assets/github-repo-searcher_search_demo.gif)

### `User's Repositories`

`https://shanyujung.github.io/github-repository-searcher/#/users/{username}/repos`\
After click search button,project will lead user's repository page. \
At this page,you can get 10 repositories of searched user. Once scrolling to bottom, will load 10 more repositories, until all repositories is loaded.\
![infiniteScroll_demo](https://github.com/ShanyuJung/github-repository-searcher/blob/master/src/assets/github-repo-searcher_infiniteScroll_demo.gif)

### `Single Repository`

`https://shanyujung.github.io/github-repository-searcher/#/users/{username}/repos/{repoName}`\
You can click each repository ,then project will lead to selected repository page. \
At this page
,you can get more information of selected repository, include repo's full name, description, stargazers and a link to selected repository on github.\
![repo_demo](https://github.com/ShanyuJung/github-repository-searcher/blob/master/src/assets/github-repo-searcher_repo_demo.gif)

## `Updated List `

### `Updated Detail 2022-5-24`:

`Intersection Observer Web API`

1. Replace add eventListener to scroll event to get better performance.
2. Fix the problem that send multiple requests when holding scroll bar at bottom before previous response data render.

`Loading Screen`

1. Add `loadingSpinner` while request data and placeholder of user avatar to upgrade user experience User's Repositories page.

### `Updated Detail 2022-4-19`:

`styled-components`

1. Updated all css with styled-components, delete all css module.

### `Updated Detail 2022-4-14`:

`User's Repositories`

1. Update components and css files.
2. Searched user information include bio, location, email, blog and twitter will be showed if it is available.
3. Number of public repositories will be showed.
4. Main Language ,stargazers and last update date of each repository will be showed.

`Single Repository`

1. Update components and css files.
2. Selected repository information include description, license, stargazers, forks and main Language will be showed.
3. Remove github icon(link to repository on Github), now user can click repository full name to open a new tab that link to selected repository on Github.
