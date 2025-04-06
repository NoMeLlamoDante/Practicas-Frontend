// Username pattern="/^[A-Za-z]+[A-Za-z0-9_-]{5,19}$"
// email pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
function validarUsuario(usuario) {
    // flags
    let condition_1 = false;
    let condition_2 = false;
    let condition_3 = false;
    
    const p_1 = document.getElementById("user_1");
    const p_2 = document.getElementById("user_2");
    const p_3 = document.getElementById("user_3");
    if (usuario.length > 3) {
        //Condition 1 {6,20}
        condition_1 = length_between(usuario, 20, 6);
        print_result(condition_1, p_1);
        
        //Condition 2 start with leter
        condition_2 = starts_with(usuario, "[a-z]");
        print_result(condition_2, p_2);
        
        //Condition 3 contains leter, numbers or - _
        condition_3 = !usuario.match("[^a-z0-9\-_]");
        print_result(condition_3, p_3);

        // To lower case
        document.getElementById("username").value = usuario.toLowerCase();
    } else {
        p_1.style.color = "inherit";
        p_2.style.color = "inherit";
        p_3.style.color = "inherit";
    }
    return condition_1 && condition_2 && condition_3
}

function validarCorreo(correo) {
    // flags
    let condition_1 = false;
    let condition_2 = false;
    let condition_3 = false;
    
    const p_1 = document.getElementById("mail_1");
    const p_2 = document.getElementById("mail_2");
    const p_3 = document.getElementById("mail_3");
    if (correo.length > 5) {
        //Condition 1 {6, 30}
        condition_1 = length_between(correo, 30, 6);
        print_result(condition_1, p_1);

        //Condition 2
        mail_regex = "[a-z0-9\-\_\.]+@[a-z0-9\-]+.[a-z]{2,}(.[a-z]{2,})?"
        regex_result = correo.match(mail_regex);
        if (regex_result) {
            condition_2 = regex_result[0] === correo;
        }
        print_result(condition_2, p_2);
        
        
        //Condition 3 contains leters, 
        condition_3 = !correo.match("[^a-z0-9\-_\.@]");
        print_result(condition_3, p_3);

        //turn to lowercase
        document.getElementById("email").value = correo.toLowerCase();
    } else {
        p_1.style.color = "inherit";
        p_2.style.color = "inherit";
        p_3.style.color = "inherit";
    }
}

// min, max chars
function length_between(text, max, min = 0) {
    return text.length >= min && text.length <= max;
}
// start with
function starts_with(text, regex) {
    const first_char = text.slice(0,1);
    return first_char.match(regex);
}
//Change element color by condition
function print_result(condition, element) {
    const succes_color = "#16a085";
    const fail_color = "firebrick";
    if (condition) element.style.color = succes_color;
    else element.style.color = fail_color;
}