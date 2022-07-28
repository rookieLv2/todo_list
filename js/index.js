//src https://www.oxxostudio.tw/articles/201904/firebase-realtime-database-start.html
//引入firebase
firebase.initializeApp({
  databaseURL: "https://attempt-start-baa2f-default-rtdb.firebaseio.com/"
});

// 接上firebase
const database = firebase.database()
    
// 第一次載入資料庫時顯示所有內容
let data = []
database.ref("/demodata/").once('value',e=>{ 
  for (var i in e.val()) {  // e.val()是firebase所有的資料
    console.log(e.val()[i]) // 用字串i抓單筆資料
    data.push({ "id": i , "content": e.val()[i].content })   
    add_todo(e.val()[i].content)
  }
})

// database.ref("/demodata/").limitToLast(1).on('value',e => {
//   console.log(data)
//   for (var i in e.val()) {  // e.val()是firebase所有的資料
//     // for(var j=0; j<data.length; j++){
//     //   if(i == data[j].id){
//     //     console.log(data[j].id)
//     //     continue
//     //   }
        
//     // }
//     // add_todo(e.val()[i].content)
//   }

// })

// 以下開工
// 抓到網頁元素
const add_button = document.querySelector(".add_todo")
const new_todo_value = document.querySelector(".new_todo_value")
const total_datas = document.querySelector(".total_datas")
const del_button = document.querySelectorAll(".del_btn")  //刪除 document.querySelectorAll選取全部  querySelectorAll是array

// 加入click事件
add_button.addEventListener('click', function (event) {
  add_todo(new_todo_value.value)
})


function add_todo(str){ //按下add_todo後，將元素建好並將結點串接起來，包括 text.gb_icon.textContent
  // console.log(str)
  
  const new_data = document.createElement('div')  // 用 createElement 增加一個 DOM 節點
  const text = document.createElement('h4')
  const gb_icon = document.createElement('h4')
  
  text.textContent = str; // 先用 JS 寫好要增加的內容
  
  gb_icon.textContent = "🗑️"        //新增內文

  gb_icon.setAttribute('class', 'icon')  // 動態修改一個 class 屬性()
  gb_icon.classList.add('del_btn')  //新增class屬性
  new_data.setAttribute('class', 'data') 
  
  new_data.appendChild(text); //  parent.appendChild()
  new_data.appendChild(gb_icon);
  total_datas.appendChild(new_data);

  gb_icon.addEventListener('click', function (e) { //新增gb_icon的移除功能
    del(e)
  })    
}

for(var i=0; i<data.length; i++){
  add_todo(data[i].content)
}

function del(event){
    // console.log(event.target.parentNode)
    event.target.parentNode.remove()
}

 
for(var i=0; i<del_button.length; i++){
    console.log(del_button[i])
    del_button[i].addEventListener('click', function (event) {
        del(event)
    })    
} 

