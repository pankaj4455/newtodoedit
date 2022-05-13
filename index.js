

// function validateForm(){
//     var name=document.getElementById('fname').value;
//     var re=/^[A-Za-z]+$/;
//     if(name==""){
//         document.getElementById('message').innerHTML="please enter your name ?";
//         return false;
//     }
//     if(name.length<3){
//         document.getElementById('message').innerHTML="username must be three chareacter ?";
//         return false;
//     }
//     if(name.length>20){
//         document.getElementById('message').innerHTML="username must be less than 20 ?";
//         return false;
//     }
//     if(name.match(re))
//     true;
  
//     else{
    
//             document.getElementById('message').innerHTML="only alaphabet allowed ?";
//             return false;
//         }

//         var x =document.getElementById('pass').value;
//     if(x.indexOf('@')<=0){
//         document.getElementById('error').innerHTML="invalid @ position ?";
//         return false;
//     }
//     if((x.charAt(x.length-4) !=='.' && x.charAt(x.length-3)!==".")){
//       document.getElementById('error').innerHTML="invalid dot operator position ?";
//         return false;
//     }

//   var p=document.getElementById('password').value;
//   var ps=document.getElementById('passwords').value;
//     if(p==""){
//         document.getElementById('pas').innerHTML="please enter your password ?" ;
//         return false;
//     }
//     if(p.length < 4){
//     document.getElementById('pas').innerHTML="password must be four character ?";
//     return false;
// }
// if(p.length > 20){
//     document.getElementById('pas').innerHTML="password must be lass than twenty character ?";
//     return false;
// }
// if(p!=ps){
//     document.getElementById('pas').innerHTML="password does not match ?";
//     return false;
// }bo
// }

    
// let g="6307899971";
// let c=/^\d{10}$/;
// let b=g.match(c);
// console.log(b);



// function func1(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);
  
//     var x = 2;
//     let y = 12;
//   }
//   func1();
//   undefined
//   VM45:3 2
//   VM45:4 12
//   function func1(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//       var x = 12;
//       let y = 22;
//     },3000);
  
//     var x = 2;
//     let y = 12;
//   }
//   func1();
//   undefined
//   VM205:3 undefined

// /

 //x();
//function x(){
  //  setTimeout(()=>{
        
   // },)

//}


//x();
//function x(){
  //  setInterval(()=>{
    //    console.log('hello ranjan');
    //},3000)
//}

//function myFun(){
  //  let bg=document.getElementById('text').value;
    //document.getElementById('result').style.backgroundColor=bg;
//}

// 
// function printNumbers(first, second, first) {
//   console.log(first, second, first);
//   }
//   printNumbers(1, 2, 3);
//   VM43:2 3 2 3
//const printNumbersArrow = (first, second, first) => {
  //console.log(first, second, first);
  //}
  //printNumbersArrow(1, 2, 3);
  //(function(){
    //let a = b = 3;
  //})();
  
  //console.log("a defined? " + (typeof a !== 'undefined'));
  //console.log("b defined? " + (typeof b !== 'undefined'));


  


//let x=["a","5","4"];
 //let findDublicate =x.reduce((pre,cur)=>{
  //return pre+cur;

//})

// let y=x.forEach((elem,ind)=>{
//   return elem;

// })
// console.log(y);

//x.forEach((elem)=>{
  //console.log(findDublicate);
//})

 //console.log(undefined+null);
 //console.log(undefined+true);
 //console.log(undefined+3);
 //console.log(null*3);

 //console.log("4"+"6"-4+5+1);
 //todo App
  //function myFun(){
   //let inputValue=document.getElementById('inputValue').value;
   //let list =document.getElementById('list');
    //let li =document.createElement('li');
    //li.innerHTML=inputValue;
    //list.appendChild(li);
    //let delt=document.createElement('button');
    //delt.innerHTML='x';
    //li.appendChild(delt);
    //document.getElementById('inputValue').value="";

  //}
  //let ul=document.querySelector('ul');
  //ul.addEventListener('click',(e)=>{
    //let list=document.getElementById('list');
    //let li=e.target.parentNode;
    //list.removeChild(li);

  //})

  // let person={
  //   name:'nazir',
  //   lastname:"hussain",
  //   greet:function(x){
  //     console.log(`${this.name} ${this.lastname} ${x}`)
  //   }
  // }
  // let member={
  //   name:"ranjan",
  //   lastname:'hkan',
  // }
  // let x=person.greet.bind(member);
  // x(10);

  // function ouuter(){
  //   var x=10;
  //   function inner(){
  //     let y=20;
  //     console.log(`${x} ${y}`);
  //   }
  //   return inner;
  // }
  // let z=ouuter();
  // z();

  
  // for(let i=0;i<10;i++){
  //   setTimeout(()=>{
  //     console.log(i);
  //   },1000);
  // }


  //todo app with edit button and delet button


  function myFun(){
    let values=document.getElementById('inputValue').value;
    let list=document.getElementById('list');
  let li=document.createElement('li');
  li.setAttribute('id','deleted');
  let input=document.createElement('input');
    input.type="text";
    input.value=values;
    
    list.appendChild(li);
    li.appendChild(input)
    //let btn=document.createElement('button')
    //btn.innerHTML="deletItem";
    //btn.setAttribute('id','buton')
    // li.appendChild(btn)
    document.getElementById('inputValue').value="";
    }
   

    function delet(){
      let list=document.getElementById('list');
      let li=document.getElementById('deleted');
      list.removeChild(li);
    }



   

      
    


  


  