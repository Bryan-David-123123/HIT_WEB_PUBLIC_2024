const inpt = document.querySelector('input');
const btn = document.querySelector('.add');
const output = document.querySelector('.output');
let arr = [];
//Css cho o output va chu
const task_detail = {
    width: '504px',
    height: '34px',
    border: '1px solid #CCCCCC',
    borderRadius: '4px',
    padding: '8px',
    fontSize: 'x-large',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}
//Css cho o delete
const del_detail = {
    backgroundColor: '#C82333',
    width: '60px',
    height: '26px',
    color: 'white',
    border: 'none',
}
btn.addEventListener('click', function () {
    const str = inpt.value;
    //Xu ly truong hop input
    if (str.trim() === "") {
        process.exit(0);
    }
    arr.push(str);
    inpt.value = "";
    //Tao o task 
    const task = document.createElement('div');
    task.textContent = `${arr[arr.length - 1]}`;
    Object.assign(task.style, task_detail);
    //Tao o delete
    const del = document.createElement('button');
    del.className = 'delete';
    del.textContent = 'Delete';
    Object.assign(del.style, del_detail);
    //Gan button vao trong div va div vao output
    task.appendChild(del);
    output.appendChild(task);
})
//Keypress cho nut Enter
document.addEventListener("keypress",function(event){
    if(event.key==='Enter'){
        btn.click();
    }
})

//Xoa cac phan tu trong mang
//Cach 1: su dung removeChild
output.addEventListener('click', function (e) {
    if(e.target.className=='delete'){
        output.removeChild(e.target.parentElement);
    }
})
//Cach 2: su dung splice

// output.addEventListener('click',function(e){
//     if(e.target.className==='delete'){
//         arr.splice(e.target.id,1);
                
//     }
// }) 

//----> Chua biet lam