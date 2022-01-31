const {Kafka} = require("kafkajs")

run();
async function run(){

    try{
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers":["localhost:9092"]
        })
        const admin = kafka.admin();
        console.log("Connecting.....")
        await admin.connect()
        console.log("Connected!")

        const result = await admin.createTopics({
            "topics":[{
                "topic":"Topic3",
                "numPartitions": 3
            }]
        })
        console.log(result)
        console.log("Created successfully")
        await admin.disconnect();
    }
    catch(ex){
        console.error(`Something bad happened: ${ex}`)
    }
    finally{
        process.exit(0);
    }
}