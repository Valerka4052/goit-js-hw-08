
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));

function onPlay (timeupdate) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeupdate.seconds));
    console.log('завписую дані в localStorage')
};
