let html = "";
const listHolder = document.getElementById("listHolder");

personalDetails.forEach(function (value, i) {
   html +=
      `<article id="${personalDetails[i].id}" class="border border-gray-400 rounded-lg p-4">
         <img class="mb-1"src="${personalDetails[i].avatar}" />
         <div class="flex flex-col">
            <div class="mb-4">
               <h2 class="text-3xl mb-1">
                  <strong>ID:</strong> ${personalDetails[i].ein}
               </h2>
               <h3 class="text-2xl mb-2"><strong>Firmware Version: </strong>${personalDetails[i].version}</h3>

               <div class="flex mb-2">
                  <p class="flex flex-col basis-1/3"><strong>Registered to:</strong> ${personalDetails[i].first_name} ${personalDetails[i].last_name}</p>
                  <p class="flex flex-col basis-1/3"><strong>Gender:</strong> ${personalDetails[i].gender}</p>
                  <p class="flex flex-col basis-1/3"><strong>Race:</strong> ${personalDetails[i].race}</p>
               </div>

               ${personalDetails[i].paragraph ? `<p class="border p-2">“${personalDetails[i].paragraph}”</p>` : ''}
            </div>

            <div class="mb-4">
               <h3 class="text-2xl mb-2">Last Known Location</h3>
               <a class="text-blue-500" href="https://www.google.com/maps/place/${personalDetails[i].latitude},%20${personalDetails[i].longitude}" target="_blank">${personalDetails[i].latitude}, ${personalDetails[i].longitude}</a>
               <p>${personalDetails[i].date} ${personalDetails[i].time}</p>
            </div>

            <div class="mb-4">
               <h3 class="text-2xl mb-2">Manufacturer Info:</h3>
               <h4 class="text-xl mb-2">${personalDetails[i].companyName}</h4>
               <p>${personalDetails[i].address}</p>
               <p>${personalDetails[i].city}, ${personalDetails[i].province ? `${personalDetails[i].province},` : ''} ${personalDetails[i].countryCode}</p>
               <p class="italic">${personalDetails[i].slogan.charAt(0).toUpperCase() + personalDetails[i].slogan.slice(1)}</p>
            </div>

            <div class="mb-4">
               ${personalDetails[i].btc || personalDetails[i].eth ? `<h3 class="text-2xl mb-2">Blockchain</h3>` : ''}

               ${personalDetails[i].btc ? `<h4 class="text-xl mb-2">BTC Address:</h4>
               <a class="text-blue-500" href="https://www.blockchain.com/btc/address/${personalDetails[i].btc}" target="_blank">${personalDetails[i].btc}</a>` : ''}

               ${personalDetails[i].eth ? `<h4 class="text-xl mb-2">ETC Address:</h4>
               <a class="text-blue-500" href="https://etherscan.io/address/${personalDetails[i].eth}" target="_blank">${personalDetails[i].eth}</a>` : ''}
            </div>
         </div>
      </article>`;
});

document.getElementById("listHolder").innerHTML += html;