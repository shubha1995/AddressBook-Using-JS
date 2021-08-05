//Create Address Book
class Contact {
    
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
// Getter & Setter method and validate contact
get firstName() {
    return this.is_firstName;
  }
  set firstName(firstName) {
    let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (firstNameRegex.test(firstName)) this.is_firstName = firstName;
    else  "Invalid First name";
  }
  get lastName() {
    return this.is_lastName;
  }
  set lastName(lastName) {
    let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (lastNameRegex.test(lastName)) this.is_lastName = lastName;
    else  "Invalid Last name";
  }
  get address() {
    return this.is_address;
  }
  set address(address) {
    let addressRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (addressRegex.test(address)) this.is_address = address;
    else  "Invalid address";
  }
  get city() {
    return this.is_city;
  }
  set city(city) {
    let cityRegex = RegExp("^[A-Za-z]{2,}$");
    if (cityRegex.test(city)) this.is_city = city;
    else  "Invalid City name";
  }
  get state() {
    return this.is_state;
  }
  set state(state) {
    let stateRegex = RegExp("^[A-Za-z]{2,}$");
    if (stateRegex.test(state)) this.is_state = state;
    else  "Invalid State name";
  }
  get zip() {
    return this.is_zip;
  }
  set zip(zip) {
    let zipRegex = RegExp("^[0-9]{6}$");
    if (zipRegex.test(zip)) this.is_zip = this.zip;
    else  "Invalid Zipcode";
  }
  get phoneNumber() {
    return this.is_phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    let phoneNumberRegex = RegExp("^[0-9]{2}\\s{0,1}[0-9]{10}$");
    if (phoneNumberRegex.test(phoneNumber)) this.is_phoneNumber = phoneNumber;
    else  "Invalid Phone Number";
  }
  get email() {
    return this.is_email;
  }
  set email(email) {
    let emailRegex = RegExp("^[a-zA-Z0-9_+&*#$^!-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$");
    if (emailRegex.test(this.email)) this.is_email = email;
    else "Invalid Email";
  }
//To string method for displaying contacts
toString() {
    return "First Name: " + this.firstName + " Last Name: " + this.lastName + " Address: " + this.address + " City: " + this.city
        + " State: " + this.state + " Zipcode: " + this.zip + " Phone Number: " + this.phoneNumber + " Email: " + this.email;
}
}
let contact = new Contact("Shubha", "Sankar", "Dharmanagar", "Officetilla", 
                          "Tripura", "799250", "91 8131909497", "ssbhaumikdmr@gmail.com");
console.log(contact.toString());