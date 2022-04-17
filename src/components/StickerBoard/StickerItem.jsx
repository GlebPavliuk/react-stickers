import { useState } from "react";

export default function StickerItem({ data, className, onClick, onBlur, onInputChange, date }) {
  const { id, color } = data;
  const [input, setInput] = useState(data);
  const currentDate = new Date(date);
  const viewDate = currentDate.toDateString();
  const viewTime = currentDate.toLocaleTimeString();

  return (
    <li
      className={className}
      style={{
        backgroundColor: color,
      }}
    >
      <div>
        <span>&nbsp;{` ${viewDate}  ${viewTime} `}&nbsp;</span>
        <button onClick={() => onClick(id)}>&#x2716;</button>
      </div>
      <textarea
        value={input.description}
        onChange={(e) => {
          setInput(onInputChange(e, input));
        }}
        onBlur={() => onBlur(input, id)}
      />
    </li>
  );
}
