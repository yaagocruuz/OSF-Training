var request = require('request');

exports.get_all_contacts = function(req, res) {
    request('https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts', function(error, response, body){
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode);
        var object = JSON.parse(body);
        res.render('list' ,
            {contacts: object});
    });
}

//search
exports.get_search = function(req, res){
    res.render("search");
}

exports.post_search = function(req, res) {
    var ur = "https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/" + req.body.id;
    request(ur, function(error, response, body){
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode);
        var object = JSON.parse(body);
        console.log(body);
        res.render('listed', {contact : object})
    });
}

exports.get_register = function(req, res){
    res.render("register");
}

exports.post_register = function(req, res){
    var postData={
        'name': req.body.name,
        'email' : req.body.email,
        'gender' : req.body.gender,
        'phone' : req.body.phone
    };
    console.log(postData.gender)
    request.post({
        uri: "https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/",
        method:"POST",
        json:postData
    }, function(err, response, body){
        console.log(postData);
        console.log(response.statusCode);

        res.redirect('/list');
    });
}

exports.get_remove = function(req, res){
    var postData={
        'id': req.body.id
    };
    console.log(postData.gender)
    request.del({
        uri: "https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/" + postData.id,
        method:"POST",
        json:postData  
    }, function(err, response, body){
        console.log(postData);
        console.log(response.statusCode);
        res.redirect('/list');
    });
}

exports.get_update = function(req, res){
    res.render("update");
}

exports.post_update = function(req, res) {
    var ur = "https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/" + req.body.id;
    request(ur, function(error, response, body){
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode);
        var object = JSON.parse(body);
        res.render('update', {contact : object})
    });
}

exports.post_updated = function(req, res){
    var postData={
        'name': req.body.name,
        'email' : req.body.email,
        'gender' : req.body.gender,
        'phone' : req.body.phone
    };
    console.log(req.body.id[0])
    request.put({
        url: "https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/" + req.body.id[0],
        method:"PUT",
        json:postData
    }, function(err, response, body){
        console.log(postData);
        console.log(response.statusCode);
        res.redirect('/list');
    });
}