var ul=document.getElementById('list');
var li;

var addButton=document.getElementById('add');
addButton.addEventListener('click',addItem)

var removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeItem)


function addItem(){
   // console.log('add button clicked')
   var input=document.getElementById('input')
   ul=document.getElementById('list')
   var textnode= document.createTextNode(input.value)
   if(input.value===''){
       return false
   }else{
       //create li
       li=document.createElement('li')
       //create checkbox
       var checkbox= document.createElement('input')
       checkbox,type='checkbox'
       checkbox.setAttribute('id','check')
       //create label
       var label=document.createElement('label')
       label.setAttribute('for','item')
       //add these elements on web
       ul.appendChild(label);
       li.appendChild(checkbox);
       label.appendChild(textnode);
       li.appendChild(label);

       //item will be added at first in unorderList(ul)
       ul.insertBefore(li,ul.childNodes[0]); 
       setTimeout(()=>{
           li.className='visual'
       }, 5)

       input.value='';
   }
}

function removeItem(){
    //console.log('Item is removed')
    li=ul.children
    for(let i=0;i<li.length;i++){
      //  console.log(li[i])
      while(li[i] && li[i].children[0].checked){
          ul.removeChild(li[i])
      }
    }
}

