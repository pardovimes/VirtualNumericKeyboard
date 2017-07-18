jQuery.fn.TeclNum = function(lines = 3,rand = false){
	return this.each(function(index){
		//id of the div
		var id= $(this).attr('id');
		//readonly
		$(this).attr('readonly', true);
		//add the images
		$(this).after('<div id="teclNum'+id+'"></div>');
		
		//array for the number images
		var nums = new Array();
		for(var i=0;i<10;i++){
			nums.push('<img class="bKey" parent="'+id+'" value="'+i+'" src="images/'+i+'.png"></img>');
		}
		
		//shuffle numbers
		if(rand) shuffle(nums);
		
		//add buttons to div
		for(var i=1;i<nums.length+1;i++){
			$('#teclNum'+id).append(nums[i]);
			if(i%lines==0) $('#teclNum'+id).append('<br>');
		}
		
		//add the delete button
		$('#teclNum'+id).append('<img class="bKey" parent="'+id+'" value="-1" src="images/-1.png"></img>');
		
		//binding the actions
		$('.bKey').bind('click', clickNum);
		$(this).bind('click', showPanel);
	});
};


//custom function to shuffle
shuffle = function(o){
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

//shows/hidde panel
function showPanel(){
	var id = $(this).attr('id');
	$('#teclNum'+id).fadeToggle(400);
}

//on click number
function clickNum(){
	var parent=$(this).attr('parent');
	
	var oldVal=$('#'+parent).val();
	var newVal=$(this).attr('value');
	var val='';
	
	if(newVal=='-1') val = oldVal.substring(0, oldVal.length-1);	
	else val=oldVal+newVal;
	
	$('#'+parent).val(val);
}
