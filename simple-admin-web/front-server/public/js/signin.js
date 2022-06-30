const onClickSubmit = () => {
    $.ajax(
        {
            url : "http://localhost:8080/sign-in/",
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
                    alert('login!');
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