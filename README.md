# Github Repository Seacher

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [react router dom](https://www.npmjs.com/package/react-router-dom).\
User can use this project to seach user on github, then get repositories of user.\

## Available Function

In the project directory, you can do:

### `Search User`

At Home page,you can enter username that want to search in the search bar, then
Click search button or press Enter to search user on Github.

### `User's Repositories`

After click search button,project will lead to url : .../users/{username}/repos \
At this page you can get 10 repositories of searched user, once you scroll to bottom,you will get 10 more repositories, until all repositories is loaded.

### `Single Repository`

You can click each repository ,then project will lead to url : .../users/{username}/repos/{repo} \
At this page, you can get more information of selected repository, include repo's full name, description, stargazers and a link to selected repository on github.
