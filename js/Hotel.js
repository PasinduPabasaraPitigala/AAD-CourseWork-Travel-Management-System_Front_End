var packageService = '';

$(document).ready(function(){
    $('.form-group #packageId').click(function(){

        let comboBox = document.getElementById("packageId");

        packageService = comboBox.options[comboBox.selectedIndex].text;

        console.log(packageService);
    });
});


function saveHotel() {
    let hotelName = $('#hotelId').val();
    let hotelCategory = $('#hotelName').val();
    let hotelLocation = $('#hotelCategory').val();
    let hotelLocationWithCoordinates = $('#hotelLocation').val();
    let hotelContact =$('#hotelContact').val();
    let fullBoardWithACLuxuryRoomDouble = $('#fullBoardWithACLuxuryRoomDouble').val();
    let halfBoardWithACLuxuryRoomDouble = $('#halfBoardWithACLuxuryRoomDouble').val();
    let fullBoardWithACLuxuryRoomTriple = $('#fullBoardWithACLuxuryRoomTriple').val();
    let halfBoardWithACLuxuryRoomTriple = $('#halfBoardWithACLuxuryRoomTriple').val();
    let hotelContactEmail =$('#hotelContactEmail').val();
    let isPetsAllowed = $('#isPetsAllowed').val();
    let cancellationCriteria = $('#cancellationCriteria').val();
    let packageId = packageService;

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8083/api/v1/hotel/h_save",
        async:true,
        data:JSON.stringify({
            "hotelId": "",
            "hotelName":hotelName,
            "hotelCategory":hotelCategory,
            "hotelLocation":hotelLocation,
            "hotelLocationWithCoordinates":hotelLocationWithCoordinates,
            "hotelContact":hotelContact,
            "fullBoardWithACLuxuryRoomDouble":fullBoardWithACLuxuryRoomDouble,
            "halfBoardWithACLuxuryRoomDouble":halfBoardWithACLuxuryRoomDouble,
            "fullBoardWithACLuxuryRoomTriple":fullBoardWithACLuxuryRoomTriple,
            "halfBoardWithACLuxuryRoomTriple":halfBoardWithACLuxuryRoomTriple,
            "hotelContactEmail":hotelContactEmail,
            "isPetsAllowed":isPetsAllowed,
            "cancellationCriteria":cancellationCriteria,
            "packageId":packageId
        }),
        success:function(data){
            alert("saved")
        },
        error:function (xhr,exeception){
            alert("Error")
        }
    })
}