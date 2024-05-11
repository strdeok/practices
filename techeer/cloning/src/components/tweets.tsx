import React, { useState } from "react";
import { ITweet } from "./timeline";
import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { deleteDoc, deleteField, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;

const Column = styled.div``;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`;

const DeleteButton = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

const EditButton = styled.button`
  background-color: #1d9bf0;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const EditActivate = styled.div``;

const EditInput = styled.textarea`
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  background-color: black;
  width: 100%;
  resize: none;
  margin: 20px 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`;

const EditSubmit = styled.button`
  background-color: #1d9bf0;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Tweet({ username, photo, tweet, userId, id }: ITweet) {
  const [new_tweet, set_Newtweet] = useState("");
  const [active, setActive] = useState(false);
  const user = auth.currentUser;
  const onDelete = async () => {
    const ok = confirm("이 트윗을 삭제하시겠습니까?");

    if (!ok || user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, "tweets", id));
      if (photo) {
        const photoRef = ref(storage, `tweets/${user.uid}/${id}`); // 사진경로
        await deleteObject(photoRef); // 사진삭제
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  const onEdit = () => {
    console.log(active);
    if (active == true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const onChange = (e) => {
    set_Newtweet(e.target.value);
  };

  const SubmitEdit = async () => {
    // 삭제하고
    if (user?.uid !== userId) return;
    try {
      await updateDoc(doc(db, "tweets", id), {
        tweet: deleteField(),
      });
    } catch (e) {
      console.log(e);
    } finally {
      await updateDoc(doc(db, "tweets", id), {
        tweet: new_tweet,
      });
      setActive(false);
    }
  };

  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        <Payload>{tweet}</Payload>
        {user?.uid === userId ? (
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        ) : null}
        {user?.uid === userId ? (
          <>
            <EditButton onClick={onEdit}>Edit</EditButton>
            {active ? (
              <EditActivate>
                <EditInput onChange={onChange}></EditInput>
                <EditSubmit onClick={SubmitEdit}>Complete</EditSubmit>
              </EditActivate>
            ) : null}
          </>
        ) : null}
      </Column>
      <Column>{photo ? <Photo src={photo}></Photo> : null}</Column>
    </Wrapper>
  );
}
