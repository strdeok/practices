import { addDoc, collection, updateDoc } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextArea = styled.textarea`
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  background-color: black;
  width: 100%;
  resize: none;
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

const AttachFileButton = styled.label`
  padding: 10px 0px;
  color: #1d9bf0;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #1d9bf0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const AttachFileInput = styled.input`
  display: none;
`;

const SubmitBtn = styled.input`
  background-color: #1d9bf0;
  color: white;
  border: none;
  padding: 10px 0px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
`;

export default function PostTweetForm() {
  const [isLoaing, setLoading] = useState(false);
  const [tweet, setTweet] = useState("");
  const [file, setFile] = useState(null);

  const onChange = (e) => {
    setTweet(e.target.value);
  };

  const onFileChange = (e) => {
    const { files } = e.target;
    // input에서 파일 추출
    const maxSize = 1024 * 1024
    const fileSize = files[0].size
    if (files && files.length === 1 && fileSize < maxSize) {
      // 파일이 하나인지 확인
      setFile(files[0]);
      //   그 파일을 저장
    } else {
      alert("1MB 미만의 파일만 첨부 가능합니다");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user || isLoaing || tweet == "" || tweet.length > 180) return;

    try {
      setLoading(true);
      /** addDoc = document 생성 함수 */
      const doc = await addDoc(collection(db, "tweets"), {
        // db = firestore 인스턴스, tweets = collection 이름
        // 추가하려는 데이터
        tweet, // tweet 작성내용 가져오기
        createdAt: Date.now(), // 생성시간
        username: user.displayName || "Anonymous", // 작성자
        userId: user.uid,
      });
      if (file) {
        const locationRef = ref(
          storage,
          `tweets/${user.uid}/${doc.id}`
        );
        const result = await uploadBytes(locationRef, file); // 파일 업로드를 storage에 저장
        const url = await getDownloadURL(result.ref); // 업로드한 파일 url 가져오기
        await updateDoc(doc, { // 파일 url doc에 추가
          photo: url}); 
      }

      setTweet("")
      setFile(null)

    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextArea
        required
        rows={5}
        maxLength={180}
        onChange={onChange}
        value={tweet}
        placeholder="What is going?"
      ></TextArea>
      <AttachFileButton html For="file">
        {file ? "Photo added" : "Add photo"}
      </AttachFileButton>
      <AttachFileInput
        onChange={onFileChange}
        type="file"
        id="file"
        accept="image/*"
      ></AttachFileInput>
      <SubmitBtn
        type="submit"
        value={isLoaing ? "Posting..." : "Post Tweet"}
      ></SubmitBtn>
    </Form>
  );
}
