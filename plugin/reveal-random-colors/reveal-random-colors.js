export const colors = [
  ['#FFDFDF', '#00449E'],
  ['#000000', '#FFFF00'],
  ['#FFFF00', '#5E2CA5'],
  ['#111111', '#CCCCCC'],
  ['#111111', '#FF725C'],
  ['#FFFFFF', '#00449E'],
  ['#FF4136', '#000000'],
  ['#5E2CA5', '#E8FDF5'],
  ['#5E2CA5', '#FFDFDF'],
  ['#9EEBCF', '#5E2CA5'],
  ['#00449E', '#9EEBCF'],
  ['#00449E', '#F6FFFE'],
  ['#76C4E2', '#001B44'],
  ['#CDECFF', '#5E2CA5'],
  ['#CDECFF', '#00449E'],
  ['#F6FFFE', '#5E2CA5'],
  ['#E8FDF5', '#00449E'],
  ['#FFFCEB', '#555555'],
  ['#FFDFDF', '#5E2CA5'],
];

export const fonts = [
  "American Typewriter",
  "Andalé Mono",
  "Apple Chancery",
  ".AquaKana",
  "Arial",
  "Arial Hebrew",
  "Ayuthaya",
  "Baghdad",
  "Baskerville",
  "Beijing",
  "BiauKai",
  "Big Caslon",
  "Brush Script",
  "Chalkboard",
  "Chalkduster",
  "Charcoal",
  "Charcoal CY",
  "Chicago",
  "Cochin",
  "Comic Sans",
  "Cooper",
  "Copperplate",
  "Corsiva Hebrew",
  "Courier",
  "Courier New",
  "DecoType Naskh",
  "Devanagari",
  "Didot",
  "Euphemia UCAS",
  "Fang Song",
  "Futura",
  "Gadget",
  "Geeza Pro",
  "Geezah",
  "Geneva",
  "Geneva CY",
  "Georgia",
  "Gill Sans",
  "Gujarati",
  "Gung Seoche",
  "Gurmukhi",
  "Hangangche",
  "HeadlineA",
  "Hei",
  "Helvetica",
  "Helvetica CY",
  "Helvetica Neue",
  "Herculanum",
  "Hiragino Kaku Gothic Pro",
  "Hiragino Kaku Gothic ProN",
  "Hiragino Kaku Gothic Std",
  "Hiragino Kaku Gothic StdN",
  "Hiragino Maru Gothic Pro",
  "Hiragino Maru Gothic ProN",
  "Hiragino Mincho Pro",
  "Hiragino Mincho ProN",
  "Hoefler Text",
  "Inai Mathi",
  "Impact",
  "Jung Gothic",
  "Kai",
  "Keyboard",
  "Krungthep",
  "KufiStandard GK",
  "LiHei Pro",
  "LiSong Pro",
  "Lucida Grande",
  "Marker Felt",
  "Menlo",
  "Monaco",
  "Monaco CY",
  "Mshtakan",
  "Nadeem",
  "New Peninim",
  "New York",
  "NISC GB18030",
  "Optima",
  "Osaka",
  "Palatino",
  "Papyrus",
  "PC Myungjo",
  "Pilgiche",
  "Plantagenet Cherokee",
  "Raanana",
  "Sand",
  "Sathu",
  "Seoul",
  "Shin Myungjo Neue",
  "Silom",
  "Skia",
  "Song",
  "ST FangSong",
  "ST Heiti",
  "ST Kaiti",
  "ST Song",
  "Tae Graphic",
  "Tahoma",
  "Taipei",
  "Techno",
  "Textile",
  "Thonburi",
  "Times",
  "Times CY",
  "Times New Roman",
  "Trebuchet MS",
  "Verdana",
  "Zapf Chancery",
  "Zapfino"
];

const random = (arr) => {
  const length = arr.length;

  return arr[Math.floor(Math.random() * length)];
};

const extend = (base, ...objects) => {
  return Object.assign(
    {},
    JSON.parse(JSON.stringify(base)),
    ...objects
  );
};

const DEFAULT_OPTIONS = {
  'state-target': 'random-color',
  fonts,
  colors,
};

module.exports = (options = {}) => {
  const App = document.querySelector('.reveal[role="application"]');
  const resolvedOptions = extend(DEFAULT_OPTIONS, options);
  const {colors,fonts} = resolvedOptions;

  return ({currentSlide}) => {
    let color = null;
    let backgroundColor = null;
    let fontFamily = null;

    if (currentSlide.dataset.state === resolvedOptions['state-target']) {
      [color, backgroundColor] = random(colors);
      fontFamily = random(fonts);
    }

    App.style.color = color;
    App.style.backgroundColor = backgroundColor;
    App.style.fontFamily = fontFamily;
  };
};
