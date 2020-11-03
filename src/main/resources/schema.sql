create table users
(
	id bigint ,
	user_name varchar(256) null,
	password varchar(256) null,
	constraint users_id_pk
		primary key (id)
);

create unique index users_user_name_uindex
	on users (user_name);
