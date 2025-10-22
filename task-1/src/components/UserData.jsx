import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import UserCard from "./UserCard";

const UserData = () => {
  // state to store the fetched users data
  const [users, setUsers] = useState([]);

  // state to track loading status while data is being fetched
  const [loading, setLoading] = useState(true);

  // state to capture and display any error that occurs during fetching
  const [error, setError] = useState(null);

  // useEffect runs once on component mount to fetch user data from API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch users.");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // show a loading spinner while data is being fetched
  if (loading) return <Spinner />;

  // show error message if fetching fails
  if (error) return <p className="text-center text-sky-700">Error: {error}</p>;

  // render user cards if data is available, otherwise show fallback message
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {users.length === 0 ? (
        <p>No users found. try again!</p>
      ) : (
        users.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </main>
  );
};

export default UserData;
