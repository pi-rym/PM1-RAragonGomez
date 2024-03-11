class Book {
    #name
    #director

    constructor(name, director) {
        this.#name = name
        this.#director = director
    }

    set name(newName){
        if(newName === "string"){
            this.#name = newName 
        } else {
            console.error("Name should be a string")
        }
    }

    set director(newDirector){
        if(newDirector === "string"){
            this.#director = newDirector 
        } else {
            console.error("Name should be a string")
        } 
    }

    get name(){
        return this.#name
    }

    get director(){
        return this.#director
    }

    getInfo(){
        return {
            name : this.#name,
            director: this.#director
        }
    }
}

const harryPotter = new Book('Harry Potter and the Order of the Phoenix', "David Yates")

console.log(harryPotter.director)

console.log(harryPotter.getInfo())