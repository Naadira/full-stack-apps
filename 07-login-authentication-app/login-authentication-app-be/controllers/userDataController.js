const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const JWT_TOKEN = 'bhbgcvxcexefvtyhniknuvy'

const displayUserData = async (request,response)=>
{
    const {token} = request.body
    try{
        const loggedInUser = jwt.verify(token,JWT_TOKEN)
        const loggedInUserEmail = loggedInUser.email 
        const authenticatedUser = await userModel.findOne({email : loggedInUserEmail})
        
        if(authenticatedUser)
        {
            return response.status(200).json(authenticatedUser)
        }

        response.status(400).json({message : 'Something went wrong, try again'})
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {displayUserData}

//process
//once token gets verified data are displayed, because data should be shown to respective user.