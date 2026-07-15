console.log("HTML Connected")

let attempt= 3;
let lock = 0;

function collect_data(){
    const now = Date.now();
    const PasswordError = document.getElementById("PasswordError")
    const btn = document.getElementById("submit")

    if(now<lock){
        PasswordError.innerHTML="Locked Wait for 4 Minutes"
        return false;
    }

    let isNameValid = collect_name();
    let isPasswordValid = collect_PasswordValid();
    let isCheckBoxFilled=  collect_checkboxError();

    if (isNameValid && isPasswordValid && isCheckBoxFilled) {
        let n = document.getElementById("name").value;
        let p = document.getElementById("password").value;

        if (n === "Admin" && p === "Password123") {
            PasswordError.innerHTML = "Login Success";
            attempt = 3;
        } else {
            attempt--;
            if (attempt > 0) {
                PasswordError.innerHTML = `You have ${attempt} left`;
            } else {
                lock = now + (4 * 60 * 1000);
                btn.disabled = true;
                PasswordError.innerHTML = "Locked Wait for 4 Minutes";
            }
        }
    }
    
    return false;
}

function collect_name(){
    let UserName= document.getElementById("name").value;
    if(UserName === ""){
        document.getElementById("NameError").innerHTML="Name Cannot be Empty";
        return false;
    }else if(UserName.length < 4){
        document.getElementById("NameError").innerHTML="Length must be 4";
        return false;
    }
    console.log(UserName);
    return true;
}

function collect_PasswordValid(){
    let password = document.getElementById("password").value;
    if(password === ""){
        document.getElementById("PasswordError").innerHTML="Password Cannot be Empty";
        return false;
    }else if(password.length < 6){
        document.getElementById("PasswordError").innerHTML="Length must be 6";
        return false;
    }
    console.log(password);
    return true;
}

function collect_checkboxError(){
    let checkbox = document.getElementById("condition").checked;
    if(!checkbox){
        document.getElementById("CheckBoxError").innerHTML="Must Be Checked";
        return false;
    }
    return true;
}