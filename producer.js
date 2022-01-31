const {Kafka} = require("kafkajs")
const msg = process.argv[2];

run();
async function run(){

    try{
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers":["localhost:9092"]
        })
        const producer = kafka.producer();
        console.log("Connecting.....")
        await producer.connect()
        console.log("Connected!")
        // a-m partition 1
        // n-z partition 2
        const partition = msg[0] < "N" ? 0 : 1;

        const result = await producer.send({
            "topic":"Users",
            "messages": [
                {   "key":"key1",
                    "value": msg,
                    "partition":0
                }
                ],
        })

        console.log(result)
        console.log(`Send successfully ${JSON.stringify(result)}`)
        await producer.disconnect();
    }
    catch(ex){
        console.error(`Something bad happened: ${ex}`)
    }
    finally{
        process.exit(0);
    }
}