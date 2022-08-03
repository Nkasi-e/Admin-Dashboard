// Showing and hiding the sidebar on mobile view
const aside = document.querySelector("aside");
const menuIconBtn = document.querySelector("#menu-btn");
const closeIconBtn = document.querySelector("#close-btn");
//for changing theme
const themeToggler = document.querySelector(".theme-toggler");

//the style attribute alters the css style command and changes it to the block.. use style method to change your css properties from your javascript
//document.body.classList.toggle to access the css class variables for theme

// adding Event Listener
menuIconBtn.addEventListener("click", () => {
  //to open the menu
  aside.style.display = "block";
});

//To close the menu

closeIconBtn.addEventListener("click", () => {
  aside.style.display = "none";
});

//Change Theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");


  // Making the button respond to being active
    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");

//   themeToggler.querySelector("span").classList.toggle("active");
});

//Filling others in table with an external file outside your html
//import the already created javascript object data in your html file right ontop of your main script file then delele the manually curated table

/*customerOders.forEach(oders => {
    const tr = document.createElement('tr')
    const trContent = `<td>${orders.nameOfProduct}</td>
                        <td>${oders.productNumber}</td>
                        <td>${oders.paymentStatus}</td>
                        <td class="${orders.shipping === 'Decline' ? 'danger' : oders.shipping === 'pendind' ? 'warning' : 'primary'}">${orders.shipping}</td>
                        <td class = "primary">Details</td>
                    `;
    tr.textContent == trContent || tr.innerHtml = trContent which everone suits you

    document.qerySelector('table tbody').appendChild(tr)
});*/