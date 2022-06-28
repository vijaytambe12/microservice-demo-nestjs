# NestJS Demo Microservice

Steps to run project

1. Clone repository
2. Go to microservice-demo-nestjs/
3. npm install
4. npm start

### API Developed

#### Authentication
```
POST - localhost:3000/auth/login

Body -
{
    "username": "vikram",
    "password": "test"
}
```

#### Create Company
```
POST - localhost:3000/company

Body -
{
    "name":"cmp 1",
    "ceo_name":"vijay ceo",
    "address":"Delhi"
}
```

#### Get All Companies
```
GET - localhost:3000/company/
```

#### Get Company by ID

```
GET - localhost:3000/company/:id
```

#### Search Company

```
GET - localhost:3000/company/search/:query
```

#### Create Team Lead
```
POST - localhost:3000/company/:companyID/teamlead

Body -
{
    "name":"TEST Lead"
}
```

#### Get All Team Leads
```
GET - localhost:3000/company/7/teamlead
```

### Static Users for Auth

{
    "username": "vikram",
    "password": "test"
}

### MYSQL database used

Please create database and give relevant permission

DB Name : testdb
DB User: testuser
Password: testpw


Two tables created:

1. Company
+----------------+--------------+------+-----+-------------------+----------------+
| Field          | Type         | Null | Key | Default           | Extra          |
+----------------+--------------+------+-----+-------------------+----------------+
| id             | int(11)      | NO   | PRI | NULL              | auto_increment |
| name           | varchar(255) | NO   |     | NULL              |                |
| ceo_name       | varchar(255) | NO   |     | NULL              |                |
| address        | varchar(255) | NO   |     | NULL              |                |
| inception_date | timestamp    | NO   |     | CURRENT_TIMESTAMP |                |
+----------------+--------------+------+-----+-------------------+----------------+

2. Team_Lead

+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | int(11)      | NO   | PRI | NULL    | auto_increment |
| name       | varchar(255) | YES  |     | NULL    |                |
| company_id | int(11)      | YES  |     | NULL    |                |

