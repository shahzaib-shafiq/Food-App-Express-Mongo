const testUserController = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: 'Test User'
        })
    } catch (error) {
        console.error('Error in testUserController:', error);
        res.status(500).send('Internal Server Error');
    }

}

module.exports = { testUserController };