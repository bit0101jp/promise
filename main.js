
let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let moji = prompt("文字列を入力してください");
        resolve(moji);
    }, 2000);
});

promise.then(function(mojiReceived){
    console.log(mojiReceived);
});
