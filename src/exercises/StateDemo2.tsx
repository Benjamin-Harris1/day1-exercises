import { useState, ChangeEvent } from "react";
import { BaseProps } from "../types";
import { User } from "../data/data";


export default function StateDemo2({ title }: BaseProps) {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Max Power",
    email: "max.power@email.com",
    isActive: true,
  });


  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setUser(prevUser => ({
        ...prevUser, 
        name: e.target.name === "name" ? e.target.value : prevUser.name,
        email: e.target.name === "email" ? e.target.value : prevUser.email,
        isActive: e.target.name === "isActive" ? e.target.checked : prevUser.isActive
    }))
  }


  return (
    <>
      <h2>{title}</h2>
      <div>
        <p>ID: {user.id}</p>{" "}
      </div>
      First Name: <input name="name" value={user.name} onChange={handleNameChange} />
      Email: <input name="email" value={user.email} onChange={handleNameChange} />
      Active: <input type="checkbox" checked={user.isActive} name="isActive" onChange={handleNameChange} />
      <p style={{ marginTop: 15 }}> {JSON.stringify(user)} </p>
    </>
  );
}
