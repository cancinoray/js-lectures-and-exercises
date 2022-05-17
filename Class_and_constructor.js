//Create a Netflix TV Show class with a constructor that makes Netflix TV
//Shows with 4 properties and 3 methods

// class MakeNetflixTVShows {
// 	constructor(title , genre , rating , numOfEp){
// 		this.title = title
// 		this.genre = genre
// 		this.rating = rating
// 		this.numOfEp = numOfEp
// 	}

// 	play(){
// 		console.log(this.title, 'is now playing . . . ')
// 	}
// 	stop(){
// 		console.log('Stopping . . . ')
// 	}
// 	saveToList(){
// 		console.log('Saved To List . . . ')
// 	}
// }


// let bridgerton = new MakeNetflixTVShows('Bridgerton' , 'Period Romantic Drama' , '99%' , 16)

// console.log(bridgerton.play())


class Hero {
	constructor(name , type , stregth , attribute){
		this.name = name
		this.type = type
		this.stregth = stregth
		this.attribute = attribute
	}
}


const Ray = new Hero('Ray' , 'Wizard' , '98' , 'wind and water')
const Andrei = new Hero('Andrei' , 'Professor' , '120' , 'water and fire')

console.log(Ray.type)