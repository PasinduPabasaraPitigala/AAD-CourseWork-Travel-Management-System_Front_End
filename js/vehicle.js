function saveVehicle(){
    let vehicleBrand=$('#exampleFormControlInput2').val();
    let vehicleCategory=$('#exampleFormControlInput3').val();
    let vehicleName=$('#exampleFormControlInput4').val();
    let fuelType=$('#exampleFormControlInput5').val();

   $.ajax({
       method:"POST",
       contentType:"application/json",
       url:"http://localhost:8082/api/v1/vehicles/vSave",
       async:true,
       data:JSON.stringify({
           "vehicleID": "",
           "vehicleBrand":vehicleBrand,
           "vehicleCategory":vehicleCategory,
           "vehicleName": vehicleName,
           "fuelType": fuelType
       }),
       success:function(data){
           alert("saved")
    },
    error:function (xhr,exeception){
           alert("Error")
    }
   })
}

function updateVehicle(){
    let vehicleID=$('#exampleFormControlInput1').val();
    let vehicleBrand=$('#exampleFormControlInput2').val();
    let vehicleCategory=$('#exampleFormControlInput3').val();
    let vehicleName=$('#exampleFormControlInput4').val();
    let fuelType=$('#exampleFormControlInput5').val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8082/api/v1/vehicles/Vput",
        async:true,
        data:JSON.stringify({
            "vehicleID": "vehicleID",
            "vehicleBrand":vehicleBrand,
            "vehicleCategory":vehicleCategory,
            "vehicleName": vehicleName,
            "fuelType": fuelType
        }),
        success:function(data){
            alert("Updated")
        },
        error:function (xhr,exeception){
            alert("Error")
        }
    })
}

function deleteVehicle(){
    let vehicleID=$('#exampleFormControlInput1').val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8082/api/v1/vehicles/V_delete?Vehicle_ID="+vehicleID,
        async:true,
        success:function(data){
            alert("Deleted")


        },
        error:function (xhr,exeception){
            alert("Error")
        }
    })
}


function getAllVehicles(){
    $.ajax({
        method:"GET",
        url:"http://localhost:8082/api/v1/vehicles/getAllVehicles",
        async:true,
        success: function (data){
            if (data.code==="302"){
                $('#vehicleTable').empty();
                for (let vehicle of data.content){
                   let vehicleID=vehicle.vehicleID
                   let vehicleBrand=vehicle.vehicleBrand
                   let vehicleCategory=vehicle.vehicleCategory
                   let vehicleName=vehicle.vehicleName
                   let fuelType=vehicle.fuelType

                    // var row='<tr><td>${vehiclID}</td> <td>${vehicleBrand}</td> <td>${vehicleCategory}</td> <td>${vehicleName}</td> <td>${fuelType}</td> </tr>'
                    // $('#vehicleTable').append(row);

                }

            }
            alert("deleted");
        },
        error:function (xhr,exeception){
            alert("Error")
        }
    })
}