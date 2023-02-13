(function () {
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
                
                welcomeMessage.textContent = "Welcome to our incredible and very interesting site"
            
                mainContent.appendChild(welcomeMessage)
                break;
            
            case "Lab 1 - Products":
                let mainProduct = document.getElementsByTagName("mainProduct")[0]
                mainProduct.setAttribute("class", "container")

                let titleProjects = document.createElement("h1")
                titleProjects.setAttribute("id","ProductMessage")
                titleProjects.setAttribute("class", "mt-3")

                titleProjects.textContent = "Projects"
                mainProduct.appendChild(titleProjects)

                let messageProjects = document.createElement("h3")
                messageProjects.setAttribute("class","mt-3")
                messageProjects.textContent = "Here is a list of our 3 favorite projects:"
                mainProduct.appendChild(messageProjects)

                let favProjects1 = document.createElement("h5")
                favProjects1.setAttribute("class","mt-5")
                favProjects1.textContent = "1. The Moon Landing"
                mainProduct.appendChild(favProjects1)

                let favProjectPic1 = document.createElement("img")
                favProjectPic1.setAttribute("src", "../images/moonLanding.jpg")
                favProjectPic1.setAttribute("width","500")
                mainProduct.appendChild(favProjectPic1)

                let favProjects2 = document.createElement("h5")
                favProjects2.setAttribute("class","mt-5")
                favProjects2.textContent = "2. The Mars Rover"
                mainProduct.appendChild(favProjects2)

                let favProjectPic2 = document.createElement("img")
                favProjectPic2.setAttribute("src", "../images/marsRover.jpg")
                favProjectPic2.setAttribute("width","500")
                mainProduct.appendChild(favProjectPic2)

                let favProjects3 = document.createElement("h5")
                favProjects3.setAttribute("class","mt-5")
                favProjects3.textContent = "3. The James Webb Telescope"
                mainProduct.appendChild(favProjects3)

                let favProjectPic3 = document.createElement("img")
                favProjectPic3.setAttribute("src", "../images/telescope.jpg")
                favProjectPic3.setAttribute("width","500")
                favProjectPic3.setAttribute("class", "mb-5")
                mainProduct.appendChild(favProjectPic3)
                break;

            case "Lab 1 - Services":
                let mainServices = document.getElementsByTagName("mainServices")[0]
                mainServices.setAttribute("class", "container")

                let titleServices = document.createElement("h1")
                titleServices.setAttribute("id","ServicesMessage")
                titleServices.setAttribute("class", "mt-3")

                titleServices.textContent = "Services"
                mainServices.appendChild(titleServices)

                let message = document.createElement("h3")
                message.setAttribute("class","mt-3")
                message.textContent = "Here are 3 skills that Darren and Blade can offer: "
                mainServices.appendChild(message)

                let skill1 = document.createElement("h5")
                skill1.setAttribute("class","mt-5")
                skill1.textContent = "1. Object Oriented Programming"
                mainServices.appendChild(skill1)

                let skillPic1 = document.createElement("img")
                skillPic1.setAttribute("src", "../images/code.jpg")
                skillPic1.setAttribute("width","500")
                mainServices.appendChild(skillPic1)

                let skill2 = document.createElement("h5")
                skill2.setAttribute("class","mt-5")
                skill2.textContent = "2. Front End Development"
                mainServices.appendChild(skill2)

                let skillPic2 = document.createElement("img")
                skillPic2.setAttribute("src", "../images/frontEnd.jpg")
                skillPic2.setAttribute("width","500")
                mainServices.appendChild(skillPic2)

                let skill3 = document.createElement("h5")
                skill3.setAttribute("class","mt-5")
                skill3.textContent = "3. Database Devleopment"
                mainServices.appendChild(skill3)

                let skillPic3 = document.createElement("img")
                skillPic3.setAttribute("src", "./images/Database.png")
                skillPic3.setAttribute("width","500")
                skillPic3.setAttribute("class", "mb-5")
                mainServices.appendChild(skillPic3)

                break;
            
            case "Lab 1 - About":

                let mainAbout = document.getElementsByTagName("mainAbout")[0]
                mainAbout.setAttribute("class", "container")

                let titleAbout = document.createElement("h1")
                titleAbout.setAttribute("id","ServicesAbout")
                titleAbout.setAttribute("class", "mt-3")

                titleAbout.textContent = "About Us"
                mainAbout.appendChild(titleAbout)

                let aboutDarren = document.createElement("h3")
                aboutDarren.setAttribute("class","mt-5")
                aboutDarren.textContent = "Darren"
                mainAbout.appendChild(aboutDarren)

                let aboutDarrenContent = document.createElement("h5")
                aboutDarrenContent.setAttribute("class","mt-3")
                aboutDarrenContent.textContent = "A up-and-coming programmer in love with all things the fall within the Nerd/Geek realm."
                mainAbout.appendChild(aboutDarrenContent)

                let darrensResume = document.createElement("a")
                darrensResume.setAttribute("class","mt-3")
                darrensResume.setAttribute("href","../content/RESUME_OLD Darren Dickson_OCTOBER 2016.docx.pdf")
                darrensResume.textContent = "Link to Darren's Resume"
                mainAbout.appendChild(darrensResume)

                let aboutBlade = document.createElement("h3")
                aboutBlade.setAttribute("class","mt-5")
                aboutBlade.textContent = "Blade"
                mainAbout.appendChild(aboutBlade)

                let aboutBladeContent = document.createElement("h5")
                aboutBladeContent.setAttribute("class","mt-3")
                aboutBladeContent.textContent = "A up-and-coming programmer in love with all things the fall within the Nerd/Geek realm."
                mainAbout.appendChild(aboutBladeContent)

                let bladesResume = document.createElement("a")
                bladesResume.setAttribute("class","mt-3")
                bladesResume.setAttribute("href","../content/Blade_Lucas_Resume_2022.pdf")
                bladesResume.textContent = "Link to Blade's Resume"
                mainAbout.appendChild(bladesResume)

                break;

            case "Lab 1 - Contacts": 
                let mainContact = document.getElementsByTagName("mainContact")[0]
                mainContact.setAttribute("class", "container")

                let titleContact = document.createElement("h1")
                titleContact.setAttribute("id","ServicesAbout")
                titleContact.setAttribute("class", "mt-3")

                titleContact.textContent = "Contact Us"
                mainContact.appendChild(titleContact)
                
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
    let navbar = document.querySelector("ul")
    let contactUsTab = document.getElementById("contactUsTab") 
    let humanResourcesTab = document.createElement("li")
    humanResourcesTab.innerHTML = '<a class="nav-link" href="#"><i class="fa-solid fa-handshake"></i><span id="hr"> Human Resources</span>'

    navbar.insertBefore(humanResourcesTab,contactUsTab)

    //Add nav bar at the bottom, fixed + copywrite

    let copyRightLocation = document.getElementById("copyRight") 

    let copyRightBar = document.createElement("nav")
    copyRightBar.setAttribute("class", "navbar fixed-bottom navbar-light")
    copyRightBar.innerHTML = '<div class="container-fluid"><a class="navbar-brand" href="#">&#169;CopyRight 2023</a></div>'

    copyRightLocation.appendChild(copyRightBar)

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