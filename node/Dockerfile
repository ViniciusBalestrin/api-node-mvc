FROM node:18

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

WORKDIR /usr/src/app

EXPOSE 3000

COPY package*.json ./

RUN npm install && \
    npm install express && \
    npm install cors \ 
    npm install mysql