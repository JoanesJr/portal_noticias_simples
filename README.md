# portal_noticias_simples
portal de noticias simples com validação de form e criação/listagem de noticias.

CREATE DATABASE projeto_portal_noticias;

use projeto_portal_noticias;

create table (
  id int not null primary key auto_increment,
  titulo varchar(50),
  resumo varchar(100),
  autor varchar(30),
  data_noticia date,
  data_criacao timestamp default current_timestamp
  noticia varchar(500)
);
