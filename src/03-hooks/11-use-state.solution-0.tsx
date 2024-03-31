import { useState } from "react";

interface Tag {
  id: number;
  value: string;
}

export default function Tags() {
  const [tags, setTags] = useState<Tag[]>([]);
  return (
    <>
      {tags.map((tag) => {
        return <div key={tag.id}>{tag.value}</div>;
      })}
      <button
        onClick={() => {
          setTags([
            ...tags,
            {
              id: new Date().getTime(),
              value: "New",
            },
          ]);
        }}
      >
        Add Tag
      </button>
    </>
  );
}
