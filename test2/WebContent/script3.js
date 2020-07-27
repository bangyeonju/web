$(function(){
	//alert(1)
});

function inputCheck(){
	
	str="선택한 값은?\n";
	
	 if($('input[name=title]').val()==""){
		alert("제목누락");
		return false;
	}
	
	str += $('input[name=title]').val()+"\n";
	
	if($('input[name=author]').val()==""){
		alert("작가누락");
		return false;
	}
	str +=$('input[name=author]').val()+"\n";
	
	if($('input[name=publisher]').val()==""){
		alert("출판사누락");
		return false;
	}
	str +=$('input[name=publisher]').val()+"\n";
	
	
	if(isNaN($('input[name=price]').val())==true){
		alert("숫자만");
		return false;
	}
	

	
	if($('input[name=date]').val()==""){
		alert("날짜누락");
		return false;
	}
	str +=$('input[name=date]').val()+"\n";
	
	
	if($('input[name=price]').val()==""){
		alert("가격누락");
		return false;
	}
	
	str +=$('input[name=price]').val()
	
	
	  if($('input[name=bookstore]:checked').length==0) {
		alert("서점을 선택해주세용");
		return false;
	}
	
	$('input[name=bookstore]:checked').each(function(){
		str += $(this).val() +" ";
	});
	
	str+="\n"
	
	
	if(!$('input[name=kind]').is(":checked")){
		alert("배송비 체크 누락");
		return false;
	}
	str += $('input[name=kind]:checked').val()+"\n";
	
	 
	
	if($('select[name=count] option:selected').val()=="선택"){
		alert("보유수량 선택해주세요");
		return false;
	}  
	
	str+=$('select option:selected').val()+"\n";
	
	
	

	


	alert(str);
}