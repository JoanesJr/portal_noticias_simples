function Noticia(connection) {
    this._connection = connection;
}

Noticia.prototype.salvar = function(noticia, callback) {
    this._connection.query("INSERT INTO noticias SET ?", noticia, callback);
}

Noticia.prototype.getNoticias = function(callback) {
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
}

Noticia.prototype.get5UltimasNoticias = function(callback) {
    this._connection.query("SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5", callback);
}

Noticia.prototype.noticia = function(id, callback) {
    this._connection.query(`SELECT * FROM noticias WHERE id = ${id.id_noticia}`, callback);
}

module.exports = function() {
    return Noticia;
}