import { FaPencil } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";
export default function PeopleDetails({
  fetchUsers,
}: {
  fetchUsers: () => void;
}) {
  const { uid, cid } = useParams();
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;
  return (
    <div
      className="position-fixed top-0 end-0
                    bottom-0 bg-white p-4 shadow w-50"
    >
      <Link
        to={`/Kanbas/Courses/${cid}/People`}
        className="btn position-fixed end-0 top-0"
      >
        <IoCloseSharp className="fs-1" />{" "}
      </Link>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <div className="text-danger fs-4 wd-name">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}
        {editing && (
          <FaCheck
            onClick={() => saveUser()}
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}
        {!editing && (
          <div className="wd-name" onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}
        {user && editing && (
          <input
            className="form-control w-50 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>
      <b>Roles:</b> <span> {user.role} </span> <br />
      <b>Login ID:</b>
      <span> {user.loginId} </span> <br />
      <b>Section:</b> <span> {user.section} </span> <br />
      <b>Total Activity:</b>
      <span>{user.totalActivity}</span>
      <hr />
      <button
        onClick={() => deleteUser(uid)}
        className="btn btn-danger float-end"
      >
        Delete{" "}
      </button>
      <button
        onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)}
        className="btn btn-secondary float-end me-2"
      >
        Cancel{" "}
      </button>
    </div>
  );
}
