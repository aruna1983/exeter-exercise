# exeter-exercise
- Client (Angular) app is created inside client folder
- Server (ASP.Net Web Api Core) app si created inside server folder

# Prerequisites
- Node and npm
- angular cli - 8.3.19
    If you don't have angular cli, you can install by running  `npm i -g @angular/cli`
- .Net Core 2.1 (Optional)


# Running Client

Run the below commands in sequence
- `cd client`
- `npm install`
- `ng serve`
    - Angular app should build successfully and serve at http://localhost:4200

# Testing angular application

Running `ng test` should run the unit test for all the specs

# Code Coverage

Code Coverage is reported at end of test, this is already configured and thersold for coverage set to 80%