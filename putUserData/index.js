'use strict'
const AWS = require('aws-sdk');
AWS.config.update({ region: "us-west-1" });

exports.handler = async (event, context) => {
    console.log(JSON.stringify(`Event: event`))
    const ddb = new AWS.DynamoDB({ apiVersion: "2020-10-21" });
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" });

    const params = {
        TableName: "Users",
        Item: {
            id: "12346",
            firstname: "Bob",
            lastname: "Mulligan",
            address: {
                line_1: "6 Morning Dew",
                line_2: "",
                county: "Orange",
                state: "CA",
                country: "US",
                zipcode: "92304"
            }
        }
    }

    try {
        const data = await documentClient.put(params).promise();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}