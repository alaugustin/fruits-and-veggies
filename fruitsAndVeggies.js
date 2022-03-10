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
      out += `<div id="${personalDetails[i].id}" class="border p-4">
         <img src="${personalDetails[i].avatar}" />
         <div class="flex flex-col">
            <span>
               <h2 class="text-3xl">
                  ${personalDetails[i].first_name} ${personalDetails[i].last_name}
                  <span class="text-lg"><strong>ID:</strong> 33${personalDetails[i].id}78</span>
               </h2>
               ${personalDetails[i].paragraph ? `<p>“${personalDetails[i].paragraph}”</p>` : ''}

            </span>

            <span>
               <h3 class="text-2xl">Address:</h3>
               <p>${personalDetails[i].address}</p>
               <p>${personalDetails[i].city}, ${personalDetails[i].province ? `${personalDetails[i].province},` : ''} ${personalDetails[i].countryCode}</p>
            </span>

            <span>
               ${personalDetails[i].btc ? `<h3 class="text-2xl">Crypto</h3>` : ''}

               ${personalDetails[i].btc ? `<h4 class="text-xl">BTC Address:</h4>
               <a class="text-blue-500" href="https://www.blockchain.com/btc/address/${personalDetails[i].btc}" target="_blank">${personalDetails[i].btc}</a>` : ''}
            </span>
            <span>
               <h3 class="text-2xl">Last Known Location</h3>
               <a class="text-blue-500" href="https://www.google.com/maps/place/${personalDetails[i].latitude},%20${personalDetails[i].longitude}" target="_blank">${personalDetails[i].latitude}, ${personalDetails[i].longitude}</a>
            </span>

            <span>
               <strong>Gender:</strong> ${personalDetails[i].gender} <strong>Race:</strong> ${personalDetails[i].race}
            </span>

            <span>
               <h3 class="text-2xl">Company Info</h3>
               <h4 class="text-xl">${personalDetails[i].companyName}</h4>
               ${personalDetails[i].slogan}
            </span>
         </div>
      </div>`;
   }
   document.getElementById("listHolder").innerHTML = out;
}