import React from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
        {console.log("Data in PromptCardList")}
        {console.log(data)}
        {data.map((prompt)=> (
              <PromptCard
              key = {prompt._id}
              prompt = {prompt}
              handleTagClick = {handleTagClick}
              />
  
        ))}

    </div>
  );
}

export default PromptCardList
