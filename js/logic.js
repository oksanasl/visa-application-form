// $(document).ready(function(){
//     alert("I AM LINKED");
// });

function linkRadioWithInput(){
    $("#other-passport-type").focus();
    $("#other-passport-type").change(function(){
        //$("#other-passport").val("My value");
        $("#other-passport").val($(this).val());
        alert($("#other-passport").val());
    });
}
/**
 * Created by Окси on 14.07.2017.
 */
