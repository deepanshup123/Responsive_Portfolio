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


// for animation through canvas

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

let particlesArray = []

window.addEventListener("resize", function(){
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
})

const mouse = {
    x : undefined,
    y : undefined,
}
class Particles{
    constructor(){
        // this.x = mouse.x,
        // this.y = mouse.y,
        this.x = Math.random() * canvas.width,
        this.y = Math.random() * canvas.height,
        this.size = Math.floor(Math.random() * 15 + 1)
        this.sppedx = Math.floor(Math.random() * 3 - 1.5)
        this.sppedy = Math.floor(Math.random() * 3 - 1.5)
    }

    update(){
        this.x += this.sppedx
        this.y += this.sppedy
        if(this.size > 0.2) this.size -= 0.1
    }

    draw(){
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, "gold");
        gradient.addColorStop(0.2, "orange");
        gradient.addColorStop(0.4, "red");
        gradient.addColorStop(0.6, "magenta");
        gradient.addColorStop(0.8, "purple");
        gradient.addColorStop(1, "blue");
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.lineWidth = 2
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}

function updatingParticlesArray(){
    for (let i = 0; i < 200; i++) {
        particlesArray.push(new Particles())        
    }
}
updatingParticlesArray()

function handleParticles(){
    for (let i= 0; i< particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1)
            i--
        }
    }
}

function AfterAnimation(){
    if (particlesArray.length == 0) {
        let mainContainer = document.getElementById("main-container")
        mainContainer.style.display = "block"
        canvas.style.display = "none"
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleParticles()
    AfterAnimation()
    requestAnimationFrame(animate)
    
}
animate()
