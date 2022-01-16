module.exports.noticias = (app, req, res) => {
    let connectionDb = app.config.database();
    let modelNoticia = new app.app.models.Noticia(connectionDb);

    modelNoticia.getNoticias((error, result) => {
        console.log(result);
        res.render('noticias/noticias', {noticias : result});
    });
}

module.exports.noticia = (app, req, res) => {
    let connectionDb = app.config.database();
    let modelNoticia = new app.app.models.Noticia(connectionDb);
    let id = req.query;

    modelNoticia.noticia(id, (error, result) => {
        res.render('noticias/noticia', {noticia : result});
    });
}