const getAdmin= async (req,res) =>{
    res.json({
        name:"kalash tyagi",
        id:1,
        role:"super admin"
    })
}
module.exports = getAdmin;