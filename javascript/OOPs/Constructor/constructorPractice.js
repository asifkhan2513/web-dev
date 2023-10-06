class railwaysBooking {
  constructor(name, train) {
    console.log("There is constructor called" + name + " " + train);
    this.name = name;
    this.train = train;
  }
  submit() {
    console.log(`${this.name} form submitted ${this.train}`);
  }
  cancel() {
    console.log(`${this.name} form is cancled ${this.train}`);
  }
}
let asif = new railwaysBooking("Asif", 12542);
asif.submit();

// Exapmle second start from here

class railwaysBooking1 {
  constructor(name, train) {
    this.name = name;
    this.train = train;
  }
  preview() {
    // console.log(`${this.name} s ticket is   succesfully in ${this.train}`)
    if (this.train == 0) {
      console.log("your ticket hass been cancelled");
    } else {
      console.log(`${this.name} s ticket is   succesfully in ${this.train}`);
    }
  }
  submit() {
    console.log(`${this.name} s ticket booked succesfully in ${this.train}`);
  }
  cancel() {
    console.log(`${this.name} s ticket cancle succesfully in ${this.train}`);
    this.train = 0;
  }
}
let asif1 = new railwaysBooking1("asif", 12542);
asif1.preview();
asif1.submit();
asif1.cancel();
asif1.preview();
