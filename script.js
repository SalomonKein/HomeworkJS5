let newUser;
let firstName;
let lastName;


function createNewUser() {
    firstName = prompt('Imput number firstName', 'firstName');
    lastName = prompt('Imput number lastName', 'lastName');
    newUser = {
        firstName,
        lastName,
        get age() {
            let age;
            let now = new Date();
            let birthd = new Date((birthday.split(".")[2]), ((birthday.split(".")[1]) - 1), ((birthday.split(".")[0]) - 1));
            age = (Math.round((now.getTime() - birthd.getTime()) / (24 * 3600 * 1000 * 365.2425)));

            return age;

        },
        set age(value) {

            this.age = value;
        },


    };
    return;

}

createNewUser();

let birthday;

function askBirthday() {
    birthday = prompt('Imput you birthday, dd.mm.yyyy', 'dd.mm.yyyy');
    newUser.birthday = birthday.trim();
}
askBirthday();

newUser.getLogin = function() {

    return (firstName[0].toUpperCase() + lastName.toLowerCase() + birthday.split(".")[2]);
};

console.log(newUser);
console.log(newUser.age);
console.log(newUser.getLogin());