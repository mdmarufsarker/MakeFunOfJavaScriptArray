/*
ID0 - Boost your base
ID1 - Web Design
ID2 - Frontend
ID3 - Backend
*/

let arr = [
    ["Maruf", "Rahman", "Shuvo"],
    ["Rahim", "Karim", "Rafiq"],
    ["Kamal", "Jamal", "Salam"],
    ["Sadia", "Sultana", "Sharna"],
]

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(i == 0){
            console.log(`ID${j} - ${arr[i][j]} is from Boost your base`)
        }else if(i == 1){
            console.log(`ID${j} - ${arr[i][j]} is from Web Design`)
        }else if(i == 2){
            console.log(`ID${j} - ${arr[i][j]} is from Frontend`)
        }else{
            console.log(`ID${j} - ${arr[i][j]} is from Backend`)
        }
    }
}

/*
ID0 - Maruf is from Boost your base
ID1 - Rahman is from Boost your base
ID2 - Shuvo is from Boost your base
ID0 - Rahim is from Web Design
ID1 - Karim is from Web Design
ID2 - Rafiq is from Web Design
ID0 - Kamal is from Frontend
ID1 - Jamal is from Frontend
ID2 - Salam is from Frontend
ID0 - Sadia is from Backend
ID1 - Sultana is from Backend
ID2 - Sharna is from Backend
*/