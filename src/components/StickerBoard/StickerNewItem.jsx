import { useState } from "react";

export default function StickerItem(props) {
  const { data, className, onSubmit, placeholder, onInputChange } = props;
  const [input, setInput] = useState(data);

  return (
    <li className={className}>
      <form
        action=""
        onSubmit={(e) => {
          setInput(onSubmit(e, input));
        }}
      >
        <textarea
          value={input.description}
          placeholder={placeholder}
          onChange={(e) => {
            setInput(onInputChange(e, input));
          }}
        />
        <button>Add</button>
      </form>
    </li>
  );
}
