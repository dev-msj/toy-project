window.onload = () => {
  setDataControlModal();
  setDataDeleteModal();
  loadListChartData();
}

const setDataControlModal = () => {
  const dataControlModal = document.getElementById('dataControlModal')
  dataControlModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var dataNumber = button.getAttribute('data-bs-whatever');
    var modalTitle = dataControlModal.querySelector('.modal-title');

    modalTitle.textContent = 'Update Data : ' + dataNumber;
  });
}

const setDataDeleteModal = () => {
  const dataDeleteModal = document.getElementById('dataDeleteModal')
  dataDeleteModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var dataNumber = button.getAttribute('data-bs-whatever');
    var modalTitle = dataDeleteModal.querySelector('.modal-title');

    modalTitle.textContent = 'Delete Data : ' + dataNumber;
  });
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
})();

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
  $.ajax({
    url : "http://localhost:8080/dashboard/read",
    method : 'post',
    success : function(res){
        if (res) {
            for (const data of res) {
              const newRowContent = `
                <tr>
                  <td>${data.number}</td>
                  <td id="random${data.number}">${data.random}</td>
                  <td id="data${data.number}">${data.data}</td>
                  <td id="type${data.number}">${data.type}</td>
                  <td>
                    <button 
                      type="button" class="btn btn-success btn-sm" 
                      data-bs-toggle="modal" data-bs-target="#dataControlModal" data-bs-whatever="${data.number}"
                      onclick="onClickUpdateModal(${data.number})"
                    >
                      수정
                    </button>
                    <button 
                      type="button" class="btn btn-danger btn-sm" 
                      data-bs-toggle="modal" data-bs-target="#dataDeleteModal" data-bs-whatever="${data.number}"
                      onclick="onClickDeleteModal(${data.number})"
                    >
                      삭제
                    </button>
                  </td>
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
  });
}

const onClickUpdateModal = (dataNumber) => {
  if (dataNumber === '') {
    $("#data-number").val('');
    $("#random-name").val('');
    $("#data-name").val('');
    $("#type-name").val('');
  } else {
    $("#data-number").val(dataNumber);
    $("#random-name").val($(`#random${dataNumber}`).text());
    $("#data-name").val($(`#data${dataNumber}`).text());
    $("#type-name").val($(`#type${dataNumber}`).text());
  }
}

const onClickDataControlSubmit = () => {
  const data = {
    "number": $("#data-number").val(),
    "random": $("#random-name").val(),
    "data": $("#data-name").val(),
    "type": $("#type-name").val(),
  };
  let requestType = "add";

  if (data.number === '') {
    data.number = -1;
  } else {
    requestType = "update";
  }

  if (data.random === '') {
    alert('empty random');
    return;
  }
  if (data.data === '') {
    alert('empty data');
    return;
  }
  if (data.type === '') {
    alert('empty type');
    return;
  }

  $.ajax({
    url : `http://localhost:8080/dashboard/${requestType}`,
    method : 'post',
    contentType: "application/json; charset=utf-8",
    data : JSON.stringify(data),
    dataType: 'json',
    success : function(res){
        if (res) {
            location.reload();
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
  });
}

const onClickDeleteModal = (dataNumber) => {
  $("#delete-number").val(dataNumber);
}

const onClickDataDeleteSubmit = () => {
  const data = {
    "number": $("#delete-number").val()
  };
  console.log(data);

  $.ajax({
    url : 'http://localhost:8080/dashboard/delete',
    method : 'post',
    contentType: "application/json; charset=utf-8",
    data : JSON.stringify(data),
    dataType: 'json',
    success : function(res){
        if (res) {
            location.reload();
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
  });
}