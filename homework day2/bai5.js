// Write a program asking users their age, and then decide if they are old enough to view a
// 14+ content
function askForAccess()
    {
       let age = Number(prompt("Bạn Bao Nhiêu Tuổi Rồi?"))
       if(age > 14) console.log("Bạn Đủ Tuổi Vào Web!") 
       else console.log("Bạn Không Đủ Tuổi Vào Web")
    }