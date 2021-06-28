/**Welcome To Address Book Program 
 * Creating a contact with first name , last name 
 * address, city , state , zip , phone number and email
*/
class Contact {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    mobileNumber;
    email;

    constructor (firstName,lastName,address,city,state,zip,mobileNumber,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    toString() {
        return "\nFirst Name    : " + this.firstName +
        "\nLast Name     : " + this.lastName +
        "\nAddress       : " + this.address +
        "\nCity          : " + this.city +
        "\nState         : " + this.state +
        "\nZip           : " + this.zip +
        "\nMobile Number : " + this.mobileNumber +
        "\nEmail         : " + this.email;
    }
}
console.log("<<<<<Welcome to AddressBook Application>>>>>");

//UC1 - Ability to Create Contact in Address Book
let ashok = new Contact("Ashok","Patel","Raipur","Pali","Rajasthan",306307,9898989898,"ak@gmail.com");
console.log(ashok.toString());