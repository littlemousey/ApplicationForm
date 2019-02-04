# ApplicationForm
Application form connected to Google sheets and Dropbox

The example form is in Dutch but the overall idea is to send form data to Google Sheets and a pdf or document to a certain Dropbox folder. The code is built based on the tutorials of Jamie Wilson (https://github.com/jamiewilson/form-to-google-sheets) and Dropbox for Javascript docs (https://github.com/dropbox/dropbox-sdk-js).

To prepare the Google Sheet follow the first 5 steps of https://github.com/jamiewilson/form-to-google-sheets
In my example, the Google sheet contains 8 columns:

| timestamp | firstName | lastName  | telephone | email  | linkedIn | githubId  | message |
| 1/31/2019 | John | Doe | +31612345354 | john@doe.com | johndoe | john_doe | Hi, I'm John |

You can place your API for Google Sheets (the 'Current web app URL') in `config/apis.js` as `googleSheetsAPI`.

The UI is in Material Design.

You can view the application here: https://littlemousey.github.io/ApplicationForm/
