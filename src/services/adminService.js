const token = localStorage.getItem("token");


export const getAllUsers = async () => {

  const res = await fetch("https://sumotiy-application-backend.vercel.app/api/v1/all-users", {
    headers: {
      Authorization: `${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};




export const getAllMembers = async () => {
  

  const res = await fetch("https://sumotiy-application-backend.vercel.app/api/v1/all-members", {
    headers: {
      Authorization: `${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch members");
  }

  return res.json();
};
