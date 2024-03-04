<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Get Started

Clone project:
```bash
$ git clone https://github.com/JoshuaHernandezAl/People4Business-blog
```
# Backend
## Steps to run the project
1. Navigate to people4business-blog-backend
2. Install dependencies
```bash
$ yarn install
```
3. Only if you use docker: set-up container
```bash
$ docker compose up -d
```
4. Create database
* if you plan to use docker:
```bash
# Connect to container
$ docker exec -it people4business-blog-db /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P {SA_PASSWORD:change this for .env sa password}

#
$ CREATE DATABASE blogDB
$ GO
$ exit
```
* if you don't plan to use docker: Connect to MS SQL Server by your favorite GUI or Terminal and exec flowing command or equivalent action:
```bash
$ CREATE DATABASE blogDB
$ GO
```
5. Run project
```bash
$ yarn start
```
6. Run Seed
```
POST http://localhost:3000/api/seed
```
Note: WHen you clone this project, you will get a postman collection in people4Business/Blog.postman_collection.json you can import into Postman if you want.
# Frontend
## Steps to run the project
1. Navigate to people4business-blog-front
2. Install dependencies
```bash
$ yarn install
```
3. Rename .env.local.template to .env.local

4. Run project
```bash
$ yarn dev
```