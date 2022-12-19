# App configuration

There are three applications:

1.- Scenarios Builder: This application was created to combine different variations in order to help in the conversations to select the scenarios to be tested.

![scenario_builder](https://user-images.githubusercontent.com/79478801/208508838-87f012ec-53a9-4a3e-ba9f-243a8b6985b8.png)


2.- The Dialog with combobox, is the prototype itself to be tested; the combobox will be configured according to the querystring generated in the *Scenarios builder application*.

![Screenshot 2022-12-19 at 13 54 34](https://user-images.githubusercontent.com/79478801/208508944-aff3e598-238f-442f-8c45-1e81c58b4f16.png)


3.- The prototype launcher: following the same approach I did with other tests, this is the scenario panel for users.

*PrintersComboBox/scenarios-launcher.html*

The styling can be adapted according to the needs.

You can add N scenarios, just copy and paste the following code inside the `<div id="js-content" class="content">` tag:

```
<section id="js-scenario" class="scenarioSection">
   <button
      id="js-buttonScenario1"
      class="buttonScenario"
      onclick="openPrototype(<querystring>)"
   >
        <Scenario name>
   </button>
</section>
```

Later, add the querystring with the scenario data to the `openPrototype` function, as a parameter.

There are some set id and classes in case more customization is needed.


## Scenarios Builder

### Mocked Data Json format
*PrintersComboBox/dbprintersDialog/data.json*

There are two objects, `rawData` object is for the scenario when there is a new user with no data pre-loaded.
And `preConfiguredData` object is for the scenario when there are suggested and default items.


### Adding more data

The mock data is in a json file *PrintersComboBox/dbprintersDialog/data.json.*

The data is consumed through an async function called `getData` that exists in *PrintersComboBox/dbprintersDialog/combobox.js*, line 3.

Note: I'm using a third party script for the combobox, but I added some custom code to the script.

This is the original source of the combobox https://www.zoonman.com/projects/combobox/

The HTML where the data of the combobox is added is *PrintersComboBox/dbprintersDialog/dbprinters.html*

The labels below the *input text* are configured in the file *PrintersComboBox/dbprintersDialog/combobox.js*

The adjustments I added are within blocks of code with comments that say *Custome code*.

For example for the label *"Enter 3 characters to search all..."*, the text is configured in line 264, inside the `this.edit.onkeyup` function.

![Screenshot 2022-12-19 at 14 18 18](https://user-images.githubusercontent.com/79478801/208513934-016e1d42-7057-4f23-9b72-8879cd517f62.png)



### Contextual menu
I'm using a third party script for the contextual menu

This is the original code:
https://www.linkedin.com/pulse/right-click-context-menu-javascript-piyali-das/

I customized the code a bit in this file *PrintersComboBox/dbprintersDialog/dbprintersScript.js*

The function of the contextual menu is called in line 88, in this file *PrintersComboBox/dbprintersDialog/combobox.js*

### Open Destination Dialog 
This is the folder where the HTML and screenshot of the panel lives: *PrintersComboBox/dbprintersDialog/outputDestionationDialog*

### How to add more functionalities to create scenarios?
1.- Create the HTML layout in *PrintersComboBox/index.html*<br/>
2.- All the scripts for the config panel and the creation of the scenarios are here *PrintersComboBox/scripts.js*. Add custome code in this file.<br/>
3.- Adjust the *parsing script* of the query string to generate the combobox with the configured functionalities. *PrintersComboBox/dbprintersDialog/combobox.js*<br/>

Once a scenario is created in the *Scenarios builder application*, a querystring will be generated with all the info about how the combobox should work.

The query string parsing and configuration is in the file *PrintersComboBox/dbprintersDialog/combobox.js*














