# gulp2022

With these files, you can quickly set up building your Gulp project.

```
gulp2022
└───gulp
│   └config
│   │   path.js
│   │   plugins.js
│   └tasks
│   │   copy.js
│   │   fonts.js
│   │   html.js
│   │   images.js
│   │   js.js
│   │   reset.js
│   │   scss.js
│   │   server.js
│   │   svgSprite.js
│   │   zip.js
│
└───src
│   └fonts
│   └html
│   └img
│   └js
│   └scss
│   └svgicons
│   └index.html
│
└───gulpfile.js
└───package.json
└───README.MD
```

### For a start:

1. Download all files to any directory
2. Enter the command in the terminal: npm i (node.js must be installed)
3. Run the command: gulp (running the default task, which will clear the build directory and run the scripts.js, styles and img-compress task, as well as watch - monitors changes in html, scss, js files and in the img directory )
4. Enjoy!