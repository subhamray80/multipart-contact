function add_sub(el){
if (el.checked)
el.form.elements['knowledge'].value+=el.value;
else{
var re=new RegExp('(.*)'+el.value+'(.*)$');
el.form.elements['knowledge'].value=el.form.elements['knowledge'].value.replace(re,'$1$2');
}
document.getElementById("knowledge").value = checkboxesChecked + " ,";
}
