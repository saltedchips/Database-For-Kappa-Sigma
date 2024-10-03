# Database-For-Kappa-Sigma
*** IMPORTANT STUFF ***

Built on Debian

Make sure postgresql and pgAdmin is installed on your machine using the following install:

sudo apt install postgres-15

https://www.pgadmin.org/download/pgadmin-4-apt/

After running the server make sure you kill with  CTRL+C not CTRL+Z otherwise you have to kill the server manually with: 

sudo lsof -i :3001 (find the PID of the process running)
kill -9 <PID>

*** RUNNING THE DATABASE ***

To run the database naviate to the /server folder in a terminal and type the following in terminal:

npm start

This runs "nodemon index.js" in the terminal which opens the database on the port listed in the "app.listen(<port>)" code. 
Currently this iteration is quite buggy and dosent like giving access or starting the server so more needs to be done to make it more viable.

*** Contact info ***

For more information DM me on discord or send me an email:

Discord Username: .lda
E-mail: jpwpkh@umsystem.edu