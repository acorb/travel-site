class Person {
	constructor(fullname, favcolor) {
		this.name = fullname;
		this.favColor = favcolor;
	}
	
	greet() {
		console.log("Hi there, my name is " +this.name + " and my favorite color is " + this.favColor + ".");
	}
}

export default Person;