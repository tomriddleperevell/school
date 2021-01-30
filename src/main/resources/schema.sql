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

create table principals
(
	id bigint auto_increment,
	first_name varchar(256),
	last_name varchar(256),
	birth_date date,
	personal_no varchar(256),
	gender integer,
	active boolean,
	years_in_office	integer,
	constraint principals_id_pk
		primary key (id)
);

create unique index principals_id_uindex
	on principals (id);

create table students
(
	id bigint auto_increment,
	first_name varchar(256),
	last_name varchar(256),
	birth_date date,
	personal_no varchar(256),
	gender integer,
	active boolean,
	school_id bigint,
	constraint students_id_pk
		primary key (id)
);

create unique index students_id_uindex
	on students (id);

create table teachers
(
	id bigint auto_increment,
	first_name varchar(256),
	last_name varchar(256),
	birth_date date,
	personal_no varchar(256),
	gender integer,
	active boolean,
	school_id bigint,
	constraint teachers_id_pk
		primary key (id)
);

create unique index teachers_id_uindex
	on teachers (id);

create table schedules
(
	id bigint auto_increment,
	name varchar(256),
	active boolean,
	school_id bigint,
	constraint schedules_pk
		primary key (id)
);

create unique index schedules_id_uindex
	on schedules (id);

create table subjects
(
	id bigint auto_increment,
	name varchar(256),
	active boolean,
	schedule_id bigint,
	teacher_id bigint,
	constraint subjects_pk
		primary key (id)
);

create unique index subjects_id_uindex
	on subjects (id);

alter table schools
	add principal_id bigint not null;

alter table schools
	add active boolean;

alter table schools
	add city_name varchar(256);

alter table schools
	add region varchar(256);

alter table schools
	add number INTEGER;

