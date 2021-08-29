USE Ubistart;
CREATE TABLE todos(
  id char(36) Primary Key not null,
  task varchar(255) not null,
  is_done tinyint(1) not null,
  prazo datetime(6) not null,
  created_at datetime(6) not null default CURRENT_TIMESTAMP(6),
  updated_at datetime(6) not null default CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  deleted_at datetime(6) null, 
  id_usuario char(36) not null 
);


CREATE TABLE users(
  id char(36) Primary Key not null,
  email varchar(255) not null,
  password varchar(255) not null,
  created_at datetime(6) not null default CURRENT_TIMESTAMP(6),
  updated_at datetime(6) not null default CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  deleted_at datetime(6) null
);