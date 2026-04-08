# AWS EC2 Setup Guide for Node.js Application

Follow these steps to prepare your AWS EC2 instance for hosting this application.

## 1. Launch an EC2 Instance
- **AMI**: Ubuntu 24.04 LTS (recommended)
- **Type**: t2.micro (Free Tier eligible)
- **Key Pair**: Create or use an existing `.pem` file.

## 2. Configure Security Group
Add an **Inbound Rule** to your Security Group:
- **Type**: Custom TCP
- **Port Range**: `3000`
- **Source**: `0.0.0.0/0` (or your specific IP for better security)

## 3. Connect to your Instance
```bash
ssh -i "your-key.pem" ubuntu@your-ec2-public-ip
```

## 4. Install Docker and Docker Compose
Run the following commands on your EC2 instance:
```bash
# Update packages
sudo apt-get update

# Install Docker
sudo apt-get install -y docker.io

# Start Docker and enable it
sudo systemctl start docker
sudo systemctl enable docker

# Install Docker Compose
sudo apt-get install -y docker-compose-v2

# Add your user to the docker group (to run docker without sudo)
sudo usermod -aG docker $USER
newgrp docker
```

## 5. Prepare for CI/CD
Once the instance is ready, you will need to add the following secrets to your GitHub repository settings (**Settings > Secrets and variables > Actions**):
- `EC2_SSH_KEY`: The contents of your `.pem` private key.
- `HOST`: Your EC2 Public IP address.
- `USER`: `ubuntu` (or the username of your AMI).
