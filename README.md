# App configuration

Objective
Goals

Approach, what is the scenario builder.

Diagram of process how it works and people involved, UX, Dev HR and user.


There are three applications:

1.- Scenarios Builder: This application was created to combine different variations in order to help in the conversations to select the scenarios to be tested.

![scenario_builder](https://user-images.githubusercontent.com/79478801/208508838-87f012ec-53a9-4a3e-ba9f-243a8b6985b8.png)


2.- The Dialog with combobox, is the prototype itself to be tested; the combobox will be configured according the querystring.

![Screenshot 2022-12-19 at 13 54 34](https://user-images.githubusercontent.com/79478801/208508944-aff3e598-238f-442f-8c45-1e81c58b4f16.png)


3.- The prototype launcher: following the same approach I did with other testings, this is the scenarios dashboard for the users.


## Scenarios Builder

### Mocked Data Json format
PrintersComboBox/dbprintersDialog/data.json

There are two objects, *rawData* object is for the scenario when there is a new user with no data pre-loaded. And *preConfiguredData* object is for the scenario when there are suggested and default items.


### Adding more data

The mock data is in a json file PrintersComboBox/dbprintersDialog/data.json.

The data is consumed through an async function called getData that exist in PrintersComboBox/dbprintersDialog/combobox.js, line 3

Note: I'm using a third party script for the combobox, but I added some custom code to the script.

This is the original source of the combobox https://www.zoonman.com/projects/combobox/

The HTMl where the data of the combobox is added is PrintersComboBox/dbprintersDialog/dbprinters.html

### Contextual menu
I'm using a third party script for the contextual menu

This is the original code:
https://www.linkedin.com/pulse/right-click-context-menu-javascript-piyali-das/

I customized the code a bit in this file  PrintersComboBox/dbprintersDialog/dbprintersScript.js

The function of the Contextual menu is called in line 88, in this file PrintersComboBox/dbprintersDialog/combobox.js
















