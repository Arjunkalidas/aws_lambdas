'use strict'
const AWS = require('aws-sdk');
AWS.config.update({ region: "us-west-1" });

exports.handler = async (event, context) => {
    console.log(JSON.stringify(`Event: event`))
    const ddb = new AWS.DynamoDB({ apiVersion: "2020-10-21" });
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" });

    const params = {
        TableName: "Users",
        Key: {
            id: "12345"
        }
    }

    try {
        const data = await documentClient.get(params).promise();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}