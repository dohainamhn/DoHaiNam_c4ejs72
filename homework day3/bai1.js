//   ways to swap variable is:
function c1()
    {
        let a = 5;
        let b = 6;
        let temp = a;
        a = b;
        b = temp;
        console.log(a,b)
    }
function c3()
    {
        let a = 5;
        let b = 6;
        a = a^b;
        b = a^b;
        a = a^b;
        console.log(a,b)
    }
c3()

