let html = "";
const listHolder = document.getElementById("listHolder");

personalDetails.forEach(function (value, i) {
   html +=
      `<div class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
         <img src="${personalDetails[i].avatar}" />
         <div class="flex flex-col">
            <h2>${personalDetails[i].first_name} ${personalDetails[i].last_name}</h2>

            <span><strong>ID:</strong> ${personalDetails[i].id}</span>
            <span><strong>Address:</strong> ${personalDetails[i].address}</span>
            <span><strong>City:</strong> ${personalDetails[i].city}</span>
            <span><strong>Province:</strong> ${personalDetails[i].province}</span>
            <span><strong>CountryCode:</strong> ${personalDetails[i].countryCode}</span>
            <span><strong>Email:</strong> ${personalDetails[i].email}</span>
            <span><strong>Gender:</strong> ${personalDetails[i].gender}</span>
            <span><strong>Race:</strong> ${personalDetails[i].race}</span>
            <span><strong>BTC:</strong> ${personalDetails[i].btc}</span>
            <span><strong>Paragraph:</strong> ${personalDetails[i].paragraph}</span>
            <span><strong>Company Name:</strong> ${personalDetails[i].companyName}</span>
            <span><strong>Slogan:</strong> ${personalDetails[i].slogan}</span>
            <span><strong>Latitude:</strong> ${personalDetails[i].latitude}</span>
            <span><strong>Longitude:</strong> ${personalDetails[i].longitude}</span>
         </div>
      </div>`;
});

document.getElementById("listHolder").innerHTML += html;