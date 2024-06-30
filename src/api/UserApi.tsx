import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

export type CreateNewUser = {
  auth0Id: string;
  email: string;
};

const baseUrl = import.meta.env.VITE_BASE_URL;

const useCreateNewUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createNewUserRequest = async (user: CreateNewUser) => {
    const accessToken = await getAccessTokenSilently();

    console.log(user, "baseurl", baseUrl, "token", accessToken);

    const response = await fetch(`${baseUrl}/api/user/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  };
  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createNewUserRequest);
  return { createUser, isLoading, isError, isSuccess };
};

export { useCreateNewUser };
