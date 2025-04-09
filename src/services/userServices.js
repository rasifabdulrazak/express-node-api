const User = require('../db/models').User;

const getUserByMail = async (email)=> {
    try {
        const user = await User.findOne({
            where: {
                email: email.trim().toLowerCase()
            }
        });
        return user;
    } catch (error) {
        console.error("Error fetching user by email:", error);
        throw error;
    }
};

const createUser = async (data) => {
    return await User.create(data);
  };

module.exports = {
    getUserByMail,
    createUser
}