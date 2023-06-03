import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useState } from "react";

export default function FetchList() {
  const [postList, setPostList] = useState([]);

  const handleLoad = async () => {
    let postid = document.querySelector("#postid").value;
    let url = "";

    if (postid !== null) {
      url = `https://jsonplaceholder.typicode.com/posts/${postid}`;
    } else {
      url = "https://jsonplaceholder.typicode.com/posts";
    }

    let result = await fetch(url).then((response) => response.json()); 
    setPostList(result); 
  };

  return (
    <div style={{ width: "100%", marginLeft: 50, marginRight: 50 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <p>Post List App</p>
          <div>
            <Input id="postid" placeholder="Enter Post id" />
            <Button onClick={handleLoad}>Load</Button>
          </div>
          <p>Posts</p>
          <div
            id="tasks"
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              borderTop: "2px solid #000",
              marginTop: 5,
              width: "40%",
            }}
          >
            {typeof postList == "object" && <Card>{postList.title}</Card>}
            {postList.length > 0 && (
              <>
                {postList.map((value, index) => {
                  return <Card key={`post-${index}`}>{value.title}</Card>;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
