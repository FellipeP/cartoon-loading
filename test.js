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
});

// To stop
// loading.stop();
