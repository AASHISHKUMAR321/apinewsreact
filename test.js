

let arr = [0, 1, 2, 3];


function sub(arr,op){

            if(arr.length==0){
                console.log(op);
                return 
            }

      
            let y = arr.shift();
            sub(arr,op)
            op.push(y)
            sub(arr,op)
            
}

sub(arr,[])

// console.log(arr.shift())