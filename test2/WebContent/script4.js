$(function(){
	//alert(1)
});

function inputCheck(){
	
str="선택한 값은?\n";

	
	if($('input[name=price]').val()==""){
		alert("가격누락");
		return false;
	}
	str+=$('input[name=price]').val()+"\n";
	
	if(isNaN($('input[name=price]').val())==true){
		alert("숫자만 입력해주세요");
		return false;
	}
	if($('input[name=date]').val()==""){
		alert("입고일 누락");
		return false
	}
	
	str+=$('input[name=date]').val()+"\n";
	
	if($('select option:selected').val()=="선택"){
		alert("수량누락");
		return false;
	}
	str+=$('select option:selected').val()+"\n";
	
	if(!$('input[name=kind]:checked').is(":checked")){
		alert("배송비 누락");
		return false;
	}
	
	str+=$('input[name=kind]:checked').val()+"\n";
	
	//str+="\n"
	


	alert(str);
}