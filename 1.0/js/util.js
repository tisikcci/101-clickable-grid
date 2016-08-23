function showCell(){
	var num=document.getElementById("number").value;
	if(isPostiveNum(num)&&num>0&&num<37){
		drowCell(num);
	}else{
		alert("请输入大于0小于37的正整数");
	}
}

function isPostiveNum(s){
	if(s!=null){
		var r,re;
		re=/\d*/i;
		r=s.match(re);
		return(r==s)?true:false;
	}
	return false;
}

function drowCell(num){
	var fragment=document.createDocumentFragment(),
		div=document.getElementById("cell-weapper");
	var cell=null,
		i,
		j;
    div.innerHTML="";
	for(i=0;i<num;i++){
		for(j=0;j<num;j++){
			cell=document.createElement("div");
			cell.appendChild(document.createTextNode(i * num + (j+1)));
			cell.setAttribute("class","cell");
			fragment.appendChild(cell);
		}	
	}
	div.appendChild(fragment);
	setCellWidth(num,".cell");
}

function setCellWidth(num,className){
	var i,
		len,
		width,
		height,
		fontSize,
		classCell;
	width=cellWith(num);
	height=width;
	fontSize = width/2;
	classCell=document.querySelectorAll(className);
	for(i=0,len=classCell.length;i<len;i++){
		classCell[i].style.width=width + "px";
		classCell[i].style.height=height + "px";
		classCell[i].style.fontSize= fontSize + "px";
		// classCell[i].style.backgroundColor="#55C0FC";
	}
}

function cellWith(num){
	var main,
		mainWidthPX,
		mainWidth,
		width;
	main = document.getElementById("main");
	mainWidthPX=GetCurrentStyle(main,"width");
	mainWidth = parseFloat(mainWidthPX.slice(0,-2));
	width = (mainWidth-num*2)/num;
	return width;
}

function GetCurrentStyle(obj, prop){       
    if(obj.currentStyle){          
      return obj.currentStyle[prop];       
    }        
    else if(window.getComputedStyle){                 
      return window.getComputedStyle(obj,null)[prop];       
    }        
    return null;     
  }    

 function resetCell(){
 	var div;
	div=document.getElementById("cell-weapper");
	div.innerHTML="";
 }

window.onload=function(){
	cellListener=document.getElementById("cell-weapper");
	cellListener.addEventListener("click",function(event){
		if(event.target||event.target.className=="cell"){
			console.log(event.target.innerHTML);
		};
	});
}