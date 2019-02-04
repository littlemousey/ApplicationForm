# ApplicationForm
Application form connected to Google sheets and Dropbox. Very oldschool: no framework or bundlers are used. Just 1 HTML page  which contains javascript files and external CSS. The UI is in Material Design.

## Goal project
The example form is in Dutch but the overall idea is to send form data to Google Sheets and a pdf or document to a certain Dropbox folder. The code is built based on the tutorials of Jamie Wilson (https://github.com/jamiewilson/form-to-google-sheets) and Dropbox for Javascript docs (https://github.com/dropbox/dropbox-sdk-js).

## Connection to Google Sheets
To prepare the Google Sheet follow the first 5 steps of https://github.com/jamiewilson/form-to-google-sheets

In my example, the Google sheet contains 8 columns:

| timestamp | firstName | lastName  | telephone | email  | linkedIn | githubId  | message |
| ------------- | ------------- |------------- | ------------- |------------- | ------------- |------------- | ------------- |
| 1/31/2019 | John | Doe | +31612345354 | john@doe.com | johndoe | john_doe | Hi, I'm John |

After step 5 you can place your API for Google Sheets (the 'Current web app URL') in `config/apis.js` as `googleSheetsAPI`.

## Connection to Dropbox
- Go to https://www.dropbox.com/developers/apps/create (create a Dropbox account first if you don't have one already)
- Choose an API --> Dropbox API
- Choose type of access --> App folder
- Name your app --> Pick any name, will become the name of the folder in the Apps folder 
- Go to `My apps`: https://www.dropbox.com/developers/apps and find your app
- Generate a new access token and copy this token
- Replace `dropboxAPI`in `config/apis.js` with your generated access token

Load the index.html and you are ready to go!

You can view the live version of the application here: https://littlemousey.github.io/ApplicationForm/
