const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const async = require("async");

const category = ["Travel","Food & Beverages","Lifestyle","Gadget & Entertainment","Others","Daily Needs"]

function subCat1() {

    let urls = [];
    for(let i = 1; i < 11; i++) {
        urls.push(`https://www.bankmega.com/ajax.promolainnya.php?product=&subcat=1&page=${i}`)
    }
    
    Promise.all(urls.map(function (url) {
        return new Promise((resolve, reject) => {
            request({
                method: 'GET',
                url: url
            }, function(err, res, body) {
                if (err) return console.error(err);
        
                let $ = cheerio.load(body);
                let imgClass = $('#imgClass');
                
                let data = imgClass.toArray();
                let map = data.map(value => {
                    
                    let model = {
                        title: value.attribs.title,
                        imgSrc: `${'https://www.bankmega.com/',value.attribs.src}`,
                        url: url
                    }                    
                    return model
                })
                resolve(map)
            })
        })
    })).then(function (result,res,req) {
        let array = []
        result.forEach(element => {
            element.forEach( item => {
                array.push(item)
            })
        });
        
        let newModel = {
            [category[0]]: array
        }
        fs.writeFile ("./category/cat1.json", JSON.stringify(newModel, null, '\t'), function(err, success) {
            if (err) throw err;
    
            console.log('Loading Category 1!\n');
        })
    }).catch(function (err) {
        console.log(err);
    })

}

function subCat2() {

    let urls = [];
    for(let i = 1; i < 11; i++) {
        urls.push(`https://www.bankmega.com/ajax.promolainnya.php?product=&subcat=2&page=${i}`)
    }
    
    Promise.all(urls.map(function (url) {
        return new Promise((resolve, reject) => {
            request({
                method: 'GET',
                url: url
            }, function(err, res, body) {
                if (err) return console.error(err);
        
                let $ = cheerio.load(body);
                let imgClass = $('#imgClass');
                
                let data = imgClass.toArray();
                let map = data.map(value => {
                    
                    let model = {
                        title: value.attribs.title,
                        imgSrc: `${'https://www.bankmega.com/',value.attribs.src}`,
                        url: url
                    }                    
                    return model
                })
                resolve(map)
            })
        })
    })).then(function (result,res,req) {
        let array = []
        result.forEach(element => {
            element.forEach( item => {
                array.push(item)
            })
        });
        
        let newModel = {
            [category[1]]: array
        }
        fs.writeFile ("./category/cat2.json", JSON.stringify(newModel, null, '\t'), function(err, success) {
            if (err) throw err;
    
            console.log('Loading Category 2!\n');
        })
    }).catch(function (err) {
        console.log(err);
    })
}

function subCat3() {

    let urls = [];
    for(let i = 1; i < 11; i++) {
        urls.push(`https://www.bankmega.com/ajax.promolainnya.php?product=&subcat=3&page=${i}`)
    }
    
    Promise.all(urls.map(function (url) {
        return new Promise((resolve, reject) => {
            request({
                method: 'GET',
                url: url
            }, function(err, res, body) {
                if (err) return console.error(err);
        
                let $ = cheerio.load(body);
                let imgClass = $('#imgClass');
                
                let data = imgClass.toArray();
                let map = data.map(value => {
                    
                    let model = {
                        title: value.attribs.title,
                        imgSrc: `${'https://www.bankmega.com/',value.attribs.src}`,
                        url: url
                    }                    
                    return model
                })
                resolve(map)
            })
        })
    })).then(function (result,res,req) {
        let array = []
        result.forEach(element => {
            element.forEach( item => {
                array.push(item)
            })
        });
        
        let newModel = {
            [category[2]]: array
        }
        fs.writeFile ("./category/cat3.json", JSON.stringify(newModel, null, '\t'), function(err, success) {
            if (err) throw err;
    
            console.log('Loading Category 3!\n');
        })
    }).catch(function (err) {
        console.log(err);
    })
}

function subCat4() {

    let urls = [];
    for(let i = 1; i < 11; i++) {
        urls.push(`https://www.bankmega.com/ajax.promolainnya.php?product=&subcat=4&page=${i}`)
    }
    
    Promise.all(urls.map(function (url) {
        return new Promise((resolve, reject) => {
            request({
                method: 'GET',
                url: url
            }, function(err, res, body) {
                if (err) return console.error(err);
        
                let $ = cheerio.load(body);
                let imgClass = $('#imgClass');
                
                let data = imgClass.toArray();
                let map = data.map(value => {
                    
                    let model = {
                        title: value.attribs.title,
                        imgSrc: `${'https://www.bankmega.com/',value.attribs.src}`,
                        url: url
                    }                    
                    return model
                })
                resolve(map)
            })
        })
    })).then(function (result,res,req) {
        let array = []
        result.forEach(element => {
            element.forEach( item => {
                array.push(item)
            })
        });
        
        let newModel = {
            [category[3]]: array
        }
        fs.writeFile ("./category/cat4.json", JSON.stringify(newModel, null, '\t'), function(err, success) {
            if (err) throw err;
    
            console.log('Loading Category 4!\n');
        })
    }).catch(function (err) {
        console.log(err);
    })
}

function subCat5() {

    let urls = [];
    for(let i = 1; i < 11; i++) {
        urls.push(`https://www.bankmega.com/ajax.promolainnya.php?product=&subcat=5&page=${i}`)
    }
    
    Promise.all(urls.map(function (url) {
        return new Promise((resolve, reject) => {
            request({
                method: 'GET',
                url: url
            }, function(err, res, body) {
                if (err) return console.error(err);
        
                let $ = cheerio.load(body);
                let imgClass = $('#imgClass');
                
                let data = imgClass.toArray();
                let map = data.map(value => {
                    
                    let model = {
                        title: value.attribs.title,
                        imgSrc: `${'https://www.bankmega.com/',value.attribs.src}`,
                        url: url
                    }                    
                    return model
                })
                resolve(map)
            })
        })
    })).then(function (result,res,req) {
        let array = []
        result.forEach(element => {
            element.forEach( item => {
                array.push(item)
            })
        });
        
        let newModel = {
            [category[4]]: array
        }
        fs.writeFile ("./category/cat5.json", JSON.stringify(newModel, null, '\t'), function(err, success) {
            if (err) throw err;
    
            console.log('Loading Category 5!\n');
        })
    }).catch(function (err) {
        console.log(err);
    })
}

function subCat6() {

    let urls = [];
    for(let i = 1; i < 11; i++) {
        urls.push(`https://www.bankmega.com/ajax.promolainnya.php?product=&subcat=6&page=${i}`)
    }
    
    Promise.all(urls.map(function (url) {
        return new Promise((resolve, reject) => {
            request({
                method: 'GET',
                url: url
            }, function(err, res, body) {
                if (err) return console.error(err);
        
                let $ = cheerio.load(body);
                let imgClass = $('#imgClass');
                
                let data = imgClass.toArray();
                let map = data.map(value => {
                    
                    let model = {
                        title: value.attribs.title,
                        imgSrc: `${'https://www.bankmega.com/',value.attribs.src}`,
                        url: url
                    }                    
                    return model
                })
                resolve(map)
            })
        })
    })).then(function (result,res,req) {
        let array = []
        result.forEach(element => {
            element.forEach( item => {
                array.push(item)
            })
        });
        
        let newModel = {
            [category[5]]: array
        }
        fs.writeFile ("./category/cat6.json", JSON.stringify(newModel, null, '\t'), function(err, success) {
            if (err) throw err;
    
            console.log('Loading Category 6!\n');
        })
    }).catch(function (err) {
        console.log(err);
    })
}

function writeFile(params) {
    async.waterfall([
        function(callback){
            subCat1();
            subCat2();
            subCat3();
            subCat4();
            subCat5();
            subCat6();
        }
      ],    
      function(err, results){
        console.log(err)
    });    
}

function main() {
    try {
        let category1 = require('./category/cat1.json');
        let category2 = require('./category/cat2.json');
        let category3 = require('./category/cat3.json');
        let category4 = require('./category/cat4.json');
        let category5 = require('./category/cat5.json');
        let category6 = require('./category/cat6.json');

        let result = [];
        result.push(category1,category2,category3,category4,category5,category6);
        
        fs.writeFile ("solution.json", JSON.stringify(result, null, '\t'), function(err, success) {
            if (err) throw err;

            console.log('Creating solution.json completed!\n');
        })
    } catch (error) {
        console.log("Error please run it again")
    }
}

async function runSolution(params) {
    await writeFile()
    await main()
}

runSolution()