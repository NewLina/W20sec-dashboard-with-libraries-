// import Chart from 'chart.js/auto';
// import ApexCharts from 'apexcharts';


const weeklyChart=document.querySelector('.statistics__weekly-chart');


const dataJSON = `
    {
            "monday": "4",
            "tuesday": "2",
            "wednesday": "6",
            "thursday": "8",
            "friday": "5",
            "saturday": "1",
            "sunday": "3"
        }
    `;

const data=JSON.parse(dataJSON);

const myWeeklyChart=document.getElementById('myChart');
new Chart(myWeeklyChart, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Weekly Activity',
        data: [data.monday, data.tuesday, data.wednesday, data.thursday, data.friday, data.saturday, data.sunday],
        borderWidth: 3,
        borderColor: 'rgb(75, 192, 192)',
    tension: 0.5,
    
      }]
    },
    options: {
        layout: {
            padding: 30
        }
    }
  });