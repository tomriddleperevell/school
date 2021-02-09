insert into users(id,user_name,password) values(2,'manager','$2y$12$.qBVr12g1I5lyu5c0V0l5OiqWdjYLI6fdaMV2SpCF3ZPU1vYT8Xem ');
insert into authorities(authority_name,active) values
('ROLE_MANAGER',true),
('ROLE_USER',true);
insert into user_authorities(user_id,authority_id)
select u.id,au.id
from users u,authorities au;

insert into schools(id, name, principal_id, active, city_id, region_id, number) values (1,'fizmat', 1, 1, 1, 1, 41);
insert into teachers(id, first_name, last_name, birth_date, personal_no, gender, active, school_id) values
(1, 'david', 'nozadze', '1080-01-01', '01234567', 0, true, 1),
(2, 'bachuki', 'xizaneishvili', '1978-04-05', '012345679', 0, true, 1);

insert into students(id, first_name, last_name, birth_date, personal_no, gender, active, school_id) values
(1, 'david', 'kapanadze', '1996-01-01', '111111', 0, true, 1),
(2, 'giorgi', 'wiqoridze', '1996-04-05', '2222222', 0, true, 1),
(3, 'shako', 'ninua', '1996-01-01', '3333333', 0, true, 1),
(4, 'otar', 'focxoraia', '1996-04-05', '4444444', 0, true, 1);

insert into schedules(id, name, active, school_id) value (1, 'mondey', true, 1);

insert into subjects(id, name, active, schedule_id, teacher_id) values
(1, 'physics', true, 1, 1),
(2, 'math', true, 1, 1);

insert into principals(id, first_name, last_name, birth_date, personal_no, gender, active, years_in_office) value
(1, 'genadi', 'margvelashvili', '1976-01-01', '1233212', 0, true, 4);

insert into regions(id, name, active) values
(1, 'imereti', 1),
(2, 'qartli', 1);

insert into cities (id, name, active)
values (1, 'qutaisi', 1), (2, 'tbilisi', 1);

