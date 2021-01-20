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

create table schools (
	id   bigint       not null
		primary key,
	name varchar(256) null
);


create table authorities
(
	id int auto_increment,
	authority_name varchar(128) not null,
	active boolean default true not null,
	constraint authorities_pk
		primary key (id)
);

create unique index authorities_authority_name_uindex
	on authorities (authority_name);

create table user_authorities
(
	user_id int not null,
	authority_id int not null
);

create unique index user_authorities_user_id_authority_id_uindex
	on user_authorities (user_id, authority_id);

