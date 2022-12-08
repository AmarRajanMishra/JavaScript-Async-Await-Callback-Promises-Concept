// Async Await All Concept
// Callback, Promises, async and await
const datas = [
    {
        Name:"Kamlesh",
        Age: 22,
        Gender:"Male"
    },
    {
        Name:"P. L",
        Age: 28,
        Gender:"Male"
    },
    {
        Name:"Amar",
        Age: 25,
        Gender:"Male"
    },

]
     /* Problem */
// function getData(){
//     setTimeout(()=>{
//         let output = ''
//         datas.forEach((datas, index)=>{
//             output += `<li>${datas.Name}</li>`
//         })
//         document.body.innerHTML = output;

//     }, 1000)
// }
// function createData(newData){
//     setTimeout(()=>{
//         datas.push(newData)
//     }, 2000)

// }
// getData();
// createData({
//     Name:"Rajan",
//     Age: 25,
//     Gender:"Male"
// });
          


          /* Callback */
// We Can resolve this using Callback
// function getData(){
//     setTimeout(()=>{
//         let output = ''
//         datas.forEach((datas, index)=>{
//             output += `<li>${datas.Name}</li>`
//         })
//         document.body.innerHTML = output;

//     }, 1000)
// }
// function createData(newData, myCallBack){
//     setTimeout(()=>{
//         datas.push(newData)
//         myCallBack();
//     }, 2000)

// }

// createData({
//     Name:"Rajan",
//     Age: 25,
//     Gender:"Male"
// }, getData);


             /* Promises */
//  We Also can Use Promises instead of callback

// function getData(){
//     setTimeout(()=>{
//         let output = ''
//         datas.forEach((datas, index)=>{
//             output += `<li>${datas.Name}</li>`
//         })
//         document.body.innerHTML = output;

//     }, 1000)
// }
// function createData(newData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             datas.push(newData)
//             let error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject('Something Went Wrong')
//             }
//         }, 2000)

//     })
    

// }

// createData({
//     Name:"Rajan",
//     Age: 25,
//     Gender:"Male"
// }).then(getData).catch(er => console.log(er))





            /* Async and Await */
// Async and Await => Return a Promise
function getData(){
    setTimeout(()=>{
        let output = ''
        datas.forEach((datas, index)=>{
            output += `<li>${datas.Name}</li>`
        })
        document.body.innerHTML = output;

    }, 1000)
}
function createData(newData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            datas.push(newData)
            let error = false;
            if(!error){
                resolve();
            }else{
                reject('Something Went Wrong')
            }
        }, 2000)

    })
}


async function start(){
    await createData({
        Name:"Rajan",
        Age: 25,
        Gender:"Male"
    });
    getData();

}
start();




























// CallBack Function

//1.  Any function that is passed as an argument is called a callback function
//2. A Callback is function that is to executed after another function has finished executing - hence the name 'call back'
// const fun1 = () => {
//     setTimeout(function(){
//         console.log(`welcome to fun 1`)
//     }, 4000)
    
// }
// const fun2 = () => {
//     console.log(`welcome to fun 2`)
// }
// fun1();
// fun2();

// const perOne = (friend, myCallBack) => {
//     console.log(`i am Busy right Now. i am talking to ${friend}. I will call back you`)
//     myCallBack()
// }
// const perTwo = () => {
//     console.log(`Hey What's up. I call Back you dekha`)
// }
// perOne('Rajan', perTwo);


// Synchronous Vs Asynchronous Programing
// Synchronous => Vs Asynchronous
// const fun1 = () =>{
//     setTimeout(()=> {
//         // for(var i = 0; i <= 20; i++){
//             console.log('fun1 is starting')
//         // }
        
//     }, 3000)
    
// }
// const fun2 = () => {
//     console.log('fun2 is starting')
//     fun1();
//     console.log('fun2 is ending')
// }
// fun2();





// Other Example


//  const wait = () => {
//     console.log('Js part is starting');
//     let start = new Date().getTime();
//     console.log(new Date().getTime() - start);
//     while(new Date().getTime() - start < 5000){
//         console.log('its done');

//     }
//  }
//  btn.addEventListener('click', wait)

// const notWait = () => {
//     console.log('js part is starting')
    

//     setTimeout(() => {
//         console.log('all right its done.')
//     }, 6000);
// }


// btn.addEventListener('click', notWait)


// 
// const data = [
//     {
//         Name:"Amar",
//         Age: 26,
//         Gender: 'Male'
//     },
//     {
//         Name:"Rajan",
//         Age: 26,
//         Gender: 'Male'
//     },{
//         Name:"Michael",
//         Age: 26,
//         Gender: 'Male'
//     },
// ]

// function getData() {
//     setTimeout(() =>{
//         let output = '';
//         data.forEach((data, index)=>{
//             output += `<li>${data.Name}</li>`
//         })
//         document.body.innerHTML = output

//     }, 1000)
// }

// Without using Promises
/* Start Here */

// function createData(newData){
    
//         setTimeout(()=>{
//             data.push(newData);  
//         }, 3000)

// }
// createData({Name:"Prashant", Age: 26, Gender: 'Male'});
// getData();
/* End Here */



// With using Promises
/* Start Here */

// function createData(newData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             data.push(newData);
//             let error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject('Something Went wrong')
//             }
//         }, 5000)

//     })
    
// }
// createData({
//     Name:"Prashant",
//     Age: 26,
//     Gender: 'Male'
// })
// .then(getData)
// .catch(err => console.log(err))

/* End Here Promises */

// Async and Await
// async function start(){
//     await createData({
//         Name:"Prashant",
//         Age: 26,
//         Gender: 'Male'
//     });
//     getData();
// }
// start();


// let newData = {
//     Name:"Michael",
//     Age: 26,
//     Gender: 'Male'


// }
// data.push(newData)
// console.log(data)

