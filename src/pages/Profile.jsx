

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <div className="text-center mt-10 text-red-500 text-xl">
                Please login to view profile!
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-10 text-center">
            <h2 className="text-3xl font-bold mb-4">My Profile</h2>

            <img
                src={user.photoURL || "https://i.ibb.co/0jXk8G2/user.png"}
                alt="Profile"
                className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-md"
            />

            <h3 className="text-xl mt-3 font-semibold">
                {user.displayName || "No Name Found"}
            </h3>

            <p className="text-gray-600">{user.email}</p>

            <div className="mt-5">
                <button className="btn btn-primary btn-sm">
                    Edit Profile (Coming Soon)
                </button>
            </div>
        </div>
    );
};

export default Profile;




