const getAllUser = async (req,res) =>{
    res.json({
        message: true,
        name:"kalash"
    })
}

const deleteUser = async (req,res) =>{
    const id = req.params.id
    res.json({
        message: "deleted",
        id: id,
    })
}

const postUser = async (req,res) =>{
    const name = req.body.name;
    const email = req.body.email;
    res.json({
        message: "success",
        name: name,
        email: email,
    })
}

const putUser = async(req,res) =>{
    const email = req.body.email
    res.json({
        message:`${email} edited successfully`
    })
}

module.exports = {getAllUser,deleteUser,postUser,putUser};
