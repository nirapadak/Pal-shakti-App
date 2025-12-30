

export const registerUser = async (data) => {
  const response = await fetch("https://sumotiy-application-backend.vercel.app/api/v1/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Server error");
  }

  return response.json();
};


export const logout = () => {
  localStorage.clear();
  window.location.href = "/login";
};


export const loginUser = async (data) => {
  const response = await fetch("https://sumotiy-application-backend.vercel.app/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Invalid credentials");
  } 
  return response.json();
};
export const getAuth = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  return { token, user: user ? JSON.parse(user) : null };
};