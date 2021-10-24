import { toast } from "react-toastify";

const catchError = (err) => {
  if (err.response) {
    if (err.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      toast.warn("You're unauthorized, please sign in");
    } else if (err.response.status === 403) {
      toast.warn("Unauthorized action");
    }
  } else if (err.message === "Network Error") {
    toast.error("Error occured, please try again");
  } else {
    if (err === "No current user") return;
    if (err.message) toast.error(err.message);
    else {
      if (typeof err === "string") {
        toast.error(err);
      }
    }
    console.log(err);
  }
};

// #region [Auth]
export const me = async () => {
  try {
    // const currentUser = await Auth.currentAuthenticatedUser();
    // return currentUser;
    const currentUser = {};
    return currentUser;
  } catch (err) {
    console.log("auth error:", err);
    catchError(err);
    return false;
  }
};
