// Username pattern="/^[A-Za-z]+[A-Za-z0-9_-]{5,19}$"
// email pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
function validarUsuario(value) {
    // flags
    let condition_1 = false;
    let condition_2 = false;
    let condition_3 = false;
    
    const p_1 = document.getElementById("#user_1");
    const p_2 = document.getElementById("#user_2");
    const p_3 = document.getElementById("#user_3");
    if (value.length > 3) {
        //Condition 1 {6,20}
        condition_1 = length_between(6, 20, value);
        print_result(condition_1, p_1)
        
        //Condition 2 start with leter
        condition_2 = starts_with(value, "[a-zA-Z]");
        print_result(condition_2, p_2);
        
        //Condition 3
        condition_3 = !value.match("[^a-zA-Z0-9\-_]");
        print_result(condition_3, p_3);
    } else {
        p_1.style.color = "inherit";
        p_2.style.color = "inherit";
        p_3.style.color = "inherit";
    }
    return condition_1 && condition_2 && condition_3
}

// min, max chars
function length_between(min = 0, max, text) {
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