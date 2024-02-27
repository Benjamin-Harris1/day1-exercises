import { BaseProps } from "../types";
import { users } from "../data/data";
import UserTable from "../components/UserTable";
{/**import { Profile } from "../components/Profile";*/}
type Props = BaseProps;


export default function ListDemo({ title }: Props) {
  return (
    <>
      <h2>{title}</h2>
      <UserTable users={users} />
      {/** 2-extra exercise */}
      {/** {users.map((user) => (
        <Profile
            key={user.id}
            name={user.name}
            email={user.email}
            isActive={user.isActive}
            singleLine={true}
        />
      ))} */}
    </>
  );
}
