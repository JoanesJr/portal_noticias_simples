module.exports.add_noticia = (app, req, res) => {
    res.render('admin/formulario_inclusao_noticia', {validacao : {}, noticia : {}});
}

module.exports.salvar = (app, req, res) => {
    let noticia = req.body;
    req.assert('titulo', 'O título é obrigatório').notEmpty();
    req.assert('autor', 'O autor é obrigatório').notEmpty();
    req.assert('resumo', 'O resumo deve contem entre 10 e 100 caracteres').notEmpty().len(10, 100);
    req.assert('noticia', 'A noticia é obrigatoria').notEmpty;
    req.assert('data_noticia', 'A data é obrigatoria').notEmpty().isDate({format : 'YYYY-MM-DD'});

    let errors = req.validationErrors();

    if (errors) {
        res.render('admin/formulario_inclusao_noticia', {noticia : noticia, validacao : errors});
        return;
    }
    
    let connectionDb = app.config.database();
    let modelNoticia = new app.app.models.Noticia(connectionDb);

    modelNoticia.salvar(noticia, (error, result) => {
        res.redirect('/');
    });
}
