# sense-navigation

> Sense Sheet Navigation + Actions visualization extension for Qlik Sense.

![](https://raw.githubusercontent.com/stefanwalther/sense-navigation/master/docs/images/sense-navigation.png)

***

## Table of Contents

<!-- toc -->

* [Purpose and Description](#purpose-and-description)
* [Screenshots](#screenshots)
  - [Button styles](#button-styles)
  - [Button icons](#button-icons)
* [Installation & Download](#installation---download)
* [Configuration](#configuration)
  - [Layout](#layout)
  - [Navigation Behavior](#navigation-behavior)
  - [Actions](#actions)
* [Compatibility](#compatibility)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Related projects](#related-projects)
* [Author](#author)
* [License](#license)
* [Change log](#change-log)

_(Table of contents generated by [verb])_

<!-- tocstop -->

***

## Purpose and Description

The Visualization Extension **_sense-navigation_** for Qlik Sense allows you to add a button to a Qlik Sense sheet to navigate in your app:

* Jump to the next sheet
* Jump to the previous sheet
* Jump to a specific sheet
* Jump to a story
* Open a website

The button can be easily styled nicely by selecting some of the predefined designs.

Furthermore **_sense-navigation_** offers the option to define **up to two basic actions** which will be executed before the navigation happens. The following actions are possible:

* Clear all selections
* Unlock all selections
* Clear selections of a field
* Select a value in a field
* Set a variable value
* Apply a bookmark
* Lock field
* Select and lock field

## Screenshots

### Button styles

There are several predefined styles available from which you can choose:

> [![](https://raw.githubusercontent.com/stefanwalther/sense-navigation/master/docs/images/sense_navigation_styles.png)](#screenshots)

### Button icons

Every button can also include an icon:

> [![](https://raw.githubusercontent.com/stefanwalther/sense-navigation/master/docs/images/sense_navigation_button_icons.png)](#button-styles)

## Installation & Download

1. Download the [latest version](https://github.com/stefanwalther/sense-navigation/raw/master/build/sense-navigation_latest.zip) or [any other version](https://github.com/stefanwalther/sense-navigation/tree/master/build) you want to install.
2. Then install on either _Qlik Sense Desktop_ or _Qlik Sense Server_:

* Qlik Sense Desktop
  - To install, unzip all files and copy the content to the folder folder `"C:\Users\%USERNAME%\Documents\Qlik\Sense\Extensions\sense-navigation"`
* Qlik Sense Server
  - See instructions [how to import an extension on Qlik Sense Server](http://help.qlik.com/sense/2.0/en-US/online/#../Subsystems/ManagementConsole/Content/import-extensions.htm)

## Configuration

Drag & drop the object onto a sheet (as you would do it with any other native object or visualization extension).
Then define how the **sense-navigation** should behave:

### Layout

> [![](https://raw.githubusercontent.com/stefanwalther/sense-navigation/master/docs/images/sense_navigation_props_layout.png)](#button-icons)

* **Label** - The buttons label.
* **Style** - Select one of the predefined styles.
* **Button Width** - Whether the button should spread of the entire grid column or just be as wide as necessary.
* **Icon** - Choose one of the icons (based on [Font Awesome](https://fortawesome.github.io/Font-Awesome/))

### Navigation Behavior

Define the behavior of the button. The following options are available:

> [![](https://raw.githubusercontent.com/stefanwalther/sense-navigation/master/docs/images/sense_navigation_behavior.png)](#installation---download)

* Go to the next sheet
* Go to the previous sheet
* Go to a specific sheet (if selected you'll see a list of sheets you can select from)
* Go to a story (if selected you'll see a list of stories you can select from)
* Open website (if selected, you'll have to enter the URL in the appearing text box)

### Actions

You can furthermore define up to two action which will be executed before the navigation behavior will be performed.

First enable this option:

> [![](https://raw.githubusercontent.com/stefanwalther/sense-navigation/master/docs/images/sense_navigation_actions_enable.png)](#configuration)

Then select from the list of predefined actions:

> [![](https://raw.githubusercontent.com/stefanwalther/sense-navigation/master/docs/images/sense_navigation_actions.png)](#layout)

Depending on the selected action you'll see additional settings you can define, e.g. define the name of a variable and its value:

> [![](https://raw.githubusercontent.com/stefanwalther/sense-navigation/master/docs/images/sense_navigation_actions_settings.png)](#navigation-behavior)

As soon as you have defined the first action, you will also be able to define a second action.

## Compatibility

**sense-navigation** is designed to work with Qlik Sense 2.1.1 or higher.
If you use the extension in an older version of Qlik Sense some functionality (like navigating to another sheet, etc.) will simply not work because the [Capability APIs](https://help.qlik.com/sense/2.1/en-US/developer/Subsystems/APIs/Content/mashup-api-reference.htm) used in this extension are not available in earlier versions.

## Roadmap

There are some features planned to be implemented in the near future, but the ""backlog is absolutely up to the feedback to this solution**:

* Allow to add **additional styles for the button** (very similar to [sense-themable-kpi-tile](https://github.com/stefanwalther/sense-themable-kpi-tile))
* **Additional actions**, e.g.
  - Reload the app
  - Opening another app and pass the current selections to the app (similar to "document chaining in QlikView")

Have a look at the features described [here](https://github.com/stefanwalther/sense-navigation/milestones).

Is there **anything else you'd like to see** in this visualization extension?

* Don't hesitate to add the feature and create a pull request!
* You don't have the time or skills to implement this specific feature? No problem, [drop a note here](https://github.com/stefanwalther/sense-navigation/issues).

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/stefanwalther/sense-navigation/issues).
The process for contributing is outlined below:

1. Create a fork of the project
2. Work on whatever bug or feature you wish
3. Create a pull request (PR)

I cannot guarantee that I will merge all PRs but I will evaluate them all.

## Related projects

Some related projects (Qlik Sense Visualization Extensions) I have recently created:

* [qliksense-extension-tutorial](https://www.npmjs.com/package/qliksense-extension-tutorial): Comprehensive tutorial to start developing Qlik Sense Extensions. | [homepage](https://github.com/stefanwalther/qliksense-extension-tutorial)
* [sense-calendar-heatmap](https://www.npmjs.com/package/sense-calendar-heatmap): Qlik Sense Visualization Extension with a diverging color scale. The values are displayed as colored… [more](https://www.npmjs.com/package/sense-calendar-heatmap) | [homepage](https://github.com/stefanwalther/qsCalendarHeatmap)
* [sense-extension-recipes](https://www.npmjs.com/package/sense-extension-recipes): Recipes on working with Qlik Sense Visualization Extensions. | [homepage](https://github.com/stefanwalther/sense-extension-recipes)
* [sense-funnel-chart](https://www.npmjs.com/package/sense-funnel-chart): Funnel Chart for Qlik Sense. | [homepage](https://github.com/stefanwalther/sense-funnel-chart)
* [sense-media-box](https://www.npmjs.com/package/sense-media-box): Include web pages, videos, images and much more into your Qlik Sense app. | [homepage](https://github.com/stefanwalther/sense-media-box)
* [sense-on-off-switch](https://www.npmjs.com/package/sense-on-off-switch): Set a variable in Qlik Sense to true/false using an on-off switch. | [homepage](https://github.com/stefanwalther/sense-on-off-switch)
* [sense-qr-code](https://www.npmjs.com/package/sense-qr-code): QR Code to be embedded into Qlik Sense. | [homepage](https://github.com/stefanwalther/qsQRCode)
* [sense-range-slider](https://www.npmjs.com/package/sense-range-slider): Slider object for Qlik Sense to manipulate one or two variables. | [homepage](https://github.com/QlikDev/qsRangeSlider)
* [sense-themable-kpi-tile](https://www.npmjs.com/package/sense-themable-kpi-tile): KPI Tile for Qlik Sense with the ability to use themes or to customize background… [more](https://www.npmjs.com/package/sense-themable-kpi-tile) | [homepage](https://github.com/stefanwalther/sense-themable-kpi-tile)

## Author

**Stefan Walther**

+ [qliksite.io](http://qliksite.io)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)
* [github.com/stefanwalther](http://github.com/stefanwalther)

## License

Released under the MIT license.

## Change log

See [CHANGELOG.yml](https://github.com/stefanwalther/sense-navigation/blob/master/CHANGELOG.yml)

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on March 09, 2016._