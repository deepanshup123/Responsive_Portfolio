
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