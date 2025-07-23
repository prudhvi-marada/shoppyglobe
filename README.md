##############################################
##  How to Deploy Vite React App to EC2   ##
##  Using MobaXterm + PM2 + Serve         ##
##############################################

### STEP 1: Connect to EC2 using MobaXterm

 Open MobaXterm

 Click on "Session" → Choose "SSH"

 In Remote Host, paste your EC2 Public IP (e.g., 13.60.230.240)

 Under "Specify Username", use: ubuntu

 In "Advanced SSH settings", browse and attach your .pem key file

 Click "OK" to connect

### STEP 2: Update and Install Required Packages

sudo apt update 

### STEP 3: Install Node.js and npm (LTS version)

sudo apt install  nodejs

sudo apt install  npm


### STEP 4: Clone your GitHub frontend project (replace URL)

git clone https://github.com/your-username/your-frontend-repo.git 

cd your-frontend-repo  # e.g., cd shoppyglobe

### STEP 5: Install frontend dependencies

npm install

### STEP 6: Build the frontend for production

npm run build

### STEP 7: Install `serve` to serve static files

sudo npm install -g serve

### STEP 8: Install PM2 process manager

sudo npm install -g pm2

### STEP 9: Start the frontend app using PM2 and serve on port 5173

pm2 start serve --name vite-app -- -s dist -l 5173

### STEP 10: Save PM2 state so it restarts after reboot

pm2 save

### STEP 11: Setup PM2 to start on EC2 reboot

pm2 startup


### STEP 12: Add Inbound Rule for Port 5173 in AWS

Go to EC2 Console → Instances → Select your instance

Click on "Security" → Click on the security group → Inbound Rules → Edit Inbound Rules

Add a new rule:

 - Type: Custom TCP

 - Port: 5173

 - Source: 0.0.0.0/0

Save the rule

### STEP 13: Get Public IP and Open in Browser


 Open this in your browser:

http://your-public-ip:5173

### OPTIONAL: PM2 Management Commands

### View running apps
pm2 list

### View logs
pm2 logs vite-app

### Restart app
pm2 restart vite-app

### Stop app
pm2 stop vite-app

### Delete app
pm2 delete vite-app
