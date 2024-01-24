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


// Project Section

let projectsListButton =document.querySelector("#projectsListButton")
// radio button section selection
let projectNavList = document.querySelector("#projectNavList")

projectsListButton.addEventListener("click", (event) => {

    if(projectNavList.style.display === "none" || projectNavList.style.display === ""){
        projectNavList.style.display = "block"
        document.getElementById("forWidthResponsive")
        .setAttribute("class", "col-8")
    }else{
        projectNavList.style.display = "none"
        document.getElementById("forWidthResponsive")
        .setAttribute("class", "col-12")
    }

})

// body section UI
let projectBody = document.querySelectorAll(".projectBody")

projectNavList.addEventListener('click', (value) => {
    let classToArray = value.target.className.split(' ')
    if (classToArray.includes("projectItemButton")){
        let receivedBodyId = document.getElementById(value.target.id)
        .getAttribute("name")


        projectBody.forEach( (bodySection) => {
            bodySection.style.display = "none"
        })
        
        document.getElementById(receivedBodyId)
        .style.display = "flex"

        receivedBodyId = ""
        classToArray = ""

    }

})

window.addEventListener("resize", () => {
    if(window.innerWidth <= 768 || document.documentElement.clientWidth <= 768 || document.body.clientWidth <= 768){
        projectNavList.style.display = "none"
        document.getElementById("forWidthResponsive")
        .setAttribute("class", "col-12")
    }else{
        projectNavList.style.display = "block"
        document.getElementById("forWidthResponsive")
        .setAttribute("class", "col-8")
    }
})

let forWidthResponsive = document.getElementById("forWidthResponsive")

forWidthResponsive.addEventListener('click', (value) => {
    if(window.innerWidth <= 768 || document.documentElement.clientWidth <= 768 || document.body.clientWidth <= 768){
        if(value.currentTarget.id === "forWidthResponsive"){
            projectNavList.style.display = "none"
            document.getElementById("forWidthResponsive")
            .setAttribute("class", "col-12")
        }
    }
})