// Downloading the resume 
let download_resume = document.getElementById('download_resume');
download_resume.addEventListener('click', function(){
    let pdfurl = 'Images/DEEPANSHUPATELRESUME.pdf';

    let anchor = document.createElement('a');

    anchor.href = pdfurl;
    anchor.target = "_blank";

    anchor.download = "DEEPANSHUPATELRESUME.pdf"
    anchor.click()
})


// button events

let navbarNav = document.querySelector("#navbarNav");

let navDisplayItems = document.querySelectorAll(".nav-display-items")

navbarNav.addEventListener("click", (data) => {
    // classlist taking the all classes of clicked and converted to array
    let classList = data.target.className.split(" ")
    console.log(classList);
    // we satasfying the clicked area is our nav button 
    if(classList.includes("items")){
        // getting the id of the nav icon if its matched for future
        let sectionId = document.getElementById(data.target.id)
        .getAttribute("name")
        console.log(sectionId);
        console.log(navDisplayItems);
        // first we doing the all of our visible body secton to none
        navDisplayItems.forEach( (div) => {
            div.style.display = "none"
        })

        let shownBodySectionID = document.getElementById(sectionId)
        shownBodySectionID.style.display = "block"
    }
})
