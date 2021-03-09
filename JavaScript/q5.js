// 5 - Write a function addWithSubcharge that adds two amounts with
//     subcharge. For each amount less than or equal to 10, the subcharge
// is 1. For each amount greater than 10, the subcharge is 2

function addWithSubCharge(amount1, amount2){
    if (!(amount1===0 || amount2 ===0)){
        let subCharge = 0;
        if (amount1 <= 10){
          subCharge +=1;
        }else{
            subCharge +=2
        }

        if (amount2 <= 10){
            subCharge +=1;
        }else{
            subCharge +=2
        }
        const result = amount1 + amount2 + subCharge;

        console.log(result)
    }else{
        console.log("enter a positive value !")
    }
}


addWithSubCharge(10,11)

