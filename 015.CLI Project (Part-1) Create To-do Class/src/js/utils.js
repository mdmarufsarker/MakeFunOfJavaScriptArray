const fs = require('fs');

module.exports.saveFile = (data, fileName) => {
    try{
        fs.writeFileSync(fileName, JSON.stringify(data));
    }catch(e){
        console.log(e.message);
        throw new Error(e);
    }
}

module.exports.readFile = (fileName) => {
    try{
        const data = fs.readFileSync(fileName, 'utf-8');
        return data && JSON.parse(data);
    }catch(e){
        console.log(e.message);
        throw new Error(e);
    }
}