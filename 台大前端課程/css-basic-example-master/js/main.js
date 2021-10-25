// 在這裡寫入你的JS邏輯
// 小駝峰命名法: 第一個字全小寫，之後的單字首字大寫
// ex. signInWithGoogle()

// 選到.navbar-toggler，並為其綁定事件
// jQuery() : 選需要控制的元素
jQuery('.navbar-toggler').click(function(){
    // 選擇目標被點擊後要做的事...
    console.log('the btn is clicked')
    // 選.navbar-list並新增activate分類
    // addClass 新增分類
    // toggloeClass 切換分類 
    jQuery('.navbar-list').toggleClass('active')
})