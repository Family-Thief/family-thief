
Documentation for Inkwell Front-End:

----------------------------------------------------------------------------------------------

94b201029de611eaf459f921ceb7d1126ab2c53c
Generated an angular-node-express scaffold with yeoman.

With this commit, we added a pre-built Angular full stack scaffolding tool to our repo 
from Yeoman.io. The scaffolding tool incorporates Express, Angular and Node, client and server
folders will all of the necessary files pre-populated and customized with the name of our project, as well as all of the necessary dependancies (bower, grunt, package.JSON,
express, Bootstrap, mocha, svg, nodemon, Ajax, Karma, jQuery, jade, coffeeScript etc.)

-----------------------------------------------------------------------------------------------

433edbf4505fba4dbc3208cbf9f19a156ecbf6f3
Minor change

In this commit, we udpated the client-side index.html file to include links for the stylesheets
included with the scaffolding tool, script tags for all the of .js files included with the 
scaffolding tool, and script tags for all necessary bower components.

-----------------------------------------------------------------------------------------------

d73142e93e104fdc4dc73d92b99ee9c694ca7559
Added some boilerplate code on server to handle token-based
auth. Added the required npm modules to package.json.

In this commit, we added boiler-plate code (predominantly server-side), in order to handle
token-based authorization. We also added the required npm modules to package.json

-----------------------------------------------------------------------------------------------

e509adc517b10c8a77f48e6656bae9a6bf2fed38
Added necessary client-side code for token authentication

This commit is where we created an "account" folder, populated with all of the views and code
necessary to handle user signup, user login, user settings, and user authentication. Lastly, we added all of the necessary links and sript tags to index.html

------------------------------------------------------------------------------------------------

b80b29675459dae1e61728cf71a796bb9c8a29e3
Changed my error from boilerplate code

This commit is pretty straight-forward: we changed some of the boiler-plate code from the 
scaffolding tool that we used to the name of our project (familyThiefApp), so that our Angular
modules are properly named. We also added links and script tags to our index.html file.

-------------------------------------------------------------------------------------------------

30f2aa1b383b14426f5ae20cd42c8f740508d05e
styling changes to main page

In this commit, we changed the header, as well as the content in the first paragraph of our site's main page.

-------------------------------------------------------------------------------------------------

a3d394d936ed0ba037dc12f51cf63737713104b1
design changes made to main view

In this commit, we changed another one of the headers on our main page, and updated the
main page image.

-------------------------------------------------------------------------------------------------

efa733645c67bd9b30d2c1defb53ad7a3422c8e5
Updated the menu bar to show a link to sign up and login
page.

With this commit, we deleted unnecessary code from our signup.html file (re-purposed from another project), and we updated our navbar.html file so that links to signup and login
would appear in the navigation bar at the top of our homes screen.

-------------------------------------------------------------------------------------------------

febcad4caa6dc90c9b022b69010d3aac47704be1
Fixed the bug that didn't allow menu items to appear.
Changed top menu slightly. Added some stylings and an
image to the signup and login pages.

This commit is pretty self-explanatory: there was a bug that was preventing menu items from appearing in the nav bar, so we fixed it. We also added an image with this commit that appears on the signup and login pages, as well as some minor css styings.

-------------------------------------------------------------------------------------------------

4528600ef4332ca34612dd81c5a10d94f2c15c3a
added dashboard components

With this commit, we added a folder with all of the necessary files to create a dashboard view. The dashboard is the main view that a user sees once logging in/signing up and is the main control center to access most of the other views. We've also added links and script tags for the dashboard files to index.html, and added a dashboard link to the navbar.

-------------------------------------------------------------------------------------------------

4bc493abd52abbeab28c73ac66561a22707f9725
added homepage style

With this commit, we updated the html of our main page to adopt the Bootstrap framework/ grid system.

-------------------------------------------------------------------------------------------------

b49d5bf04d775bb8d4261f9538ee0af329700015
added css stylings to main page

CSS changes to our main page (centered text and changed background banner color to match buttons in the middle of the page)

-------------------------------------------------------------------------------------------------

fd4800488cda05acb5b546121526024c84f32c11
dashboard preliminary features complete

The primary intent with this commit was to flesh out our dashboard controller with the necessary Angular properties and methods, incorporate these methods into our dashboard.html, signup.html, and login.html, as well as apply the Bootstrap framework to our dashboard html file.

-------------------------------------------------------------------------------------------------

995b910978b4c38d532d16e5a578f18e3517c17f
Added submission state to the app

With this commit we added a new view to our app titled 'submission'. The submission view is the one that appears when a logged in user clicks the 'Submit new help request' button. In this commit, we also deleted some unnecessary code from our account.js file (re-purposed from another project).

-------------------------------------------------------------------------------------------------

8e846e5e7d21ed278575d3b27e845bb2f0fc2ab2
Added a new service called HelpRequest. Halfway through
the form logic for submitting a helpRequest.

This commit builds on the the previous commit above by populating the files in the 'submission' view folder with all of the necessary code to create and submit a help request. We also applied the Bootstrap framework to the submission .html file here, as well as added the neccesary authentication routes for submissions, and links/script tags to index.html

-------------------------------------------------------------------------------------------------

3edef455f916ea900698a4e262b029178afcad87
Completed basic form for the helpRequest submission.

With this commit we completed the helpReqest form (i.e. submission.html), adding components that were previously missing and deleting unnecessary ones.

-------------------------------------------------------------------------------------------------

f5dd139e727e58629ac1f5fdb34cea5d6a645900
Changed sign up and login to be username unique instead
of email

This commit is self-explanaroty: we changed our signup and login authentication to check/receive usernames instead of email addresses

-------------------------------------------------------------------------------------------------

3ba52707757a48261d1ae2f1481ecb4e00bec1aa
Client and server are now connected and authentication
works on a basic level. A new user is created on sign-up,
a token is passed to client, and the user is created
in the database.

Another self-explanatory commit: added code necessary to link client with server. Authentication working on a basic level.

-------------------------------------------------------------------------------------------------

ca803eba42f473a01dbc573397c0a7856ee6dcf9
Users can now use the form to submit a help request and
it is saved in our database.

Here we added code to our submission controller and submission.html to offically allow users submit help requests for their writing samples that get saved to our database.

-------------------------------------------------------------------------------------------------

4e58b39632d434fa7398cd8da3f3b685e92d8b6f
Implemented basic search for a help request based on
title and summary

Here we added a method to our dashboard controller to allow users to search outstanding help requests submitted by other users by keyword, at the bottom of the dashboard view.

-------------------------------------------------------------------------------------------------

7e4af85b16a4a5d9ad6f3f3acc3a383bf6e45fe9
Fixed path of the secret

Very self-explanatory commit: only 1 line of code changed in order to properly route the secret key required for user authentication.

-------------------------------------------------------------------------------------------------

fd5bb8f03d030f32e9c39407b86c1152d6ed2716
Changed a few things so that the dashboardd loads data
dynamically for each user. The client and server are
really starting to be connected now. Also, I turned the
authenticate flag on for certain pages, because now the
server is doing authentication correctly.

Here we deleted unnecessary code from the dashboard controller, added the correct Angular property name and directives to dashboard.html, and auth.service.js. We also added the necessary Angular properties and methods to the navbar controller, and changes 'authenticate' to true in dashboard.js and submission.js. 

-------------------------------------------------------------------------------------------------

00a08280e6a41316b74a1d9d744e1df9521e7776
created client-side help-request view folder with necessary files

Here we created a folder with the necessary files to create a 'help-request' view. If a user would like to contribute to a piece of writing submitted by another user, the first step is to either click the 'contribute' button on the dashboard, or use the search feature to find another user's help request by keyword. Either way, a list of outstanding help requests from other writers will appear. When the user clicks on one of these links, the resulting view is what is created by this folder (i.e. an individual help request from another writer that the user can contribute to.)

-------------------------------------------------------------------------------------------------

8b7d0e2c145ed17977b83ea50c499c83bc2505bb
changes to language/layout on help-request page

Minor styling changes to help request view (above), as well as adding link/scripts for help-request view to index.html

-------------------------------------------------------------------------------------------------

37e42f2809f525c764030fdd7c3abc80faeca068
created view for received contribution requests

Created a folder with files necessary to create a 'contribution received view' (i.e. the view a user sees when reviewing a contriubution request from another writer). If a user submits a help request, and another user contributes to that help request, then a mailbox icon will appear in the top-left of the user's dashboard, indicating that someone has responded to their help request with a contribution submission. When the user clicks on the mailbox icon, she/he is taken to an 'inbox' view, listing all contributions other have made to the user's writing/help-requests. When the user clicks on one of these contributions, the 'contributionRecd' view is what he/she sees.

-------------------------------------------------------------------------------------------------

1b8f2d84679c141678f87e71e731fdf38e1016ad
added contribution view links and scripts to index.html

Added links/scripts to index.html for 'contributionRecd' and 'help-request' views

-------------------------------------------------------------------------------------------------

28519ff232cda099a4cf0e451d7671615c3e5c7b
view updated

Deleted unnecessary code from help-request view

-------------------------------------------------------------------------------------------------

dbb5de2e84a78f87d1e87be6b7be9b517638bcb3
Building the HelpRequest service

Updated properties of dashboard controller and established helpRequest authentication route to
retrieve help requests from database based on search criteria

-------------------------------------------------------------------------------------------------

08d1473a9fe8c3a3c26e7044c5e7a14a2bc43981
Fixed strange merge conflict

Self-explanatory. Git merging issue

-------------------------------------------------------------------------------------------------

ef2c2fbd471fb04723b84118381bb1428930a25e
Help request view with appropriate data now loads when
a help request is clicked. Will have to work on displaying
the data properly in the helpRequest view, because the text
is now spilling out of its container when it loads.

Fix for another merge conflict.

-------------------------------------------------------------------------------------------------

a2d975cabce34739865778b078ae0d3c35d89037
Fixed the bug where the help-request.js and controller
were being loaded twice in index.html.

Two script tags deleted from index.html

-------------------------------------------------------------------------------------------------

5f3c7dd26f47e9d52a17bcf1742a992d5e07c238
Changed some structure in the view for a help request
and made it possible to submit a contribution from that
view.

Help-request controller needed to be modified to display appropriate information and post to database.

-------------------------------------------------------------------------------------------------

82bf193e17e74c8b46d99516bc3221cc41511752
Finished the controller logic and view for a contribution.
Can also upvote the contribution and comment on it. I had to
modify something very slight in the helper function
contributionUpvote in order for the vote to get through.

Self-explanatory

-------------------------------------------------------------------------------------------------

7a9f1aeec99ad267496032710c255675eb95f219
created view for page with 25 most reecent help requests

Here we created a folder with all of the files necessary for a 'allHelpRequest' view (i.e. the view that appears when a user clicks the 'contribute' button on the dashboard). This view lists all outstanding help requests from other writers.

-------------------------------------------------------------------------------------------------

00fd72222e04751a17d284cfbcee1d27d664a268
created all help request view and linked to dashboard

changes to copy/pasted code in 'allHelpRequest' folder make code applicable to 'allHelpRequest' view.

-------------------------------------------------------------------------------------------------

e4d5c0b7228b3f81fc7262a11a3106c2ca7518b9

Deleted unnecesary code from main.html; minor changes to dashboad.css, updated dashboard.html
to comply with Bootstrap framework

-------------------------------------------------------------------------------------------------

40ddf6a2cf89f24321ef32858c88fcd1073bb807
cleaned up submission view

Stylistic changes to dashboard and submission views

-------------------------------------------------------------------------------------------------

796b49b9494a809b6a5dea1d0b3ef28ccd5500c7
updated allHelpRequest view

Stylistic changes to allHelpRequest view 

-------------------------------------------------------------------------------------------------

e7c35fd80e8357a2639f5453d43925fc5d24913c
linked buttons on main page; other minor updates to views

Stylistic changes to 'contributionRecd' and 'dashboard' views; linked buttons on main page to appropriate views.

-------------------------------------------------------------------------------------------------

1c54c7ef5e0f34a0b3e4f0c0b32d3175012a9863
Added some voting functionality on the client, but now
the votes are not being retrieved correctly from the server
after votes are made. Will talk about this in our meeting.

Self-explanatory

-------------------------------------------------------------------------------------------------

b65677f76eef8e63d7d00d52a9fc98dc7b9983a5
Added isOwner var to contribution controller

Self-Explanatory

-------------------------------------------------------------------------------------------------

7e3ccf026fe2a2d7b677081af07767a055462dec
Added ng-show to the button

Ng-hide added to button in contribution.html

-------------------------------------------------------------------------------------------------

cd0496f051ffc96a45c7d27399407c9be7acfb92
Fixed the client issues when searching the database on the
dashboard

Self-explanatory

-------------------------------------------------------------------------------------------------

d7f5355087da02add8bcbe6450c87c3859e94416
Fixed voting problems on client side. The body of the
voting requests was empty before. Now it's sending the right
id and the voting works.

Self-explanatory

-------------------------------------------------------------------------------------------------

6dad8e259a40dc9f823ed7da3aaddee54373832a
Made a small change to make voting for a contribution
work in the client

Self-explanatory

-------------------------------------------------------------------------------------------------

2e08377419a0d79a9290cb16582c40604c0b5004
created inbox view

This is the view that appears when a user clicks on the mail icon at the top left of the dashboard. It represents an inbox of all contributuions other writers have submitted for the user's help requests.

-------------------------------------------------------------------------------------------------

a08e5b375878cce673b053c6ff4c30ee4cc6c5b3
updates to inbox view, incl. adding scripts/link for view to index.html

Self-explanatory

-------------------------------------------------------------------------------------------------

27f20e6d231edc9ccf44dd37ae48743df192dd20
added search functionality to allHelpRequest view

Self-explanatory. Incorporated Bootstrap framework into allHelpRequest.html

-------------------------------------------------------------------------------------------------

93738832567b9b1ca74eef07358daf260234e020
minor code change trying to get search to work in allHelpRequest view

One line of code changed.

-------------------------------------------------------------------------------------------------

31406a99d1e823ac72d1b32dbf0cd9ecf0b626db
added functionality to inbox view to differentiate between seen and unseen messages

Self-explanatory

-------------------------------------------------------------------------------------------------

478c3e9a6ac4c5cf3bc505957bda54ab0e31517b
Made the dashboard update when a new project is submitted

Self-explanatory

-------------------------------------------------------------------------------------------------

9f7c1b6b33a02d6146da95c999c43ac40c23ad24
Made a new contribution appear both in the help request
view and in the user's dashboard view when a help request
is submitted. Realized that the dashboard needs a couple more
pieces of data in each object of the contributions array
to display meaningful data. We'll talk about that minor change
tomorrow

Self-explanatory

-------------------------------------------------------------------------------------------------

2cdd1f3c3c930f41de18ac2b2642c3893f949c6a
Brought back Craig's work that I accidently erased

Self-explanatory

-------------------------------------------------------------------------------------------------

ccd91e80563544ad580d6e162b8aca8c2574d6af
Made the 25 most recently submitted help requests display
the data correctly. Tomorrow will work on prettifying it.

Self-explanatory

-------------------------------------------------------------------------------------------------

afbd6acc67c5c547449fe88c07b14ec18486207c
minor change

commented our search feature in allHelpRequest; attempted bug fix

-------------------------------------------------------------------------------------------------

9d9cddc3e8f515e3cc39d03d5ad4916d29cdf069
switched api route in inbox.controller.js to api/mailbox

Self-explanatory

-------------------------------------------------------------------------------------------------

a89f0ebda6c1fbf022239bfdaad8afc8cbdc6e89
Changed the dashboard layout to have a more intuitive layout.
Now it's more clear what to do when visiting it. Also, I made
the notifications for help requests display only if the number
of unseen is greater than zero.

Self-explanatory

-------------------------------------------------------------------------------------------------

fbd489dbaec12a248db8b4846bcdbf8328223e80
Made the looking for contributions view look better. A
user can optionally now view the 25 most recent help requests,
or do a search of the database.

Self-explanatory

-------------------------------------------------------------------------------------------------

ce37a528d28c24f28055e97c83aa3daf27a1a3c3
Removed the search bar in the dashboard because now it works
in the same way in the "Looking for contribution" view.

Self-explanatory

-------------------------------------------------------------------------------------------------

98907b79b3e61b971bd7e10833b6377addb12441
Just made the mailbox display all the time. Conditional
display was buggy.

Self-explanatory

-------------------------------------------------------------------------------------------------

904b598cd8d02258b4bc5f3d8e419aa593cd0aae
Implemented a simple mailbox view where unseen contribution
are bordered in red. They no longer become bordered by red
for the first time they are clicked, and the number of unseen
in the user's dashboard does change.

Self-explanatory

-------------------------------------------------------------------------------------------------

8c53d151b2d9122aee5efddd34e419443633cb93
Made submission of both a help request and contribution
show a success message if successful. Made the view of
a help request differ depending on whether logged in user
is owner of the help request

Self-explanatory

-------------------------------------------------------------------------------------------------

2fb9aeaa8f2cbf4c883be94b270c595bd0fb5476
Added a litte style to contribution view and made sure
text of contribution displays. But noticed that comments are
not persisting in the database.

Self-explanatory


-------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------

Documentation for Inkwell Back-End:

2318ef7ab3d924876381e6be5d0ce1da40a9c9f7
server merge

We were initially using a back-end template but found it very difficult to navigate around, so we decided to scrap the back-end template and start from scratch. This commit shows the beginnings of our server. We chose to use token authentication through jsonwebtoken and express-jwt as the middleware. In order to have access the protected routes, once the user has authenticated, the expressJwt middleware will use our secret token to pass the user a unique token to prove their identity. After authentication, the client will request for the dashboard of that particular user, and therefore pass back that token to the server, which will be located in the request header. In order to decode this token into the respective user details, we use the jwt.decode function.

Our models start off very basic with just the User table and Project table. When the client communicates to the server, we have helper functions that register the user, authenticate the user, or find all the user’s dashboard data.

-------------------------------------------------------------------------------------------------

69dd4717a8a10842e30c4c1df96218dbbd335952 
changes to directory

Pretty straightforward commit - as we were merging the server files with the client files, we changed the directory to refer to the right files.

-------------------------------------------------------------------------------------------------

d5eb75d3ff216dfef9b375224d040405c7347dc4
adding posting HR

Here we elaborate on our Project model with more fields that we need. We also finish off the path for submitting a help request (for their writing) and use the helper function helpRequest to create the project in our database.

-------------------------------------------------------------------------------------------------

228ba68e0707ec3bc0c01011a81556602f8dbe9e
progress with models and allowing submission

Here we organize the code out better to put the User and the Projects model in two separate files. We also elaborate on our helper function to identify the user’s dashboard information using findAllInfo.

-------------------------------------------------------------------------------------------------

83ddf1d30aca86cb2a29934e557e75fb3a0fa440
Contribution Model

We create the contribution model (this is for when someone contributes to a piece of writing). The relationship between a user and a contribution is one to many. This is defined as a contributor in our model (we will realize later that this code doesn’t actually create associations, just references, which is not what we want). A project is also related to a contribution via a one to many relationship. This is defined project in our model.

-------------------------------------------------------------------------------------------------

4f49841222eb78e4b6223cd97907020cad57b481
project upvotes model

We create the project upvotes model. Project upvotes have a many to one relationship between users, and also a many to one relationship between projects To understand how our tables look, it may be helpful to refer to our tables diagram.

-------------------------------------------------------------------------------------------------

a3ebf87423fd2460c4d3ef69ae570a0cccb8fe74
project comments table

We create the project comments model. It has a many to one relationship between the user and also a many to one relationship between the project.

-------------------------------------------------------------------------------------------------

18ed3a705068edaf2a240bfec2f3215b80fc7a66
contribution upvotes table done

We create the contribution upvotes model. It has a many to one relationship between the user and also a many to one relationship between the contribution.

-------------------------------------------------------------------------------------------------

56f18e62c421a71d783c5cdb4db2a4e3caf836d0
contribution comments table done

We create the contribution comments model. It has a many to one relationship between the user and also a many to one relationship between the contribution.

-------------------------------------------------------------------------------------------------

091aaaf7378013072ff50caa95080346dd2b1df4
counting number of unseenHelps

We create the helper function and paths for find all contributions that the user has made, and also the unseen help requests that a user has.

-------------------------------------------------------------------------------------------------

e3527f64bd947e01f22b3b7c1e407e7e24fee0fe
Finished the dashboard profile

The previous dashboard was not sending the client an object that they were expecting. This could probably be refactored using table joins. The comments in the code describe what each function’s purpose is.

-------------------------------------------------------------------------------------------------

f5bfcf0ce0e414c2fdc4387f6d8227a7dabff2b2
fixes to creating a user and also project upvoting
Added the project upvote helper function that upvotes a project

-------------------------------------------------------------------------------------------------

829e8f3fac2de86a99b76dd701fe43e69e8680dc
route for viewing all project details
When a user clicks on a project, we want to show them the details associated with that project as well as its corresponding contributions, votes, etc.. Here we complete the viewProject helper function and route for that purpose. Notice that the project id will be within parameters of the search url. Therefore, to obtain the project id, we must look at the params property of the request.

-------------------------------------------------------------------------------------------------

6de093d5d6c7f3a783106d2d7d5a2b10d799e6df
contribution post done

We add the ability for a user to create a contribution to a project, as well as the route for it.

-------------------------------------------------------------------------------------------------

e749fdfe78e7096d2fb11011d9e5bde3c51bd148
contribution comment path done

We add the ability for a user to create a contribution comment to a contribution, as well as the route for it.

-------------------------------------------------------------------------------------------------

13ed751d455657b49066132f34f4ea9cb7fce6c6
votes and contribution view complete

When the user clicks on a contribution, similar to how they click on a project, we want to show them the details of that contribution, the user, the comments, etc. Here we create the helper function and path for it.

-------------------------------------------------------------------------------------------------

86df514025eda8077df5bb98f73554a0aaa68bbb
Many changes because of associations and table joins

While trying to implement a joined table query to send to the client the expected details of the contribution array, we realized that the error message was that the tables were not associated with each other. The code in the models only references the other tables, without making associations. Therefore, we added an associations document to show the relationships that each model had with each other through which key. The code starting on line 72 searches for the contributions made by the user, but includes the username as a part of the table join. We therefore have access to the username of that particular contribution which is expected on the client side.

-------------------------------------------------------------------------------------------------

bdb10c88cd204885bcab997d4cb1a172dd46056b
searching database
0d13d506a27d8e3f787b4ab8f918681f6a599327
fixed query for database

Here we create the helper function to query the database where a string is contained in the title or summary of the project for when users want to look for a project to contribute to. The syntax was initially not doing what we had expected it to, which was to search in the title and summary for the string being passed through. The string is passed through in the URL query, so will need to find that search string in the query property of the request.

-------------------------------------------------------------------------------------------------

be47a0abd21aba6de5676addc48aedf6d7483913
fixing viewprojectcontributiondetails

The properties on the contributions array as part of the projectDetails was changed to meet the client’s expectations.

-------------------------------------------------------------------------------------------------

46f5ccb8b312ac3361fcba2e21d68e0038854cc7
all changes ok

Added a route so that we could get all the help requests in the database and return this to the client in the requested properties.

Also made some small changes to properties in other routes to meet client expectations.

-------------------------------------------------------------------------------------------------

b6b78d2ec3d120b58d9b0159171f2da83d652078
some client side changes for craig and completed new route for mailbox

Incorporated some changes on the client side to display the Received Contributions page to test back-end functionality.

Added a route to show which contributions made to the user’s projects have already been viewed.

In the dashboard view, unseenhelp counts were counting all helps that were already seen, whereas they should be counting those that were unseen. This fix was done by changing the unseenHelp property to true.
