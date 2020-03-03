create table user
(
    id         bigint auto_increment
        primary key,
    firstName varchar(35)  not null,
    lastName  varchar(35)  not null,
    birthday   date         not null,
    country    varchar(60)  not null,
    email      varchar(150) not null,
    password   char(160)    not null
)
    comment 'All the users personal information.';

create table month
(
    id             bigint auto_increment
        primary key,
    monthNumber   int               not null,
    year           int               not null,
    balance        decimal default 0 not null,
    incomesTotal  decimal default 0 not null,
    outcomesTotal decimal default 0 not null,
    fkUser        bigint            not null,
    constraint month_user_id_fk
        foreign key (fkUser) references user (id)
);

create table expense
(
    id          bigint auto_increment
        primary key,
    amount      decimal default 0 not null,
    type        varchar(30)       not null,
    description varchar(250)      not null,
    date        date              not null,
    fkMonth    bigint            not null,
    constraint expense_month_id_fk
        foreign key (fkMonth) references month (id)
);

