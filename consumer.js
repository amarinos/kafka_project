const {Kafka} = require("kafkajs")

run();
async function run(){

    try{
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers":["localhost:9092"]
        })
        const consumer = kafka.consumer({"groupId":"test"});
        console.log("Connecting.....")
        await consumer.connect()
        console.log("Connected!")
    

        consumer.subscribe({
            "topic":"Users",
            "fromBeginning":true
        })

        await consumer.run({
            "eachMessage":async result =>{
                console.log(`${result.message.value} on ${result.partition}`)
            }
        })
        //consumer.disconnect();
    }
    catch(ex){
        console.error(`Something bad happened: ${ex}`)
    }
    finally{
        // process.exit(0);
    }
}