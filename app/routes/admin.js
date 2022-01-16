module.exports = (app) => {
    app.get('/add_noticia', (req, res) => {
        app.app.controllers.admin.add_noticia(app, req, res);
    });
}