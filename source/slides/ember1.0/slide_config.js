var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Ember 1.0',
    subtitle: 'the future is now',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: false, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/ember-raccoon-24.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Justin Giancola',
    company: 'Unspace',
    gplus: null,
    twitter: '@elucid',
    www: null,
    github: 'https://github.com/elucid'
  }
  ,{
    name: 'Mattia Gheda',
    company: 'Unspace',
    gplus: null,
    twitter: '@ghedamat',
    www: null,
    github: 'https://github.com/ghedamat'
  }]
};

