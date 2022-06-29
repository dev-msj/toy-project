const onClickSubmit = () => {
    $.ajax(
        {
            url : "http://localhost:8080/signin",
            data : {
                email: $("#floatingInput").val(),
                password: $("#floatingPassword").val()
            },
            dataType : 'json',
            method : 'post',
            async : false,
            success : function(res){
                alert(res.name + ', '+res.phone);
                $('p').show();
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