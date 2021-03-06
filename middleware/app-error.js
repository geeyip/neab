/**
 * 错误处理
 * @param app
 */
module.exports = function(app){

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    if(req.path.indexOf('/api')==-1){
        res.render('error', {
            message: err.message,
            error: err
        });
    }else{
        res.writeHead(err.status);
        res.end();
    }

});
}