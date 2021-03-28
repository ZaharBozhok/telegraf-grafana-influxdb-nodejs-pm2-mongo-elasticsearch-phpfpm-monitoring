## Learning TIG stack on different technologies

#### Monitoring stack: 
- telegraf
- grafana 
- influxdb 
- influxdb_v2

#### Stack to be monitored: 
- mongo 
- nginx
- phpfpm
- elasticsearch
- nodejs + pm2

### How to make telegraf with influxdb_v2 ℹ️
For learning purpouse created monitoring panels for pm2 using flux which is supported only by influxdb_v2

So in order to make telegraf work with inflxudb_v2 you have to generate token for telegraf in influxdb_v2 admin panel and create bucket named 'telegraf', then insert token in telegraf/env.telegraf

### How to make grafana work with influxdb_v2 ℹ️
In order to make grafana work with influxdb_v2 you have to go to datasources and configure token there also, you can use admin's for learning purpose

### Importing already created dashboard for all this stuff ℹ️
Import on grafana admin panel dashboard and just paste whole grafana/dashboard.json

### "Fixing" nginx strange behvior 🤢
Nginx shoulnd't work untill you change nginx ip address in telegraf/telegraf.conf, I specified ip of my local network cause when accessing it via docker network nginx responses with internal server error ¯\\\_(ツ)_/¯.

### Reference repositories and links 🌐
[Laradock](http://laradock.io/http:// "Laradock")

[Docker-influxdb-grafana](https://github.com/nicolargo/docker-influxdb-grafana)

[PM2 + grafana + influxdb](https://medium.com/@nikunjd.np/pm2-microservices-monitoring-with-grafana-influxdb-54fb6f8b5d2d)

