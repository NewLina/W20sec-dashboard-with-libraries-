const moment = require('moment');
const containerDate=document.querySelector('.container__date');

let today = moment(new Date()).format('dddd, MMMM Do YYYY');
containerDate.textContent=today;
