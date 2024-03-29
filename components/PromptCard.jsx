import {useState} from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname,useRouter } from "next/navigation";

const PromptCard = ({prompt,handleTagClick, handleEdit, handleDelete}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => setCopied(false), 3000);
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 justify-start items-center gap-3 cursor-pointer">
        <Image
        src={prompt.creator.image}
        alt="user_image"
        width={40}
        height={40}
        className="rounded-full object-contain" 
        />
        </div>

        <div className="flex flex-col">
          <h3 className="font-satoshi font-semibold text-gray-900  ">
            {prompt.creator.username}
          </h3>
          <p className="font-inter text-sm text-gray-500">
            {prompt.creator.email}
          </p>
        </div>
      </div>

      <div className="copy_btn" onClick={handleCopy}>
        <Image
        alt="copy_tick_image"
        src={copied === false ? '/assets/icons/copy.svg' : '/assets/icons/tick.svg'}
        width={12}
        height={12}
        />
      </div>
      <p className="font-satoshi text-sm text-gray-700">
        {prompt.prompt}
      </p>
      <p className="font-inter text-sm blue_gradient cursor-pointer"
      onClick={()=> handleTagClick && handleTagClick(prompt.tag)}>
        {prompt.tag}
      </p>
    </div>
  );
};

export default PromptCard;
