# Database-For-Kappa-Sigma
*** IMPORTANT STUFF ***

Built on Debian

Make sure postgresql is installed on your machine using the following install:

sudo apt install postgres-15

After running the server make sure you kill it if you want to open it again with:

sudo pkill -u postgres


*** RUNNING THE DATABASE ***

To run the machine naviate to the /server folder in a terminal and type the following in terminal:

npm start

This runs "nodemon index.js" in the terminal which opens the database on the port listed in the "app.listen(<port>)" code. 
Currently this iteration is quite buggy and dosent like giving access or starting the server so more needs to be done to make it more viable.