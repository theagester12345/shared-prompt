'use client'
import {useState, useEffect} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import ProfileComponent from "@components/Profile";

const Profile = () => {

  const {data : session } = useSession ();
  console.log("session", session);

  const [prompts, setPrompts] = useState([]);

  useEffect( ()=>{
    if (session){
      const fetchPrompts = async ()=>{
        console.log("user id", session?.user.id);
        const response = await fetch(`/api/users/${session?.user.id}/prompts`);
        const data = await response.json();
  
        setPrompts(data);
      }
  
      fetchPrompts();
    }
   
  },[session]);

  const handleEdit = () => {

  }

  const handleDelete = async () => {

  }
  
  return (
    <ProfileComponent
    name ="My"
    desc = "Welcome to your Page"
    data = {prompts}
    handleEdit = {handleEdit}
    handleDelete = {handleDelete} 
    />
  )
};

export default Profile;
