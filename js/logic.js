// $(document).ready(function(){
//     alert("I AM LINKED");
// });

function linkRadioWithInput(){
    $("#other-passport-type").focus();
    $("#other-passport-type").change(function(){
        $("#other-passport").val($(this).val());
        alert($("#other-passport").val());
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



function submitForm(){
    if (true || isFormValid()) {
        $('form').submit();
}


}
/**
 * Created by Окси on 14.07.2017.
 */
