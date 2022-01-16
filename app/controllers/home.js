module.exports.index = (app, req, res) => {
    let connectionDb = app.config.database();
    let modelNoticia = new app.app.models.Noticia(connectionDb);

    modelNoticia.get5UltimasNoticias((error, result) => {
        res.render('home/index', {noticias : result});
    });
}