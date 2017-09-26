
/*
console.log('Hello World');

const name = process.argv[2];
console.log(`Hi ${name}!`);


for (let i = 0; i < process.argv.length- 2; i ++)
{
    console.log("Buffer: " + process.argv[i+2]);
}

*/

var fs = require('fs');
var path = require('path');
var pd = process.argv[2];



const myScript ="\
var fs = require('fs');\
var pd = process.argv[2];\
var path = require('path');\
\
getDirectory(pd);\
var txtDirectory = createDir(pd);\
\
function getDirectory(path)\
{\
    fs.readdir(path, function(error, files)\
    {\
        files.forEach(function(item)\
        {\
            fs.stat(path + '/' + item, function(error, state)\
            {\
                if(state.isDirectory())\
                {\
                    directory = path + '/' + item;\
                    getDirectory(directory);\
                }\
                else\
                {\
                     console.log(item);\
                }\
            });\
        });\
    });}\
\
    function createDir(path)\
{\
        var splitPath = path.split('/');\
        var nameDirectory = splitPath.pop();\
        if(nameDirectory == '')\
        {\
            nameDirectory = splitPath.pop();\
        }\
        var newDirectory = path + '/' + nameDirectory;\
        fs.mkdir(newDirectory, function (error)\
        {\
        if (error)\
        {\
            console.error();\
        }\
        });\
    return newDirectory;\
};\
";



if (pd != undefined)
{
    fs.stat(pd, 
    function (error,stats)
        {
            if (error || !(stats.isDirectory()))
            {
                console.log("Неверный путь!!!!");
            }
            else
            {
                fs.writeFile(pd + "\\eugene.js", myScript, 
                function(error)
                {
                    if (error)
                    {
                        console.log("Ошибка создания файла");
                    }
                }
                )

                console.log("node " + pd + "eugene.js");
            }
        }    
    )

}

else
{
        console.log ("Введите путь к файлу!!!");
}
