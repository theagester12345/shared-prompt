import React from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick, handleEdit, handleDelete}) => {
  return (
    <div className="mt-16 prompt_layout">
        {data.map((prompt)=> (
              <PromptCard
              key = {prompt._id}
              prompt = {prompt}
              handleTagClick = {handleTagClick && handleTagClick}
              handleDelete={handleDelete && handleDelete}
              handleEdit={handleEdit && handleEdit}
              />
  
        ))}

    </div>
  );
}

export default PromptCardList
