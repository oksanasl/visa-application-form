// $(document).ready(function(){
//     alert(m + "/" + d + "/" + y);
// });

function linkRadioWithInput(){
    $("#other-passport-type").focus();
    $("#other-passport-type").change(function(){
        $("#other-passport").val($(this).val());
        //alert($("#other-passport").val());
    });
}

function euIsChecked(){
    if ($('#euna:checked').length > 0) {
        $('input[name="eufam"]').attr("disabled", true);
    }
    else{
        $('input[name="eufam"]').attr("disabled", false);
    }
};


function declarationIsChecked(){

}

function insertName(){
    var userName = document.getElementById("username").value;
    var userSurname = document.getElementById("surname").value;
    var nameInDeclaration = document.getElementById("name-insertion");
    nameInDeclaration.append(', ' + userName + ' ' + userSurname + ',');
}

function setMaxDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if (dd < 10){
        dd = '0' + dd;
    }
    if (mm < 10){
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("dateofbirth").setAttribute("max", today);

    //document.getElementsByClassName("setmax").setAttribute("max", today);

    //alert(today);
}




function submitForm(){
    if (true || isFormValid()) {
        $('form').submit();
}


}
/**
 * Created by Окси on 14.07.2017.
 */
