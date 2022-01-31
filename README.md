# Experiment with Kafka


Run the yml file which will kick off zookeeper and kafka on docker
docker-compose -f docker-compose.yml up -d


Check available images on docker
docker images




run 
docker ps

Get the Container ID of the container running kafka
and execute:
docker exec -it {container_id} /bin/sh


go to directory /opt/bitnami/kafka/bin



#### Create topic

Option 1:
In directory "opt/bitnami/kafka/bin"
Run: 
kafka-topics.sh --create --topic quickstart-events --bootstrap-server kafka:9092

Or edit and run the javascript file (file should be parametrized later):
Run with: node topics.js

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

