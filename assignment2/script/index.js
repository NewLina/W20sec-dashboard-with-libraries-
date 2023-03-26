const moment = require('moment');
const containerDate=document.querySelector('.container__date');
const containerTime=document.querySelector('.tasks__time');

let today = moment(new Date()).format('dddd, MMMM Do YYYY');
containerDate.textContent=today;

const update = function() {
    containerTime.innerHTML = moment().format('LTS');
};
setInterval(update, 1000);