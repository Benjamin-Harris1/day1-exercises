import { User } from "../data/data";

interface UserTableProps {
    users: User[];
}

export function UserTable({ users }: UserTableProps) {
    return (
    <table className="simple-table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
        </tr>
    </thead>
    <tbody>
        {users.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>{user.isActive ? "Yes" : "No"}</td>
            </tr>
        ))}
    </tbody>
  </table>
  );
}