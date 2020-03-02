create table user
(
    id         bigint auto_increment
        primary key,
    first_name varchar(35)  not null,
    last_name  varchar(35)  not null,
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
    month_number   int               not null,
    year           int               not null,
    balance        decimal default 0 not null,
    incomes_total  decimal default 0 not null,
    outcomes_total decimal default 0 not null,
    fk_user        bigint            not null,
    constraint month_user_id_fk
        foreign key (fk_user) references user (id)
);

create table expense
(
    id          bigint auto_increment
        primary key,
    amount      decimal default 0 not null,
    type        varchar(30)       not null,
    description varchar(250)      not null,
    date        date              not null,
    fk_month    bigint            not null,
    constraint expense_month_id_fk
        foreign key (fk_month) references month (id)
);

