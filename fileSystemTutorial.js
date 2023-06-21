var builder = require('xmlbuilder');
 var fs = require('fs-extra');



fs.readJSON('package.json',function(err,data){
    let dependencies = data.dependencies;
    var root = builder.create('Depedencies');
    for(let key in dependencies){
        var item = root.ele('dependency');
        //item.att(key).
        //item.value(key);

        item.att(key,dependencies[key]);
       

    }
     
    var xml = root.end({ pretty: true});
    console.log(xml);
})
