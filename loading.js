var interval = null;
exports.start = config => {

    var
    defaults = {
      interval: 30, // miliseconds
      color: 'default',
      bold: false,
      underlined: false,
      loading: 'newave'
    },
    colors = {
      default:       "\x1b[39m",
      black:         "\x1b[30m",
      red:           "\x1b[31m",
      green:         "\x1b[32m",
      yellow:        "\x1b[33m",
      blue:          "\x1b[34m",
      magenta:       "\x1b[35m",
      cyan:          "\x1b[36m",
      light_gray:    "\x1b[37m",
      dark_ray:      "\x1b[90m",
      light_red:     "\x1b[91m",
      light_green:   "\x1b[92m",
      light_yellow:  "\x1b[93m",
      light_blue:    "\x1b[94m",
      light_magenta: "\x1b[95m",
      light_cyan:    "\x1b[96m",
      default_White: "\x1b[97m"
    };

    if(typeof config === 'object')
      Object
      .keys(config)
      .forEach(k => {
        defaults[k] = config[k];
      });

    var loading = load_frames(defaults.loading);
    if (!loading) console.error('loading frames not found');

    var pos = 0,
    isStart = true;

    interval = setInterval(() => {
      process.stdout.write('\033c');
      process.stdout.write(
        (defaults.bold ? '\x1b[1m' : '') +
        (defaults.underlined ? '\x1b[4m' : '') +
        colors[defaults.color] +
        loading[pos] +
        '\x1b[0m'
      );
      if(pos === (loading.length - 1)){
        pos = 0;
      }else{
        pos++;
      }
    }, defaults.interval);
};

exports.stop = () => {
  clearInterval(interval);
  process.stdout.write('\033c');
};

function load_frames(loading) {

  var frames = [];

  if(typeof loading === 'string')
    frames = require(`./loadings/${loading}.js`);
  else if(typeof loading === 'array')
    frames = loading;
  else
    return false

  var
  width = 0,
  height = 0,
  fra_frames = frames.map(f => {
    var fra = f.split('\n');
    if(height <= fra.length) {
      height = fra.length;
    }
    fra.forEach(fr => {
      if(width <= fr.length){
        width = fr.length;
      }
    });
    return fra;
  });

  var
  col = (process.stdout.columns / 2) - (width / 2),
  row = (process.stdout.rows / 2) - (height / 2),
  spaces = '',
  top = '';

  for(var i = 0; i < col; i++)
    spaces += ' ';

  for(var i = 0; i < row; i++)
    top += '\n';

  return fra_frames.map(f => {
    var str = `${top}\n`;
    f.forEach(l => {
      str += spaces + l + '\n';
    });
    str += top.replace('\n', '');
    return str;
  });
};
