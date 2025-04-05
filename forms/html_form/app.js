// Username pattern="/^[A-Za-z]+[A-Za-z0-9_-]{5,19}$"
// email pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
const username = document.getElementById("username");
const succes_color = "#16a085";
const fail_color = "firebrick";

function validarUsuario(value) {
    // flags
    const flag_condition_1 = false;
    const flag_condition_2 = false;
    const flag_condition_3 = false;
    
    //Condition 1 {6,20}
    const user_condition_1 = document.getElementById("#user_1");
    if (value.length > 3) {
        if (value.length >= 6 && value.length <= 20) {
            user_condition_1.style.color = succes_color;
            condition_1 = true;
        } else
        user_condition_1.style.color = fail_color;
    } else {
        user_condition_1.style.color = "inherit";
    }

    //Condition 2 start with leter
    const user_condition_2 = document.getElementById("#user_2");
    if (value.length > 3) {
        const first_char = value.slice(0,1);
        if (first_char.match("[a-zA-Z]")) {
            user_condition_2.style.color = succes_color;
            condition_2 = true;
        } else
        user_condition_2.style.color = fail_color;
    } else {
        user_condition_2.style.color = "inherit";
    }
    
    //Condition 3
    const user_condition_3 = document.getElementById("#user_3");
    if (value.length > 3) {
        if (!value.match("[^a-zA-Z0-9\-_]")) {
            user_condition_3.style.color = succes_color;
            condition_3 = true;
        } else
        user_condition_3.style.color = fail_color;
    } else {
        user_condition_3.style.color = "inherit";
    }
}


// ! Make reusable conditions
// min, max chars
// start with
// exclude