/* globals Chart:false, feather:false */

window.onload = () => {
  loadListChartData();
}

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()

const addListChartData = () => {
  $.ajax(
    {
        url : "http://localhost:8080/dashboard/add",
        data : JSON.stringify({
            email: $("#floatingInput").val(),
            password: $("#floatingPassword").val()
        }),
        contentType: "application/json; charset=utf-8",
        dataType : 'json',
        method : 'post',
        async : true,
        success : function(res){
            if (JSON.parse(res)) {
                window.location.href = "http://localhost:3000/dashboard";
            } else {
                alert('fail!');
            }
        },
        error : function(xhr, status, error){
            alert(xhr.status);           // 에러코드(404, 500 등)
            alert(xhr.responseText); // html 포맷의 에러 메시지
            alert(status);                // 'error'
            alert(error);                 // 'Not Found'
        }
    }
  );
}

const loadListChartData = () => {
  $.ajax(
    {
        url : "http://localhost:8080/dashboard/read",
        method : 'post',
        success : function(res){
            if (res) {
                console.log(res);
                for (const data of res) {
                  console.log(data);
                  const newRowContent = `
                    <tr>
                      <td>${data.number}</td>
                      <td>${data.random}</td>
                      <td>${data.data}</td>
                      <td>${data.type}</td>
                    </tr>
                  `;
                  $("#listChart tbody").append(newRowContent);
                }
            } else {
                alert('fail!');
            }
        },
        error : function(xhr, status, error){
            alert(xhr.status);           // 에러코드(404, 500 등)
            alert(xhr.responseText); // html 포맷의 에러 메시지
            alert(status);                // 'error'
            alert(error);                 // 'Not Found'
        }
    }
);
}