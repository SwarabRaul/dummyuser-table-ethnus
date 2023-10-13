import React, { useState, useEffect } from "react";
import "./UserTable.css";

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.users);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Dummy User Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="3">Loading...</td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.username}</td>
                                <td>{user.domain}</td>
                                <td>{user.university}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <button onClick={() => window.location.href = "https://swarabraul.github.io/React-Ethnus-IndexPage/"}>Back To Index Page</button>
        </div>
    );
};

export default UserTable;
