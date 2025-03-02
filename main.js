let taskAssigned = parseInt(document.getElementById('taskAssigned').innerText);
// console.log(taskAssigned);
let totalTaskDone = parseInt(document.getElementById('totalTaskDone').innerText);

document.getElementById('btn1').addEventListener('click', function(){
    alert('Board updated Successfully')
    const btn1 = document.getElementById('btn1');
    btn1.disabled = true;
    btn1.classList.add("bg-gray-300");
    taskAssigned--;
    totalTaskDone++;

    if(taskAssigned === 0){
        alert('Congrats!!! You have completed all the current task');
    }

    document.getElementById('taskAssigned').innerText = '0' + taskAssigned;
    document.getElementById('totalTaskDone').innerText = totalTaskDone;
    
    const p1 = document.createElement("p");
    p1.classList.add('bg-[#F4F7FF]', 'text-[16px', 'font-[400]', 'text-[#000000]','rounded-[8px]','p-[10px]', 'mb-[30px]');
    const h1 = document.getElementById('h1').innerText;
    const t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit" })
    p1.innerText = 'You have completed the task'+ ' ' + h1 +' ' + 'at' + ' ' + t;
    document.getElementById('activity').appendChild(p1);


})

document.getElementById('btn2').addEventListener('click', function(){
    alert('Board updated Successfully')
    const btn2 = document.getElementById('btn2');
    btn2.disabled = true;
    btn2.classList.add("bg-gray-300");
    taskAssigned--;
    totalTaskDone++;

    if(taskAssigned === 0){
        alert('Congrats!!! You have completed all the current task');
    }

    document.getElementById('taskAssigned').innerText = '0' + taskAssigned;
    document.getElementById('totalTaskDone').innerText = totalTaskDone;
    const p1 = document.createElement("p");
    p1.classList.add('bg-[#F4F7FF]', 'text-[16px', 'font-[400]', 'text-[#000000]','rounded-[8px]','p-[10px]', 'mb-[30px]');
    const h2 = document.getElementById('h2').innerText;
    const t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit" })
    p1.innerText = 'You have completed the task'+ ' ' + h2 +' ' + 'at' + ' ' + t;
    document.getElementById('activity').appendChild(p1);


})

document.getElementById('btn3').addEventListener('click', function(){
    alert('Board updated Successfully')
    const btn3 = document.getElementById('btn3');
    btn3.disabled = true;
    btn3.classList.add("bg-gray-300");
    taskAssigned--;
    totalTaskDone++;

    if(taskAssigned === 0){
        alert('Congrats!!! You have completed all the current task');
    }

    document.getElementById('taskAssigned').innerText = '0' + taskAssigned;
    document.getElementById('totalTaskDone').innerText = totalTaskDone;
    const p1 = document.createElement("p");
    p1.classList.add('bg-[#F4F7FF]', 'text-[16px', 'font-[400]', 'text-[#000000]','rounded-[8px]','p-[10px]', 'mb-[30px]');
    const h3 = document.getElementById('h3').innerText;
    const t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit" })
    p1.innerText = 'You have completed the task'+ ' ' + h3 +' ' + 'at' + ' ' + t;
    document.getElementById('activity').appendChild(p1);


})

document.getElementById('btn4').addEventListener('click', function(){
    alert('Board updated Successfully')
    const btn4 = document.getElementById('btn4');
    btn4.disabled = true;
    btn4.classList.add("bg-gray-300");
    taskAssigned--;
    totalTaskDone++;

    if(taskAssigned === 0){
        alert('Congrats!!! You have completed all the current task');
    }

    document.getElementById('taskAssigned').innerText = '0' + taskAssigned;
    document.getElementById('totalTaskDone').innerText = totalTaskDone;
    const p1 = document.createElement("p");
    p1.classList.add('bg-[#F4F7FF]', 'text-[16px', 'font-[400]', 'text-[#000000]','rounded-[8px]','p-[10px]', 'mb-[30px]');
    const h4 = document.getElementById('h4').innerText;
    const t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit" })
    p1.innerText = 'You have completed the task'+ ' ' + h4 +' ' + 'at' + ' ' + t;
    document.getElementById('activity').appendChild(p1);


})

document.getElementById('btn5').addEventListener('click', function(){
    alert('Board updated Successfully')
    const btn5 = document.getElementById('btn5');
    btn5.disabled = true;
    btn5.classList.add("bg-gray-300");
    taskAssigned--;
    totalTaskDone++;

    if(taskAssigned === 0){
        alert('Congrats!!! You have completed all the current task');
    }

    document.getElementById('taskAssigned').innerText = '0' + taskAssigned;
    document.getElementById('totalTaskDone').innerText = totalTaskDone;
    const p1 = document.createElement("p");
    p1.classList.add('bg-[#F4F7FF]', 'text-[16px', 'font-[400]', 'text-[#000000]','rounded-[8px]','p-[10px]', 'mb-[30px]');
    const h5 = document.getElementById('h5').innerText;
    const t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit" })
    p1.innerText = 'You have completed the task'+ ' ' + h5 +' ' + 'at' + ' ' + t;
    document.getElementById('activity').appendChild(p1);


})

document.getElementById('btn6').addEventListener('click', function(){
    alert('Board updated Successfully')
    const btn6 = document.getElementById('btn6');
    btn6.disabled = true;
    btn6.classList.add("bg-gray-300");
    taskAssigned--;
    totalTaskDone++;

    if(taskAssigned === 0){
        alert('Congrats!!! You have completed all the current task');
    }

    document.getElementById('taskAssigned').innerText = '0' + taskAssigned;
    document.getElementById('totalTaskDone').innerText = totalTaskDone;
    const p1 = document.createElement("p");
    p1.classList.add('bg-[#F4F7FF]', 'text-[16px', 'font-[400]', 'text-[#000000]','rounded-[8px]','p-[10px]', 'mb-[30px]');
    const h6 = document.getElementById('h6').innerText;
    const t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit" })
    p1.innerText = 'You have completed the task'+ ' ' + h6 +' ' + 'at' + ' ' + t;
    document.getElementById('activity').appendChild(p1);


})

document.getElementById('discover').addEventListener('click', function(){
    window.location.href = "blogs.html";
})

document.getElementById('btnch').addEventListener('click',function(){
    document.getElementById('activity').innerHTML=``;
})

document.getElementById('btnthm').addEventListener('click',function(){
    const b = document.getElementById('body');
    let color = '#';
    const hexNumbers = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(let i = 0; i < 6 ; i++){
        color = color + hexNumbers[Math.floor(Math.random()* 16)];
    }
    const colorstr = 'bg' +'-' +'['+color+']';
    b.classList = "";
    b.classList.add(colorstr);

})

const tday = new Date();
const dayIndex = tday.getDay();
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const day = days[dayIndex]+' ,';
const date = tday.toLocaleDateString('en-US',{
            month: 'short', day: 'numeric', year: 'numeric'
    });
 const date1 = date.replace(',','');
const dayDate = `${day}, <br> ${date1}`;
document.getElementById('day').innerHTML= day;
document.getElementById('date').innerHTML= date1;
