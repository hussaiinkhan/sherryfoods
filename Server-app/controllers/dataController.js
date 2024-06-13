const asyncHandler = require('express-async-handler');


const getMenuData = asyncHandler(async (req, res) => {
    try {
        res.send(global.menu)
    } catch (error) {
        console.log(error);
    }
})



module.exports = { getMenuData}