// function getWeather(location,callback){
//     callback(undefined,75);
//     callback();
// }
// getWeather('bangalore',function(err,temp){
//   if(err){
//     console.log('err',err);
//   }else {
//     console.log('success',temp);
//   }
// });
//
// function getTempWeather(location){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve(78);
//       reject('not found');
//     },1000);
//   });
// }
// getTempWeather('bangalore').then(function(temp){
//   console.log('success',temp);
// },function(err){
//   console.log('failure',err)
// })
// function addPromise(a,b){
//   return new Promise(function(resolve,reject){
//     if(typeof a==='number' && typeof b ==='number'){
//           resolve(a+b);
//     }else  reject('not a number');
//   });
// }
// addPromise('n',4).then(function(add){
//   console.log("addition done",add);
// },function(err){
//   console.log("failed",err);
// });
// addPromise(5,1).then(function(add){
//   console.log("addition done",add);
// },function(err){
//   console.log("failed",err);
// });
// console.log('i am bavj');
 var names=["hari","sri","srihari"];
//
//
//  name.forEach((name)=>{
//    console.log(name);
//  });
var person={
  name:'hari',
  greet:function(){
    names.forEach((name)=>{
      console.log(this.name  +  ' hi '  +  name);
    })
  }
}
person.greet();

var addMe=(a,b)=> a+b;
console.log(addMe(1,4));
