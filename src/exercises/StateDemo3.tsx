import { BaseProps } from "../types";
import { users as usersFromDB, User } from "../data/data";
import { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
type Props = BaseProps;


export default function StateDemo3({ title }: Props) {
  const [users, setUsers] = useState<User[]>(usersFromDB || []);
  //Derived value. No need for a useState here
  //const nextId = 1 + users.reduce((max, user) => (user.id > max ? user.id : max), users[0].id);
  const nextId = 1 + (users.length > 0 ? users.reduce((max, user) => (user.id && user.id > max ? user.id : max), 0) : 0);
  
  

  const onSubmitUser = (newUser: User) => {
    newUser.id = nextId;
    // Creates new array with all existing users + the new user, and sets this array as the new state
    setUsers([...users, newUser]);
    console.log(users);
  };

  // Logs the users array every time it changes (i.e. when a new user is added) because of the dependency array
  useEffect(() => {
    console.log(users);
    }, [users]);

  return (
    <>
      <h2>{title}</h2>
      <UserTable users={users} />
      <UserForm title="Add User" onSubmitUser={onSubmitUser} />
    </>
  );
}
