(function () {
    //Declarations
    let name1 = "Darren"
    let name2 = "Blade"

    //Home
    let welcome = "Welcome"
    let welcomeText = "Welcome to our site"

    //Projects
    let projects = "Projects"

    let project1 = "erwerw"
    let project2 = "twtrfhs"
    let project3 = "fkhyd" 

    //Services
    let skills = "Skills"

    let darrenSkill1 = "hbgs"
    let darrenSkill2 = "wrgsd"
    let darrenSkill3 = "luik"

    let bladeSkill1 = "afthth"
    let bladeSkill2 = "lhgbhc"
    let bladeSkill3 = "zfsgre"

    //About
    let darrenDetails = "ogftgngbd"
    let bladeDetails = "dqfvrh"
    let resume = "Resumes"

    //Text injections
    //Home
    function displayText() {
        switch (document.title) {
            case "Lab 1 - Home":
                let mainContent = document.getElementsByTagName("main")[0]
                mainContent.setAttribute("class", "container")

                let welcomeMessage = document.createElement("h1")
                welcomeMessage.setAttribute("id","WelcomeMessage")
                welcomeMessage.setAttribute("class", "mt-3")
                
                welcomeMessage.textContent = welcomeText
            
                mainContent.appendChild(welcomeMessage)
                break;
            
            case "Lab 1 - Products":
                let mainProduct = document.getElementsByTagName("mainProduct")[0]
                mainProduct.setAttribute("class", "container")

                let productMessage = document.createElement("h1")
                productMessage.setAttribute("id","ProductMessage")
                productMessage.setAttribute("class", "mt-3")

                let productString = `${ projects } ${ name1 }`
            
                productMessage.textContent = productString
            
                mainProduct.appendChild(productMessage)

                break;
                
                
        }

    }
    //Projects
    function changeProductsLink() {
        document.getElementById('products').textContent = " Projects"
    }

    //Skills

    //About


    //Add new nav bar link

    //Add nav bar at the bottom, fixed + copywrite

    //Contact Form
    addEventListener('submit', submitForm => {
        let form = document.querySelectorAll('input')

        console.log("Name: " + form[0].value + "\nPhone Number: " + form[1].value + "\nEmail: " + form[2].value + "\nMessage: " + form[3].value)

        redirectHome()
        event.preventDefault()
    })

    function redirectHome() {
        let redirectMessage = document.getElementById("redirectMessage")
        redirectMessage.innerHTML = "<b>Successfully Submitted! Page will redirect soon..."

        
        setTimeout(home, 3000)
    }

    function home() {
        let home = document.location.href = "./"
    }

    function Start() {
        console.log("App Started!")

        changeProductsLink()
        displayText()
    }

    window.addEventListener("load", Start)
})()