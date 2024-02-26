interface ProfileProps {
    name: string;
    email: string;
    isActive: boolean;
    singleLine: boolean;
}

export function Profile({ name, email, isActive, singleLine }: ProfileProps) {
        if (singleLine) 
            return (
                <div>
                    <p>{name}, {email}, {isActive ? "Active" : "Not active"}</p>
                </div>
            )
            else 
            return (
                <div>
                    <p style={{ fontWeight: "bold"}}>Name: {name}</p>
                    <p>{email}</p>
                    <p>{isActive ? "Active" : "Not active"}</p>
                </div>
            )
}