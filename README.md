# React Login App
V.1.1

This is a simple login app. Your goal is to improve the app doing following tasks. (Clone this repository and place in on your github)

## Tasks
1. Add reactstrap library and rework the login form using bootstrap styles. Don't forget about RWD and proper styling. We like good design :)
2. Add React Router library, move Login form to /login route (and make it default route)
3. Replace fetch with axios library. Add /api directory and create a wrapper for axios requests. Set base API URL and Authorization header with token in the wrapper. (You can store baseAPI URL in environment variable)
6. Add validation for the login form (with error handling from the API)
7. Add empty /dashboard route and redirect user to the Dashboard after logging in
8. Store User token in cookies after logging in
9. Create public route for /login and private route for /dashboard (user should be redirected from /dashboard to /login if is not logged in)
10. When User enters private route, get User data from API (GET /user) and store it using React Context (Authorization header is needed for this endpoint)
11. Add Bootstrap Navbar to the Dashboard view 
12. Using React Context display User first name and last name in the Navbar
13. Add logging out functionality (clear session). Place it in the Navbar

## Additional Tasks
* Use Formik library for the login form along with Yup library for validation.
* Add unit and integration tests for logging in and logging out using built-in react-testing-library
* Separate login logic from login view using custom hook.

## Running the app
### `npm run mock`
Runs mock API for the app.
### `npm run start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
