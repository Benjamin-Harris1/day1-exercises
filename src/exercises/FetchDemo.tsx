import { useEffect, useState } from "react";
import { BaseProps } from "../types";
const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;

// Define cache outside of component to ensure it persists through renders
const userCache: { [key: number]: User } = {};

type User = { id: number; name: string };


//Utility function to fetch a user from the server
function fetchUser(userId: number, options?: object): Promise<User> {
    // If the user for the userId is present in userCache, return a resolved promise with the user
    if (userCache[userId]){
        return Promise.resolve(userCache[userId]);
    }
  return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) => res.json()).then((data) => {
    // Store the fetched user in userCache
    userCache[userId] = data;
    return data;
  });
}


export default function FetchDemo1({ title }: BaseProps) {
  const [userId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);


  //Use this to fetch the next user when the "Next User" button is clicked
  //Make sure you understand why we don't need useEffect here
  const fetchNextUser = async () => {
    // Fix 'user.id is possibly undefined ts error'
    const currentUserId = user?.id ?? 0;
    const nextUser = currentUserId + 1 <= 15 ? currentUserId + 1 : 1;
    //Do not set call setUserId here it will cause an extra render
    setLoading(true);
    const theUser = await fetchUser(nextUser);
    setLoading(false);
    setUser(theUser);
  };


  //Call fetchUser(..) immediately when the component is mounted
  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

      fetchUser(userId, { signal }).then((response) => {
        setUser(response);
        setLoading(false);
        console.log(response);
      });

      return () => abortController.abort();
  }, [userId]);


  return (
    <>
      <h2>{title}</h2>
      {loading ? <p style={{ fontWeight: "bold" }}>Loading...</p> :user && JSON.stringify(user)}
      <br />
      <button onClick={fetchNextUser}>Next User</button>
    </>
  );
}
