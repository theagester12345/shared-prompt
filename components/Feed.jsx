'use client';

import { useState, useEffect } from "react";
import PromptCardList from "./PromptCardList";

const Feed = () => {
  const [searchText, setSearchText] = useState("");

  const [prompts , setPrompts ] = useState([]);

  const handleSearchchange = (e) => {

  }

  useEffect( ()=>{
    const fetchPrompts = async ()=>{
      const response = await fetch("/api/prompt");
      const data = await response.json();


      setPrompts(data);
    }

    fetchPrompts();
  },[]);


  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
        type="text"
        placeholder="Search For Prompt"
        required
        value={searchText}
        onChange={handleSearchchange}
        className="search_input peer"/>
      </form>

      <PromptCardList
      data={prompts}
      handleTagClick={()=> {}}
      />
    </section>
  );
};

export default Feed;
