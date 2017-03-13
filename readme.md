# Cartoon-loading

[![stars][npm-image]][npm-url]

```js

var loading = require('cartoon-loading');

// To start
loading.start({
  /*
    In miliseconds
  */
  interval: 30, // Default 30
  /*
    default, black, red, green, yellow, blue, magenta, cyan, light_gray, dark_ray, light_red, light_green, light_yellow, light_blue, light_magenta, light_cyan, default_White
  */
  color: 'default',  // Default default
  bold: true,        // Default false
  underlined: false, // Default false
  /*
  Defaults names:
    newave, line, ball, fish, yoyo, song, dance, arrow, wave-01, wave-02
  */
  loading: 'newave' // Default newave :)
  // or:
  loading: [
`
frame01
`,
`
frame02
`,
 ... ]
});

// To stop
loading.stop();

```

## Examples:

![loading wave_02](https://image.ibb.co/msPKRF/loading_wave_02.gif)
![loading wave_01](https://image.ibb.co/bxVtmF/loading_wave_01.gif)
![loading fish](https://image.ibb.co/f6xHDv/loading_fish.gif)
![loading newave](https://image.ibb.co/c2OPtv/loading_newave.gif)

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/github/stars/FellipeP/cartoon-loading.svg
[npm-url]: https://www.npmjs.com/package/cartoon-loading
