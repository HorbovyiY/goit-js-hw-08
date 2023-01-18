import Player from '@vimeo/player';

const player = new Player(document.querySelector("#vimeo-player"));
var throttle = require('lodash.throttle');


if (localStorage.getItem('videoplayer-current-time')) { 
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on(
  'timeupdate',
    throttle(function ({ seconds }) {
        if (seconds !== 0) {
            localStorage.setItem('videoplayer-current-time', seconds);
        }
  }, 1000)
);

