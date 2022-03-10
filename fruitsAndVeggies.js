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

function myFunction(personalDetails) {
   var out = "";
   var i;
   for (i = 0; i < personalDetails.length; i++) {
      out += `<div class="">
         <img src="${personalDetails[i].avatar}" />
         <div class="flex flex-col">
            <h2 class="text-3xl">${personalDetails[i].first_name} ${personalDetails[i].last_name}</h2>
            <span><strong>ID:</strong> 33${personalDetails[i].id}78</span>

            <h3 class="text-2xl">Address:</h3>
            <span>${personalDetails[i].address}</span>
            <span>${personalDetails[i].city}, ${personalDetails[i].province ? `${personalDetails[i].province},` : ''} ${personalDetails[i].countryCode}</span>

            ${personalDetails[i].btc ? `
            <h3 class="text-2xl">Crypto</h3>
            <h4 class="text-xl">BTC Address:</h4>
               <a class="text-blue-500" href="https://www.blockchain.com/btc/address/${personalDetails[i].btc}" target="_blank">
                  ${personalDetails[i].btc}
               </a>` : ''}

            <h3 class="text-2xl">Last Known Location</h3>
            <span><a class="text-blue-500" href="https://www.google.com/maps/place/${personalDetails[i].latitude},%20${personalDetails[i].longitude}" target="_blank">${personalDetails[i].latitude}, ${personalDetails[i].longitude}</a></span>

            <span><strong>Gender:</strong> ${personalDetails[i].gender} <strong>Race:</strong> ${personalDetails[i].race}</span>
            ${personalDetails[i].paragraph ? `<span><strong>Quote:</strong> ${personalDetails[i].paragraph}</span>` : ''}
            <h3 class="text-2xl">Company Info</h3>
            <h4 class="text-xl">${personalDetails[i].companyName}</h4>
            <span>${personalDetails[i].slogan}</span>
         </div>
      </div>`;
   }
   document.getElementById("listHolder").innerHTML = out;
}