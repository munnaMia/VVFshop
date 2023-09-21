const userIcon = document.querySelector("#userIcon")
const userPalete = document.querySelector("#userSetting")

userIcon.addEventListener("click", ()=>{
    if(userPalete.classList.contains('invisible')){
        console.log("ok")
        userPalete.classList.add('visible')
        userPalete.classList.remove('invisible')
    }else{
        userPalete.classList.add('invisible')
        userPalete.classList.remove('visible')
    }
})