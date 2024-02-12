/* The lovely print button */
const printBtn = document.getElementById('printcv');
printBtn.addEventListener('click',()=> window.print());

function mark3DArray(arr) {
    // Step 1: we need to find where are the 0 values inside the array
    //
    // We'll store the 0 positions in an array
    let zeroPositions = [];
    // Let's iterate!
    // 1st array
    for(var i = 0; i < arr.length; i++){
        // 2nd array
        for(var j = 0; j < arr[i].length; j++){
            // 3rd array
            for(var k = 0; k < arr[i][j].length; k++){
                // Integers
                if(arr[i][j][k] === 0){
                    let currentPosition = [i,j,k]
                    zeroPositions.push(currentPosition);
                }
            }
        }
    }
    console.log(zeroPositions);
    //
    // Step 2 let's convert this rows an columns to 0 value
    //
    for (let positions of zeroPositions) {
        // Set all row to 0
        let firstArrayPosition = positions[0];
        let secondArrayPosition = positions[1];
        for(var w = 0; k < arr[firstArrayPosition][secondArrayPosition].length; w++){
            arr[firstArrayPosition][secondArrayPosition][w] = '0';
        }

        // Set columns to zero
    }
    return arr;
}
