function saveUser(){
    let userRole=$('#userRole').val();
    let name=$('#name').val();
    let userName=$('#userName').val();
    let userPassword=$('#userPassword').val();
    let userNIC=$('#userNIC').val();
    let userNICImageLocation=$('#userNICImageLocation').val();
    let userAge=$('#userAge').val();
    let gender=$('#gender').val();
    let userEmail=$('#userEmail').val();
    let userPhone=$('#userPhone').val();
    let userAddress=$('#userAddress').val();
    let remarks=$('#remarks').val();
    let userImageLocation=$('#userImageLocation').val();
    let isAuthenticated=$('#isAuthenticated').val();
    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/auth/getAuth",
        async:true,
        data:JSON.stringify({
            "userId": "",
            "userRole":userRole,
            "name":name,
            "userName":userName,
            "userPassword":userPassword,
            "userNIC":userNIC,
            "userNICImageLocation":userNICImageLocation,
            "userAge":userAge,
            "gender":gender,
            "userEmail":userEmail,
            "userPhone":userPhone,
            "userAddress":userAddress,
            "remarks":remarks,
            "userImageLocation":userImageLocation,
            "isAuthenticated":isAuthenticated
        }),
        success:function(data){
            alert("saved")
        },
        error:function (xhr,exeception){
            alert("Error")
        }
    })
}