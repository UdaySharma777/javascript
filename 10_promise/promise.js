const promiseOne = new Promise(function(resolve, reject){
    //Do async task (DB calls, cryptography, networkcalls)
    setTimeout(function(){
        console.log('Async task is Complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consume");
    
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task 2');
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Uday",email:"uday777sh@gmail.com"})// can pass data in resolve
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error){
            resolve({username:"Uday",password:"1234567890"})
        }
        else{
            reject("ERROR: SOmething went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{console.log((error));
}).finally(()=>{console.log("the promise is either resolverd or rejected");
})
setTimeout

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error){
            resolve({username:"JAVASCRIPT",password:"1234567890"})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
           
//     }
    
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{console.log(data);
}).catch((error)=>{console.log(error)})






