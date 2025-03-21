import socialMediaData from '../data/socialMediaData.js';

// Helper function to extract users from socialMediaData
const extractUsers = () => {
    const userList = {};
    
    for (const [id, userData] of Object.entries(socialMediaData.users)) {
      userList[id] = {
        id,
        name: userData.name,
        email: userData.email
      };
    }
    
    return { users: userList };
  };
  
  // Get all users
  export const getUsers = (req, res) => {
    try {
      const users = extractUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };