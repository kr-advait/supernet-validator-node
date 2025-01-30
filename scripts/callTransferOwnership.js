const axios = require("axios")
const backendUrl = "http://explorer.chaingames.io:8080"
const validatorAddress = process.argv[2];

async function transferOwnership(address) {
    const { data } = await axios({
        method : "POST",
        url : `${backendUrl}/transfer-ownership`,
        headers : {
            "Content-Type" : "application/json"
        },
        data : {
            validatorAddress : address
        }
    })
    console.log("Ownership transferred :", data)
}

transferOwnership(validatorAddress);