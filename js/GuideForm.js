// /*
// let formBtn = document.querySelector('#addGuide');
// let loginForm = document.querySelector('.model');
// let formClose = document.querySelector('#close-modal');
//
// window.onscroll =() =>{
//     loginForm.classList.remove('active');
// }
//
// formBtn.addEventListener('click',()=>{
//     loginForm.classList.add('active');
//
// });
//
// formClose.addEventListener('click',()=>{
//     loginForm.classList.remove('active');
//
// });
// */
// /strat for control coding/
//
// var addBtn =document.querySelector("#addGuide");
// var modal =document.querySelector(".model");
// var closeBtn=document.querySelector(".close-icon");
// addBtn.onclick=function (){
//     modal.classList.add("active");
// }
//
// closeBtn.addEventListener("click",()=>{
//     modal.classList.remove("active");
// })
// /*
//
// var userData=[]
// var guideId = document.getElementById("#IdGuide");
// var guideName = document.getElementById("#name");
// var guideAge = document.getElementById("#guideAge");
// var guideAddress = document.getElementById("#guideAddress");
// var guideContact = document.getElementById("#guideContact");
// var guideExperience = document.getElementById("#guideExperience");
// var guideGender = document.getElementById("#guideGender");
// var registerButton = document.querySelector("#registerBtn");
// var registerForm =document.querySelector("#register-form");
// var imgGuideUrl;
// var imgIdUrl;
// var imgNIC;
//
// registerButton.onclick=function (e){
//      registration();
//      registerForm.reset('');
//      e.preventDefault();
//      closeBtn.click();
// }
//
//  if (localStorage.getItem("userData")!= null){
//      userData = JSON.parse(localStorage.getItem("userData"));
//  }
//
// function registration(){
//     userData.push({
//         IdGuide : guideId.value,
//         name : guideName.value,
//         guideAge :guideAge.value,
//         guideAddress : guideAddress.value,
//         guideContact : guideContact.value,
//         guideExperience : guideExperience.value,
//         guideGender : guideGender.value,
//         guideImage : imgGuideUrl == undefined ? "assets/images/Mx Delinquent_ _ Various!Tbhk x reader.jpg" : imgGuideUrl,
//         guideId  : imgIdUrl == undefined ?  "assets/images/Mx Delinquent_ _ Various!Tbhk x reader.jpg" : imgIdUrl,
//         guideNIC  : imgNIC == undefined ?  "assets/images/Mx Delinquent_ _ Various!Tbhk x reader.jpg" : imgNIC,
//     });
//
//     var userString = JSON.stringify(userData);
//     localStorage.setItem("userData",userString);
// }
// var tableData =document.querySelector("#table-data");
//  const  getDataFromLocal = ()=>{
//      userData.innerHTML="";
//      userData.forEach((data,index)=>{
//         tableData.innerHTML += `
//         <tr index ='${index}'>
//             <td>hello world</td>
//              <td></td>
//              <td></td>
//              <td></td>
//              <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//                <td></td>
//    <td>
//                 <button><i class="fas fa-eye"></i></button>
//                 <button style="background-color: red;"><i class="fas fa-trash"></i></button>
//             </td>`;
//      })
//  }
//
//  getDataFromLocal();*/
//
//
// /*------------------------------------------------Image Processing-------------------------------------------------*/
//
// var GuideImage =document.querySelector("#img1");
// var uploadpic =document.querySelector("#inputFile");
// uploadpic.onchange=function (){
//     /* if (uploadpic.files[0].size < 1000000){
//          var fReader = new FileReader();
//          fReader.onload=function (e){
//              var imgUrl = e.traget.result;
//              GuideImage.src=imgUrl;
//              console.log(imgUrl);
//          }
//          fReader.readAsDataURL(uploadpic.files[0]);
//      }else {
//          alert("File size is to long")
//      }*/
//     alert();
// }
//
//
// /*-------------------------------------functions---------------------------------------------------*/
// $(document).ready(()=>{
//     localStorage.setItem("hotelAuthToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6IkhBIiwic3ViIjoiYW5qYWxpIiwiaWF0IjoxNjk4MDQwNDA0LCJleHAiOjQ4NTE2NDA0MDR9.brJ8SaiTCsLYNmyJDADNV_hOCWcQ8GZx7lFdX1WqwTc"))
//     $("#HotelId").prop("disabled", true);
//     addTableField();
//     packageIds();
// });
//
//
// var regularId = '';
// var midrangeId = '';
// var luxuryId = '';
// var superluxuryId = '';
//
// function packageIds() {
//     $.ajax({
//         url: "http://localhost:8082/fetchAll",
//         method: "GET",
//         headers: {
//             // "content-type": "application/json",
//             "Authorization": "Bearer " + JSON.parse(localStorage.getItem("vehicleAuthToken"))
//         },
//         success: (response) => {
//             if (response.statusCode === 302) {
//
//                 response.data.forEach(function (packages) {
//                     switch (packages.packageCategory) {
//                         case "Regular" :regularId = packages.packageId;
//                             break;
//                         case "Mid-level" :midrangeId = packages.packageId;
//                             break;
//                         case "Luxury" :luxuryId = packages.packageId;
//                             break;
//                         case "Super Luxury" :superluxuryId = packages.packageId;
//                             break;
//                     }
//
//                 })
//             } else {
//                 return swal("OOPS!", "error")
//             }
//         }, error: (error) => {
//             swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
//         },
//     })
// }
//
// var packageSelected = '';  // this is category type
// var packageSelectedId = ''; //this is the package id
//
// $(document).ready(function(){
//     $('.dataForm #package-select').click(function(){
//
//         var comboBox = document.getElementById("package-select");
//
//         packageSelected = comboBox.options[comboBox.selectedIndex].text;
//
//         switch (packageSelected) {
//             case "Regular" :packageSelectedId = regularId;
//                 break;
//             case "Mid-level" :packageSelectedId = midrangeId;
//                 break;
//             case "Luxury" :packageSelectedId = luxuryId;
//                 break;
//             case "Super Luxury" :packageSelectedId = superluxuryId;
//                 break;
//         }
//         console.log(packageSelected);
//         console.log(packageSelectedId);
//         $("#PackageIdd").val(packageSelectedId)
//
//     });
// });
//
//
// var petSelected = '';
//
// $(document).ready(function(){
//     $('.dataForm #pet-select').click(function(){
//
//         var comboBox = document.getElementById("pet-select");
//
//         petSelected = comboBox.options[comboBox.selectedIndex].text;
//
//         console.log(petSelected);
//     });
// });
//
// // save
// $(document).ready(() => {
//     $(document).on("click", "#Submit", () => {
//         if (!validator()) {
//             return swal("Operation failed!", "Please fill all the fields!", "error")
//         }
//
//         setTimeout(() => {
//             let hotel = {
//                 hotelID: "",
//                 hotelName: $("#name").val(),
//                 hotelCatageory: $("#category").val(),
//                 hotelLocation: $("#location").val(),
//                 hotelLocationWithCoordinates : $("#hotelLocationWithCoordinates").val(),
//                 hotelEmail: $("#email").val(),
//                 hotelContactNumber: $("#contact").val(),
//                 isPetsAllowed: petSelected,
//                 fullDbl: $("#fulldouble").val(),
//                 halfDbl: $("#halfdouble").val(),
//                 fullTpl: $("#fulltriple").val(),
//                 halfTpl: $("#halftriple").val(),
//                 cancellationCriteria: $("#cancellation").val(),
//                 packageId: $("#PackageIdd").val()
//             }
//
//             $.ajax({
//                 url: "http://localhost:8085/save",
//                 method: "POST",
//                 headers: {
//                     "content-type": "application/json",
//                     "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
//                 },
//                 data: JSON.stringify(hotel),
//                 success: (response) => {
//                     if (response.statusCode === 200 || response.statusCode === 201) {
//                         addTableField();
//                         clearFields();
//                         swal("Done!", response.message, "success")
//                     } else {
//                         return swal("OOPS!", response.message, "error")
//                     }
//                 }, error: (error) => {
//                     swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
//                 },
//             })
//         },5000)
//     })
// });
//
// // update
// $(document).ready(() => {
//     $(document).on("click", "#Update", () => {
//         if (!validator()) {
//             return swal("Operation failed!", "Please fill all the fields!", "error")
//         }
//
//         setTimeout(() => {
//             let hotel = {
//                 hotelID: $("#HotelId").val(),
//                 hotelName: $("#name").val(),
//                 hotelCatageory: $("#category").val(),
//                 hotelLocation: $("#location").val(),
//                 hotelLocationWithCoordinates : $("#hotelLocationWithCoordinates").val(),
//                 hotelEmail: $("#email").val(),
//                 hotelContactNumber: $("#contact").val(),
//                 isPetsAllowed: petSelected,
//                 fullDbl: $("#fulldouble").val(),
//                 halfDbl: $("#halfdouble").val(),
//                 fullTpl: $("#fulltriple").val(),
//                 halfTpl: $("#halftriple").val(),
//                 cancellationCriteria: $("#cancellation").val(),
//                 packageId: $("#PackageIdd").val()
//             }
//
//             $.ajax({
//                 url: "http://localhost:8085/update",
//                 method: "PUT",
//                 headers: {
//                     "content-type": "application/json",
//                     "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
//                 },
//                 data: JSON.stringify(hotel),
//                 success: (response) => {
//                     if (response.statusCode === 200 || response.statusCode === 201) {
//                         addTableField();
//                         clearFields();
//                         swal("Done!", response.message, "success")
//                     } else {
//                         return swal("OOPS!", response.message, "error")
//                     }
//                 }, error: (error) => {
//                     swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
//                 },
//             })
//         },5000)
//     })
// });
//
// //search
// $(document).ready(() => {
//     $(document).on("keydown", "#name", (event) => {
//
//         if (event.key === 'Enter') {
//             $.ajax({
//                 url: "http://localhost:8085/getHotelByUserName?HotelName=" + $("#name").val(),
//                 method: "GET",
//                 headers: {
//                     "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
//                 },
//                 success: (res) => {
//                     console.log(res.data)
//                     $("#PackageId").val(res.data.packageId);
//
//                     if (res.statusCode === 200 || res.statusCode === 201) {
//                         $("#HotelId").prop("disabled", false);
//                         $("#HotelId").val(res.data.hotelID);
//                         $("#HotelId").prop("disabled", true);
//                         $("#name").val(res.data.hotelName);
//                         $("#category").val(res.data.hotelCatageory);
//                         $("#hotelLocationWithCoordinates").val(res.data.hotelLocationWithCoordinates);
//                         $("#location").val(res.data.hotelLocation);
//                         $("#email").val(res.data.hotelEmail);
//                         $("#contact").val(res.data.hotelContactNumber);
//                         $("#fulldouble").val(res.data.fullDbl);
//                         $("#halfdouble").val(res.data.halfDbl);
//                         $("#fulltriple").val(res.data.fullTpl);
//                         $("#halftriple").val(res.data.halfTpl);
//                         $("#cancellation").val(res.data.cancellationCriteria);
//
//                         $("#PackageIdd").val(res.data.packageId);
//                         return swal("Done!", "success");
//
//                     }
//
//
//                     swal("OOPS!","error");
//                     clearFields();
//
//                 },
//                 error: (error) => {
//                     swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
//                 }
//             });
//         }
//     })
// });
//
// //delete
// $(document).ready(() => {
//     $(document).on("keydown", "#name", (event) => {
//
//         if (event.key === 'Enter') {
//
//
//             $.ajax({
//                 url: "http://localhost:8085/getHotelByUserName?HotelName=" + $("#name").val(),
//                 method: "GET",
//                 headers: {
//                     "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
//                 },
//                 success: (res) => {
//                     console.log(res.data)
//                     if (res.statusCode === 200 || res.statusCode === 201) {
//                         $("#HotelId").prop("disabled", false);
//                         $("#HotelId").val(res.data.hotelID);
//                         $("#HotelId").prop("disabled", true);
//                         $("#name").val(res.data.hotelName);
//                         $("#category").val(res.data.hotelCatageory);
//                         $("#location").val(res.data.hotelLocation);
//                         $("#hotelLocationWithCoordinates").val(res.data.hotelLocationWithCoordinates);
//                         $("#email").val(res.data.hotelEmail);
//                         $("#contact").val(res.data.hotelContactNumber);
//                         $("#fulldouble").val(res.data.fullDbl);
//                         $("#halfdouble").val(res.data.halfDbl);
//                         $("#fulltriple").val(res.data.fullTpl);
//                         $("#halftriple").val(res.data.halfTpl);
//                         $("#cancellation").val(res.data.cancellationCriteria);
//
//                         $("#PackageIdd").val(res.data.packageId);
//
//                         swal("Done!", "success");
//
//                         $(document).on("click", "#deleteGuide", () => {
//                             // if (!validator()) {
//                             //     return swal("Operation failed!", "Please fill all the fields!", "error")
//                             // }
//
//                             if ($("#HotelId").val() === "") {
//                                 return swal("OOPS!", "Please enter a Vehicle name to delete!", "error");
//                             }
//
//                             $.ajax({
//                                 url: "http://localhost:8085/delete?hotelId=" + $("#HotelId").val(),
//                                 method: "DELETE",
//                                 headers: {
//                                     "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
//                                 },
//                                 success: (res) => {
//                                     console.log(res.data)
//                                     if (res.statusCode === 200 || res.statusCode === 201) {
//                                         addTableField();
//                                         clearFields();
//                                         return swal("Done!", res.message, "success");
//
//
//                                     }
//                                     swal("OOPS!", res.message, "error");
//
//                                 },
//                                 error: (error) => {
//                                     swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
//                                 }
//                             });
//                         })
//
//                     }
//                     swal("OOPS!","error");
//                     clearFields();
//
//                 },
//                 error: (error) => {
//                     swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
//                 }
//             });
//         }
//     })
// });
//
//
// function validator() {
//     if ($("#name").val() === "" || $("#category").val() === "" || $("#location").val() === "" || $("#email").val() === "" || $("#contact").val() === "" || $("#fulldouble").val() === "" || $("#halfdouble").val() === "" || $("#fulltriple").val() === "" || $("#halftriple").val() === "" || $("#cancellation").val() === "") {
//         return false;
//     }
//     return true;
// }
//
// function clearFields() {
//     $("#HotelId").val("");
//     $("#name").val("");
//     $("#category").val("");
//     $("#location").val("");
//     $("#email").val("");
//     $("#contact").val("");
//     $("#fulldouble").val("");
//     $("#halfdouble").val("");
//     $("#fulltriple").val("");
//     $("#halftriple").val("");
//     $("#cancellation").val("");
//     $("#PackageIdd").val("");
// }
//
// $(document).ready(() => {
//     $(document).on("click", "#clearButton", () => {
//         clearFields();
//     })
// })
//
// function  addTableField(){
//     $.ajax({
//         url: "http://localhost:8085/fetchAll",
//         method: "GET",
//         headers: {
//             "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
//         },
//         success: (res) => {
//
//             var html = "";
//             res.data.forEach(function (hotel , hotelId ,hotelName){
//                 hotelId = hotel.vehicleID;
//                 hotelName = hotel.vehicleBrand;
//
//
//                 html += "<tr>";
//                 html += "<td>" + hotel.hotelID + "</td>";
//                 html += "<td>" + hotel.hotelName + "</td>";
//                 html += "<td>" + hotel.hotelCatageory + "</td>";
//                 html += "<td>" + hotel.hotelLocation + "</td>";
//                 html += "<td>" + hotel.hotelEmail + "</td>";
//                 html += "<td>" + hotel.hotelContactNumber + "</td>";
//                 html += "<td>" + hotel.isPetsAllowed + "</td>";
//                 html += "<td>" + hotel.cancellationCriteria + "</td>";
//                 html += '<td><button onclick="deleteDataa(' + hotelId + ')" class="btn btn-danger">Delete</button><button onclick="UpdateData(' + hotelName + ')" class="btn btn-warning m-2">Edit</button></td>';
//                 html += "</tr>";
//             })
//
//             document.querySelector("#crudTable tbody").innerHTML = html;
//
//         }, error: (error) => {
//             swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
//         }
//     })
// }
//
// function getCoordinates(){
//     axios.get("https://geocode.maps.co/search?q="+$("#name").val())
//         .then((res)=>{
//             console.log(res.data[0].lat)
//             $("#hotelLocationWithCoordinates").val("Latitude : "+res.data[0].lat+',Longitude : '+res.data[0].lon)
//
//         })
//         .catch((err)=>{
//             console.log(err)
//             swal("OOPS! ","An error occurred while fetching coordinates!","error");
//
//
//         })
// }
//
// $(document).on("mouseleave","#name",()=>{
//     getCoordinates();
// })