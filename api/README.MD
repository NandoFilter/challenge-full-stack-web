# Challenge Full Stack Web 

### Configurações

| Nome    | Valor padrão | Observações                             |
| ------- | ------------ | --------------------------------------- |
| DB_HOST | `null`       | Host Database                           |
| DB_USER | `null`       | Usuário utilizado no Database           |
| DB_PASS | `null`       | Senha utilizada no Database caso houver |
| DB_NAME | `null`       | Nome do Database                        |

### .env template

```
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
```

---

### SQL

```sql
create table `students`
(
    `ra`    int          not null,
    `name`  VARCHAR(100) not null,
    `email` varchar(150) not null,
    `cpf`   varchar(14)  not null,
    constraint `PK_students`
        primary key (`ra`)
);
```
