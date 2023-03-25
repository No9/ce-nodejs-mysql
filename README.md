# ce-nodejs-mysql

A sample application to connect node.js to a IBM Cloud Databases for MySQL targetting use in code engine.

This project aims to illustrate the mysql options once you have this integrated it's strongly recommended to use the [secrets manager](https://www.npmjs.com/package/@ibm-cloud/secrets-manager) module with the [secrets manager service](https://cloud.ibm.com/catalog/services/secrets-manager).


To run this on your local machine create a file in the base directory of this project called `.env` and populate the following settings from the [Service Credentials](https://cloud.ibm.com/docs/databases-for-mysql?topic=databases-for-mysql-user-management#user-management-create-users) you have generated for the service.

```
MYSQL_PORT=xxxx
MYSQL_DATABASE=ibmclouddb
MYSQL_USER=xxxx
MYSQL_HOST=xxxx
MYSQL_PWD=xxxx
MYSQL_CA_BASE64=xxxx
```

# build

```
docker build -t nodeapp .
```

# local container run

```
podman run -p 8080:8080 --env-file .env nodeapp
```


