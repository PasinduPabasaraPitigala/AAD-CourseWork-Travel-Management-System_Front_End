function saveGuide(){
    let guideName=$('#guideName').val();
    let guideAddress=$('#guideAddress').val();
    let guideAge=$('#guideAge').val();
    let guideGender=$('#guideGender').val();
    let guidePICIMGLocation=$('#guidePICIMGLocation').val();
    let guideNICIMGLocation=$('#guideNICIMGLocation').val();
    let guideIDIMGLocation=$('#guideIDIMGLocation').val();
    let guideExperience=$('#guideExperience').val();
    let manDayValue=$('#manDayValue').val();
    let remark=$('#remark').val();
    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8085/api/v1/guide/Gsave",
        async:true,
        data:JSON.stringify({
            "guideID": "",
            "guideName":guideName,
            "guideAddress":guideAddress,
            "guideAge":guideAge,
            "guideGender":guideGender,
            "guidePICIMGLocation":guidePICIMGLocation,
            "guideNICIMGLocation":guideNICIMGLocation,
            "guideIDIMGLocation":guideIDIMGLocation,
            "guideExperience":guideExperience,
            "manDayValue":manDayValue,
            "remark":remark
        }),
        success:function(data){
            alert("saved")
        },
        error:function (xhr,exeception){
            alert("Error")
        }
    })
}