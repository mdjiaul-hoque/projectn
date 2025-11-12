import React, { useState } from "react";
import { auth } from "../firebase/firebase.config";
// import auth from "../Firebase/firebase.init"
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

export default function Profile() {
    
  const user = auth.currentUser;
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ displayName: user?.displayName || "", photoURL: user?.photoURL || "" });

  const handleUpdate = async e => {
    e.preventDefault();
    try {
      await updateProfile(user, { displayName: form.displayName, photoURL: form.photoURL });
      toast.success("Profile updated");
      setEditing(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <h2>My Profile</h2>
      <img src={user?.photoURL || "/default-avatar.png"} alt="avatar" width={120} />
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>
      <button onClick={() => setEditing(true)}>Update Profile</button>

      {editing && (
        <form onSubmit={handleUpdate}>
          <input value={form.displayName} onChange={e => setForm({...form, displayName: e.target.value})} />
          <input value={form.photoURL} onChange={e => setForm({...form, photoURL: e.target.value})} />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
}
