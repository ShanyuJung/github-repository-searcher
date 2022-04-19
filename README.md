# Github Repository Searcher

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [react router dom](https://www.npmjs.com/package/react-router-dom).\
All CSS styles are managed by [styled-components](https://styled-components.com/).\
User can use this project to search user on github, then get repositories information of searched user.

## Available Function

In the project directory, you can do:

### `Search User`

At [Home page](https://shanyujung.github.io/github-repository-searcher/),you can enter username that want to search in the search bar, then
Click search button or press Enter to search user on Github.\
![search_demo](https://github.com/ShanyuJung/github-repository-searcher/blob/master/src/assets/github-repo-searcher_search_demo.gif)

### `User's Repositories`

`https://shanyujung.github.io/github-repository-searcher/#/users/{username}/repos`\
After click search button,project will lead user's repository page. \
At this page,you can get 10 repositories of searched user, once you scroll to bottom,you will get 10 more repositories, until all repositories is loaded.\
![infiniteScroll_demo](https://github.com/ShanyuJung/github-repository-searcher/blob/master/src/assets/github-repo-searcher_infiniteScroll_demo.gif)

### `Single Repository`

`https://shanyujung.github.io/github-repository-searcher/#/users/{username}/repos/{repoName}`\
You can click each repository ,then project will lead to selected repository page. \
At this page
,you can get more information of selected repository, include repo's full name, description, stargazers and a link to selected repository on github.\
![repo_demo](https://github.com/ShanyuJung/github-repository-searcher/blob/master/src/assets/github-repo-searcher_repo_demo.gif)

## `Updated List `

### `Updated Detail 2022-4-19`:

`styled-components`

1.Updated all css with styled-components, delete all css module.

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
