class Activity {
    constructor (id,title,description,imgUrl){
        this.id=id
        this.titulo=title
        this.descripcion=description
        this.imgUrl=imgUrl
    }
}

class Repository {
    constructor() {
        this.activities= []
    }
    getAllActivities(activity){
        this.activities.push(activity);
    return this.activities
    }
    createActivity(nombre) {
        const nuevaActividad = {
          nombre: nombre,
        };
        this.activities.push(nuevaActividad);
      }

    deleteActivity(id){
        this.activities = this.activities.filter(activity => activity.id !== id)
    }

    
}