// import Chart from 'chart.js/auto';
// import ApexCharts from 'apexcharts';


const weeklyChart=document.querySelector('.statistics__weekly-chart');
const myWeeklyChart=document.getElementById('myWeeklyChart');
const userName=document.querySelector('.title-text');
const totalProjects = document.querySelector('.total-projects');
const totalTasks = document.querySelector('.total-tasks');
const profileName=document.querySelector('.profile__name');
const position=document.querySelector('.profile__position');

const dataJSON = `{
  "name": "Dear Developer",
  "position": "Frontend developer",
  "monday": 4,
  "tuesday": 2,
  "wednesday": 6,
  "thursday": 8,
  "friday": 5,
  "saturday": 1,
  "sunday": 3,
  "mondayTasks": 0,
  "newMondayTasks": 4,
  "tuesdayTasks": 5,
  "newTuesdayTasks": 2,
  "wednesdayTasks": 3,
  "newWednesdayTasks": 0,
  "thursdayTasks": 6,
  "newThursdayTasks": 1,
  "fridayTasks": 2,
  "newFridayTasks": 4,
  "saturdayTasks": 7,
  "newSaturdayTasks": 3,
  "sundayTasks": 4,
  "newSundayTasks": 4,
  "profile": 70
}`;

const data=JSON.parse(dataJSON);

userName.textContent=`Welcome ${data.name}!`;
profileName.textContent=data.name;
position.textContent=data.position;

new Chart(myWeeklyChart, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Activity',
      data: [data.monday, data.tuesday, data.wednesday, data.thursday, data.friday, data.saturday, data.sunday],
      borderWidth: 3,
      borderColor: 'rgb(255, 196, 1)',
      tension: 0.5 
    }]
  },
  options: {
      layout: {
          padding: 30
      }
  }
});


const options = {
  colors:['rgb(255, 218, 9)', 'rgb(221, 146, 34)'],
  series: [{
  name: 'New Task',
  data: [data.newMondayTasks, data.newTuesdayTasks, data.newWednesdayTasks, data.newThursdayTasks, data.newFridayTasks, data.newSaturdayTasks, data.newSundayTasks]
}, {
  name: 'In Progress',
  data: [data.mondayTasks, data.tuesdayTasks, data.wednesdayTasks, data.thursdayTasks, data.fridayTasks, data.saturdayTasks, data.sundayTasks]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
  toolbar: {
    show: true
  },
  zoom: {
    enabled: true
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom',
      offsetX: -10,
      offsetY: 0
    }
  }
}],
plotOptions: {
  bar: {
    horizontal: false,
    borderRadius: 10,
    dataLabels: {
      total: {
        enabled: true,
        style: {
          fontSize: '13px',
          fontWeight: 900
        }
      }
    }
  },
},
xaxis: {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
},
legend: {
  position: 'right',
  offsetY: 40
},
fill: {
  opacity: 1
}
};

const taskChart = new ApexCharts(document.querySelector(".tasks__chart"), options);
taskChart.render();

function countProjects() {
  const projectSum=Math.floor((data.monday + data.tuesday + data.wednesday + data.thursday + data.friday + data.saturday + data.sunday)/10)*10;
  return projectSum;
}
function countTasks() {
  const taskSum=Math.floor((data.newMondayTasks + data.newTuesdayTasks + data.newWednesdayTasks + data.newThursdayTasks + data.newFridayTasks + data.newSaturdayTasks + data.newSundayTasks + data.mondayTasks + data.tuesdayTasks + data.wednesdayTasks + data.thursdayTasks + data.fridayTasks + data.saturdayTasks + data.sundayTasks)/10)*10;
  return taskSum;
}

totalProjects.textContent=`${countProjects()}+`;
totalTasks.textContent=`${countTasks()}+`;

const barOptions = {
  series: [data.profile],
  colors:['rgb(255, 218, 9)'],
  chart: {
  height: 290,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    hollow: {
      size: '70%',
    }
  },
},
labels: ['Completed'],
};

const barChart = new ApexCharts(document.querySelector(".profile__completion-bar"), barOptions);
barChart.render();