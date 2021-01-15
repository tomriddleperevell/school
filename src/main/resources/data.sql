insert into users(id,user_name,password) values(2,'manager','$2y$12$.qBVr12g1I5lyu5c0V0l5OiqWdjYLI6fdaMV2SpCF3ZPU1vYT8Xem ');
insert into authorities(authority_name,active) values
('ROLE_MANAGER',true),
('ROLE_USER',true);
insert into user_authorities(user_id,authority_id)
select u.id,au.id
from users u,authorities au;