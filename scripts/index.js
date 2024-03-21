class Activity {
    constructor ({id,title,description,imgUrl}){
        this.id=id
        this.title=title
        this.description=description
        this.imgUrl=imgUrl
    }
}

class Repository {
    constructor() {
        this.activities= [];
        this.id=0
    }
    getAllActivities(){
        return this.activities
    }
    createActivity(act) {
        this.id++ ;     
        const activity = new Activity({ ... act, id: this.id});
        this.activities.push(activity);
      }

    deleteActivity(id){
        this.activities = this.activities.filter(activity => activity.id !== id)
    }

 }

 const repository= new Repository()

 function createHTMLActivity(activity) {
    const {id ,title ,description ,imgUrl}=activity

    const htmlTitle = document.createElement("h3")
    htmlTitle.innerHTML= title 

    const htmlDescription = document.createElement("p")
    htmlDescription.innerHTML = description 
    
    const htmlImg = document.createElement("img")
    htmlImg.src = imgUrl

    const card = document.createElement("div")
    card.className = "card"
    card.appendChild(htmlTitle);
    card.appendChild(htmlDescription);
    card.appendChild(htmlImg);
    return card
 }


function convertAllActivities(){
  const containerActivities = document.getElementById("container"); 
  containerActivities.innerHTML=""

  const activities=repository.getAllActivities()
  const htmlActivities= activities.map((activity)=>createHTMLActivity(activity));

  htmlActivities.forEach(activityHTML=>{
    containerActivities.appendChild(activityHTML)
  })
}

const buttonSubmit = document.querySelector("#add")

function buttonHandler(){
    const titleInput = document.getElementById("tituloInput") 
    const descriptionInput = document.getElementById("descripcionInput")
    const imgInput = document.getElementById("urlImagenInput")
  
    const titleValue = titleInput.value
    const descriptionValue = descriptionInput.value
    const imgValue = imgInput.value
  
    if (!titleValue || !descriptionValue || !imgValue) {
        alert("Por favor llene todos los campos")
        return 
  }
  
    repository.createActivity({
    title: titleValue,
    description: descriptionValue,
    imgUrl: imgValue
    })

    convertAllActivities()

    titleInput.value = ""
    descriptionInput.value = ""
    imgInput.value = ""
}


buttonSubmit.addEventListener("click", buttonHandler)


module.exports = {Activity, Repository}


  
