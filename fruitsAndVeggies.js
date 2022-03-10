var xmlhttp = new XMLHttpRequest();
var url = "https://api.mockaroo.com/api/0890d280?count=1000&key=c9a71de0";

xmlhttp.onreadystatechange = function () {
   if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      myFunction(myArr);
   }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
   var out = "";
   var i;
   for (i = 0; i < arr.length; i++) {
      out += `<div class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
         <img src="${arr[i].avatar}" />
         <div class="flex flex-col">
            <h2>${arr[i].first_name} ${arr[i].last_name}</h2>

            <span><strong>ID:</strong> ${arr[i].id}</span>
            <span><strong>Address:</strong> ${arr[i].address}</span>
            <span><strong>City:</strong> ${arr[i].city}</span>
            <span><strong>Province:</strong> ${arr[i].province}</span>
            <span><strong>CountryCode:</strong> ${arr[i].countryCode}</span>
            <span><strong>Email:</strong> ${arr[i].email}</span>
            <span><strong>Gender:</strong> ${arr[i].gender}</span>
            <span><strong>Race:</strong> ${arr[i].race}</span>
            <span><strong>BTC:</strong> ${arr[i].btc}</span>
            <span><strong>Paragraph:</strong> ${arr[i].paragraph}</span>
            <span><strong>Company Name:</strong> ${arr[i].companyName}</span>
            <span><strong>Slogan:</strong> ${arr[i].slogan}</span>
            <span><strong>Latitude:</strong> ${arr[i].latitude}</span>
            <span><strong>Longitude:</strong> ${arr[i].longitude}</span>
         </div>
      </div>`;
   }
   document.getElementById("listHolder").innerHTML = out;
}