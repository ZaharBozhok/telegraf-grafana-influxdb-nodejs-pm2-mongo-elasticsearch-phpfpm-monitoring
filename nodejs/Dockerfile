FROM node:8
RUN yarn global add pm2@3.5.1

# Bundle APP files
COPY src src/
COPY package.json .
COPY app-pm2.json .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Show current folder structure in logs
RUN ls -al -R
RUN pm2 install pm2-server-monit

CMD [ "pm2-runtime", "start", "app-pm2.json", "--web" ]
