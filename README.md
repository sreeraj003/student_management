# student_management
sample student management backend API developed in Express.js.
DB_USERNAME = 'sreeraj'
DB_PASSWORD = "Sreeraj003"
JWT_SECRET = "myjsonsecret"

USER URL = "http://localhost:3000/"
ADMIN URL = "http://localhost:3000/admin"

Postman API Documentation : https://documenter.getpostman.com/view/28227272/2s9YsDkuig


Implimented JWT for the authentication
There was a conflict where if the task which is to be assigned is predefined or instanty creating by a text field. If the tas is predefined we could create another collection and could have done a lookup operation for the viewing and editing part. Istead of saving the task directly to the student collection, save task to the new Task collection and then append the _id of the particular task to the student tasks array.

We can integrate the CRON module to periodically check the time stamp of the task assigned to the sudents and check if it is past due time or not.