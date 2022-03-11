let xmlhttp;
let url = "https://api.mockaroo.com/api/0890d280?count=1000&key=c9a71de0";

if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
   xmlhttp = new XMLHttpRequest();
}
else {// code for IE6, IE5
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

const requestScreen = () => {
   return `
      <h2 class="text-3xl mb-4">Request not initialized…</h2>
   `
}

const serverConnectScreen = () => {
   return `
      <h2 class="text-3xl mb-4">Server connection established…</h2>
   `
}

const requestReceivedScreen = () => {
   return `
      <h2 class="text-3xl mb-4">Request received…</h2>
   `
}

const processingScreen = () => {
   return `
      <h2 class="text-3xl mb-4">Processing request…</h2>
   `
}

const loadScreen = () => {
   return `
      <h2 class="text-3xl mb-4">The DB is Loading…</h2>
   `
}

const serverErrorScreen = () => {
   return `
      <h2 class="text-3xl mb-4">500 Internal Server Error…</h2>
   `
}

xmlhttp.onreadystatechange = function () {
   if (this.readyState == 0 && this.status == 200) {
      document.getElementById("loading").innerHTML = requestScreen();
   }
   if (this.readyState == 1 && this.status == 200) {
      document.getElementById("loading").innerHTML = serverConnectScreen();
   }
   if (this.readyState == 2 && this.status == 200) {
      document.getElementById("loading").innerHTML = requestReceivedScreen();
   }
   if (this.readyState == 3 && this.status == 200) {
      document.getElementById("loading").innerHTML = processingScreen();
   }
   if (this.readyState == 4 && this.status == 200) {
      document.getElementById("loading").innerHTML = '';
      let myArr = JSON.parse(this.responseText);
      myFunction(myArr);
   }
   if (this.readyState == 4 && this.status == 500) {
      document.getElementById("loading").innerHTML = serverErrorScreen();
   }
};

document.getElementById("loading").innerHTML = loadScreen();
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(personalDetails) {
   let out = "";
   let i;
   for (i = 0; i < personalDetails.length; i++) {
      out += `<article id="${personalDetails[i].id}" class="border p-4">
         <img class="mb-1"src="${personalDetails[i].avatar}" />
         <div class="flex flex-col">
            <div class="mb-4">
               <h2 class="text-3xl mb-4">
                  <strong>ID:</strong> 33${personalDetails[i].id}78
               </h2>

               <h3 class="text-2xl mb-2">Registered to</h3>
               <p>${personalDetails[i].first_name} ${personalDetails[i].last_name}</p>
               ${personalDetails[i].paragraph ? `<p>“${personalDetails[i].paragraph}”</p>` : ''}
               <p><strong>Gender:</strong> ${personalDetails[i].gender}</p>
               <p><strong>Race:</strong> ${personalDetails[i].race}</p>
            </div>

            <div class="mb-4">
               <h3 class="text-2xl mb-2">Last Known Location</h3>
               <a class="text-blue-500" href="https://www.google.com/maps/place/${personalDetails[i].latitude},%20${personalDetails[i].longitude}" target="_blank">${personalDetails[i].latitude}, ${personalDetails[i].longitude}</a>
            </div>

            <div class="mb-4">
               <h3 class="text-2xl mb-2">Manufacturer Info:</h3>
               <h4 class="text-xl mb-2">${personalDetails[i].companyName}</h4>
               <p>${personalDetails[i].address}</p>
               <p>${personalDetails[i].city}, ${personalDetails[i].province ? `${personalDetails[i].province},` : ''} ${personalDetails[i].countryCode}</p>
               <p class="italic">${personalDetails[i].slogan.charAt(0).toUpperCase() + personalDetails[i].slogan.slice(1) }</p>
            </div>

            <div class="mb-4">
               ${personalDetails[i].btc ? `<h3 class="text-2xl mb-2">Crypto</h3>` : ''}

               ${personalDetails[i].btc ? `<h4 class="text-xl mb-2">BTC Address:</h4>
               <a class="text-blue-500" href="https://www.blockchain.com/btc/address/${personalDetails[i].btc}" target="_blank">${personalDetails[i].btc}</a>` : ''}
            </div>
         </div>
      </article>`;
   }
   document.getElementById("listHolder").innerHTML = out;
}