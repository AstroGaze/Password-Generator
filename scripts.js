const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
// Characters to use in the password generator

let password_1 = document.getElementById("pass1");
let password_2 = document.getElementById("pass2");
let new_password = "";
let password_containers = [password_1,password_2];

function generate_password() {
    /* for (let index = 1; index < 3; index++) {

    } */
    for (let index = 0; index < 2; index++) {

        for (let i = 0; i < 15; i++) {
            let random_number = Math.floor(Math.random() * characters.length);
            let character = characters[random_number];
            new_password += character;
        }
        password_containers[index].textContent = new_password;
        new_password = "";
    }
}

console.log(password_containers);