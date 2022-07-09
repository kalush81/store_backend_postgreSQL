# Nodejs project. Backend for a shopping website

...in development

1. You need to install db-migrate globaly
2. you need to have install postgres database locally
3. you need to set create databases:  
 - one for development 
 - one for tests
4. check migrations folder for sqls commands 

### testing: 
    run npm test and it will :

- set ENV to test
- trigger typescript to build
- test testable database set in database.json config file
- drop testable database
