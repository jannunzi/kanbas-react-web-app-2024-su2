import * as client from "./client";
import * as albumClient from "../../../Napster/client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const [likes, setLikes] = useState<any>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));

    navigate("/Kanbas/Account/Signin");
  };
  const fetchLikes = async () => {
    const likes = await albumClient.findAlbumsLikedByUser();
    setLikes(likes);
  };

  useEffect(() => {
    fetchProfile();
    fetchLikes();
  }, []);
  return (
    <div className="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <input
            className="wd-username form-control mb-2"
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <input
            className="wd-password form-control mb-2"
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <input
            className="wd-firstname form-control mb-2"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <input
            className="wd-lastname form-control mb-2"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <input
            className="wd-dob form-control mb-2"
            value={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
          />
          <input
            className="wd-email form-control mb-2"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            className="wd-role form-control mb-2"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>{" "}
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>{" "}
            <option value="STUDENT">Student</option>
          </select>
          <button
            onClick={signout}
            className="wd-signout-btn btn btn-danger w-100"
          >
            Sign out
          </button>
          <hr />
          {likes && likes.length > 0 && (
            <div>
              <h2>Likes</h2>
              <ul className="list-group">
                {likes.map((like: any) => (
                  <li className="list-group-item" key={like._id}>
                    <Link to={`/Kanbas/Napster/Albums/${like.albumId}`}>
                      <img
                        src={albumClient.albumImageUrl({ id: like.albumId })}
                      />

                      {like.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
