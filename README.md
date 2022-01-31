# Experiment with Kafka

I created this small project to experiment with Apache Kafka. 
It was created based on a yml file which runs zookeeper and kafka in Docker and I added some javascript files which allow you to create topics, produce or consume events. So, after running kafka, there are basically two options to interact with it.
1. Command line
2. Javascript files


#### Kickstart Zookeeper and Kafka

Run the yml file with the command line:
<code>docker-compose -f docker-compose.yml up -d</code>


#### Check available images on docker
Check all available images:
<code>docker images</code>
Check running containers:
<code>docker ps</code>

#### Get into Kafka's cmd line
Get the Container ID of the container running kafka
and execute (from previous command):
<code>docker exec -it {container_id} /bin/sh</code>

Then go to directory (with cd ..) /opt/bitnami/kafka/bin

#### Create topic

Option 1:
- In directory "opt/bitnami/kafka/bin"
- Run: <code>kafka-topics.sh --create --topic quickstart-events --bootstrap-server kafka:9092</code>
Option 2:
- Edit and run the javascript file (file should be parametrized later):
- Run with: node topics.js (in cmd)

#### List topics
In directory "opt/bitnami/kafka/bin"

kafka-topics.sh --list --bootstrap-server kafka:9092

#### Describe a topic
kafka-topics.sh --describe --topic quickstart-events --bootstrap-server localhost:9092


#### Start up a producer and create events
Option 1:
In directory "opt/bitnami/kafka/bin"
kafka-console-producer.sh --topic quickstart-events --bootstrap-server kafka:9092

Then below you can enter topics
Option 2:
Run the javascript file
node producer.js {event}

#### Consume events

#### 

