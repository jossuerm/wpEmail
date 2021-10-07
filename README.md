# Email-boilerplate-with-pug

Email boilerplate developed with pug that takes advantage of inheritance, variables, plugins, rules and modularization using WebPack5.

---

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#installation">Installation</a></li>
          <ul>
            <li><a href="#install-dependencies">Install dependencies</a></li>
            <li><a href="#start-server">Start Server</a></li>
          </ul>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
      <ul>
        <li><a href="#webpack-config">Webpack Config</a></li>
            <ul>
                <li><a href="#rules">Rules</a></li>
                <li><a href="#plugins">Plugins</a></li>
            </ul>
        <li><a href="#handle-email-copy">Handle Email COPY</a></li>
        <li><a href="#reuse-reset-attributes">Reuse Reset Attributes</a></li>
        <li><a href="#mixins">Mixins</a></li>
      </ul>
    <li><a href="#modularization">Modularization</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Getting Started

---

## Requirements

- NodeJS Installed
- Source Code Editor

## Installation

To prepare this project to run, you'll need to have **NodeJs** 14.17.6 or up installed in your computer. I suggest to use NVM in order to manage different versions easily without incompatibility dependencies.

### Install dependencies:
To install node_modules and dependencies:
```sh
$ npm install
```

### Start Server:
Before starting a server, create a .env file into **project directory** following as `example.env`.

```javascript
DEV_PORT = (Development_Port)
PROD_PORT= (Productio_Port)
DEV_ENV  =development
PROD_ENV =production

```

Development:

```sh
$ npm run dev
```

Production:

```sh
$ npm run build
```

## Usage

---

### Webpack Config
The project have two webpack configs (development and production) inside of it there are some configurations:

#### Rules
If you need more rules to add, you can access it on `./webpack/config/rules` and add necessary rules. For example:

```javascript
const rule = {
    pugRule: {
    test: /\.pug$/,
    use: ['pug-loader']
  }
}
```

### Plugins
If you need more rules to add, you can access it on `./webpack/config/plugins` and add necessary plugins. For example:

```javascript
const plugin = {
    cleanPlugin: new CleanWebpackPlugin()
}

```

### Handle Email COPY

There is a data.json, here you could handle the copy for your email
Example of the data.JSON

```javascript

{
  "header": {
    "title": "Title",
    "button": "contribute"
  },
  "content": {
    "title": "Tell Us What You Think in 5 Minutes or Less"
  },
  "social_icons": [
    {
      "img": "icon-facebook.png",
      "url": "#",
      "width": "35",
      "height": "29"
    },
    {
      "img": "icon-twitter.png",
      "url": "#",
      "width": "35",
      "height": "29"
    },
    {
      "img": "icon-instagram.png",
      "url": "#",
      "width": "35",
      "height": "29"
    }
  ],
  "isi": {
    "heading": {
      "content": [
        "Nullam elementum sit amet massa non cursus. Duis molestie arcu a risus dignissim posuere. Maecenas ac purus vitae eros viverra interdum sit amet sed augue. Ut lectus orci, mollis at velit at, mattis ultrices massa.",
        "Nullam elementum sit amet massa non cursus. Duis molestie arcu a risus dignissim posuere. Maecenas ac purus vitae eros viverra interdum sit amet sed augue. Ut lectus orci, mollis at velit at, mattis ultrices massa.",
        "Nullam elementum sit amet massa non cursus. Duis molestie arcu a risus dignissim posuere. Maecenas ac purus vitae eros viverra interdum sit amet sed augue:"
      ]
    },
    "subHeading": {
      "content": [
        "Suspendisse potenti. Maecenas euismod facilisis lacus, sit amet varius lorem dapibus sed. Etiam euismod arcu at urna vulputate, eget dictum tortor tempus. Donec quis ullamcorper neque.",
        "ivamus fermentum, turpis vitae vestibulum blandit, felis velit tempor augue, eget ultricies odio diam nec ipsum. Sed sagittis dolor in sem condimentum accumsan. Integer non lobortis eros. Sed porttitor fringilla lacinia."
      ]
    }
  },
  "comments": [
    "We created this template based on what emails developers needs, it is not an easy task but we bring you help",
    "It is a long trip that never ends if you have any suggestion let us know"
  ],
  "references": [
    "Aenean nec feugiat neque. Pellentesque sed enim ultricies, laoreet orci ac, efficitur turpis. Curabitur et felis non lorem vestibulum tristique sit amet sit amet diam. Ut id <i>libero</i> nisl.",
    "Aenean nec feugiat neque. Pellentesque sed enim ultricies, laoreet orci ac, efficitur turpis. Curabitur et felis non lorem vestibulum tristique sit amet sit amet diam. Ut id libero nisl. Proin finibus elit a <i>sagittis</i> fermentum.",
    "Aenean nec feugiat neque. Pellentesque sed enim ultricies, laoreet orci ac, efficitur turpis. Curabitur et felis non lorem vestibulum tristique sit amet sit amet diam. Ut id libero nisl. Proin finibus elit a sagittis fermentum. Aenean nec feugiat neque. Pellentesque sed enim ultricies, laoreet orci ac, efficitur turpis.",
    "Aenean nec feugiat neque. <i>Pellentesque</i> sed enim ultricies, laoreet orci ac, efficitur turpis.",
    "Donec finibus ex libero, sagittis eleifend leo malesuada accumsan. Vivamus sed risus ut enim tempor sodales in a elit. Vestibulum id eros id augue fringilla tempus sed at <i>metus</i>."
  ],
  "footer": {
    "year":"2021",
    "company": "OHG",
    "copyright": "All Rights Reserved.",
    "direction": "Test Street, abcde, AB 12345"
  }
}

```

Then in your email you could access them, for example the header title:

```
 !{header.title}
```

### Reuse Reset Attributes

Instead of hardcode reusable attributes in each table use Reset Attributes defined in includes/general.pug

**example with border="0" cellspacing="0" cellpadding="0"**
![cdac8d0d4877e407aa989709be2e514b.png](https://pictr.com/images/2017/03/27/cdac8d0d4877e407aa989709be2e514b.png)

Add your own attributes and inherence reset attributes.

table(**ownattributes**)&attributes(tableAtt)  
**Example**
![452bf9c68acd70bc5f00419a9b4baaaa.png](https://pictr.com/images/2017/03/27/452bf9c68acd70bc5f00419a9b4baaaa.png)

**Image Path**
In case of testing, you could use [Netifly](https://app.netlify.com) to deploy the images, and update the imagePath here.
![](http://i.imgur.com/rmVOewV.png)

In case you use googleAnalytics just set a variable

```sh
analytics = { url:"http://https://www.google-analytics.com/"}
```

---

### Mixins

You could use mixins that consider the compatibility of all email clients, mixins are located in includes/mixins.pug

**Spacers**

> +spacer({width:10, height:10})  
>  Width and Height are optional.

> +vSpacer(10)  
>  Send the height value directly.

> +hSpacer(10)  
>  Send the width value directly.

Examples with vSpacer:

    +vSpacer(heightvalue)

![](http://i.imgur.com/h9GQRMt.png)

**Headings**

You can use mixins to create headers and subheaders. It is located in `./src/boilerplate/components/pug/isi.pug`.

> +addHeading("Nullam",data.isi. heading.content[0])
> (Heading of ISI)

> +addSubHeading("Suspendisse", data.isi.subHeading.content[0])
> (SubHeading of ISI)

Examples with SubHeading:

    +addSubHeading(nameHeading, content)

**Backgrounds for td tag**
This mixin considers the way to render background images, it is based on [campaign monitor](https://backgrounds.cm/) advice.

> **params for background images(Use the ones you need)**
> img, bgcolor, width, height

    +tdbackground({img:'http://lorempixel.com/600/100/', width:600, height:100})&attributes(tdCenter)
        contentblockhere

![](http://i.imgur.com/1ha4ZAd.png)

**Buttons**
This mixin considers the way to render buttons, it is based on [campaign monitor](https://buttons.cm/) advice.

> **params for button(Use the ones you need)**
> img, color, width, height, bgcolor, bordercolor, link, radius, font-family, font-size, font-weight, text.

Example with button:

    +button({width:205, height:35, bgcolor:'#4285f4',bordercolor:'#4285f4', radius:4, text: 'Read More'})

![](http://i.imgur.com/g1N2h5t.png)

**Images**
This mixin takes advantage of alt text, and applies to alt text some styles, this way to handle image blocked is recommended by litmus team in plural-sight course.

    +addImg("http://lorempixel.com/600/200","Img main")(class="w480" width='600')

### Modularization

---

You could develop global modules inside includes/modules.
**Example in emails folder:**
![7d33d1fae0e87bc900ed684011d3dee8.png](https://pictr.com/images/2017/03/27/7d33d1fae0e87bc900ed684011d3dee8.png)

Or you can also create your components in every mail folder and use them to modularize your code

### Contributing

To contribute the project follow the next steps:

1. Fork the project.
2. Create feature branch (`git checkout -b feature/(nameOfFeature)`) or create a new branch in this format (`git checkout -b (functionality)`).
3. Commit your changes (`git commit -m '(nameOfCommit)'`).
4. Push to branch(`git push origin (branchName)`)
5. Open a PR.

### License

Distributed under the ISC License. See [ISC](https://opensource.org/licenses/ISC) for more information.
