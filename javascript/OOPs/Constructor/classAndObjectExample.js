class railways {
  submit() {
    console.log(`${this.name}  form is subbmited in the ${this.train}`)
  }
  cancel() {
    console.log(`${this.name}  form is canceled in the ${this.train}`)
  }
  fill(givenName,trainNumber) {
   this.name = givenName;
   this.train= trainNumber;
  }
}

let A = new railways();
A.fill("Asif",12542)
let A2 = new railways();
A2.fill("Asif2",12541)
A.submit();
A2.submit();
A2.cancel();
