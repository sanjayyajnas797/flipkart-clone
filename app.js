// const mqtt = require("mqtt");
// const fs = require("fs");
// const path = require("path");

// // -------------------------
// // CONFIG
// // -------------------------
// const DEVICE_ID = "5789000000159341";

// const BROKER_URL = "mqtts://80370jdufd.zohoiothub.in";
// const BROKER_PORT = 8883;

// const USERNAME = `/80370jdufd/v1/devices/${DEVICE_ID}/connect`;
// const PASSWORD = "3d1e5a26e4ee2bb320a115d622ea2db0e582d9dbe95ffd14cd93fc3ea1fe8b";

// const caFile = fs.readFileSync(path.join(__dirname, "rootCA.crt"));

// // -------------------------
// // MQTT OPTIONS
// // -------------------------
// const options = {
//     clientId: DEVICE_ID,
//     username: USERNAME,
//     password: PASSWORD,
//     port: BROKER_PORT,
//     ca: caFile,
//     rejectUnauthorized: false,
// };

// const client = mqtt.connect(BROKER_URL, options);

// // -------------------------
// // ON CONNECT
// // -------------------------
// client.on("connect", () => {
//     console.log("CONNECTED!");

//     const commandTopic = `/devices/${DEVICE_ID}/commands`;
//     client.subscribe(commandTopic);
//     console.log("Subscribed to:", commandTopic);
// });

// // -------------------------
// // RECEIVE COMMANDS
// // -------------------------
// client.on("message", (topic, message) => {
//     console.log(`Command Received on ${topic}: ${message}`);

//     let cmd = JSON.parse(message.toString());

//     // COMMAND VALUE (Example: { "pump": "on" } )
//     const commandName = Object.keys(cmd)[0];
//     const commandValue = cmd[commandName];

//     console.log("Command Name:", commandName);
//     console.log("Command Value:", commandValue);

//     // ---------------------
//     // DO YOUR ACTION HERE
//     // (Control pump relay etc.)
//     // ---------------------
//     if (commandValue === "on") {
//         console.log("🚰 Pump TURNING ON...");
//     } else if (commandValue === "off") {
//         console.log("🛑 Pump TURNING OFF...");
//     }

//     // -------------------------
//     // SEND ACK BACK TO ZOHO
//     // -------------------------
//     const ackTopic = `/devices/${DEVICE_ID}/commands/ack`;

//     const ackPayload = JSON.stringify({
//         [commandName]: {
//             status: "SUCCESS",
//             message: "Pump action executed"
//         }
//     });

//     client.publish(ackTopic, ackPayload);
//     console.log("ACK Sent:", ackPayload);
// });

// // -------------------------
// // ERROR
// // -------------------------
// client.on("error", err => {
//     console.log("MQTT Error:", err);
// });





const express=require('express')
const app=express()

const port=3000
app.use(express.json())
const cors=require('cors')
app.use(cors())
const dotenv=require('dotenv')
dotenv.config()
const db=require('./db')
db()
const route=require('./router')
app.use(route)
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})