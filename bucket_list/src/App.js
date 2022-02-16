import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { useDispatch, useSelector } from "react-redux";
import {
  createBucket,
  loadBucketFB,
  addBucketFB,
  updateBucket,
} from "./redux/modules/bucket";
import Progress from "./Progress";
import { db } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import Spinner from "./Spinner";

function App() {
  const [list, setList] = React.useState([
    "영화관 가기",
    "매일 책읽기",
    "수영 배우기",
  ]);
  const text = React.useRef(null);
  const dispatch = useDispatch();
  const is_loaded = useSelector((state) => state.bucket.is_loaded);

  React.useEffect(async () => {
    // console.log(db);
    const query = await getDocs(collection(db, "bucket"));
    query.forEach((doc) => {
      // console.log(doc.id, doc.data());
    });

    //add
    // addDoc(collection(db, "bucket"), { text: "new", completed: false });
    //update
    const docRef = doc(db, "bucket", "y9S0oOSnLy3G0U7sN86J");
    // updateDoc(docRef, { completed: true });
    //delete
    // deleteDoc(docRef);

    // addDoc(collection(db, "buckets"), { text: "new12", completed: false });

    dispatch(loadBucketFB());
  }, []);

  const addBucketList = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // setList([...list, text.current.value]);
    //리덕스에 넣기
    // dispatch(createBucket({ text: text.current.value, completed: false }));

    //firebase
    dispatch(addBucketFB({ text: text.current.value, completed: false }));
  };
  // React.useEffect(() => {
  //   click.current.addEventListener("mouseclick", clicktoBucketList);

  //   return () => {
  //     click.current.removeEventListener("mouseclick", clicktoBucketList);
  //   };
  // }, []);

  // const clicktoBucketList = () => {
  //   <Link to="/detail"></Link>;
  // };

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress />
        <Line />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <Switch>
          <Route path="/" exact>
            <BucketList list={list} />
          </Route>
          <Route path="/detail/:index" exact>
            <Detail />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        위로가기
      </button>

      {!is_loaded && <Spinner />}
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  & > * {
    padding: 5px;
  }
  & input {
    border: 2px solid #888;
    width: 70%;
    margin-right: 10px;
  }
  & input:focus {
    outline: none;
    border: 2px solid #a673ff;
  }
  & button {
    width: 25%;
    color: #fff;
    border: #a673ff;
    background-color: #a673ff;
  }
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
