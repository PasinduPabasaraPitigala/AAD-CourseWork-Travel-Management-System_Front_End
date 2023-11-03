function savePackage(){
    let packageCategory=$('#packageCategory').val();
    let packageDetails=$('#packageDetails').val();
    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8091/packageService/P_save",
        async:true,
        data:JSON.stringify({
            "package_id": "00",
            "packageCategory":packageCategory,
            "packageDetails":packageDetails
        }),
        success:function(data){
            alert("saved")
        },
        error:function (xhr,exeception){
            alert("Error")
        }
    })
}