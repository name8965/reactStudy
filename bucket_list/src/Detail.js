import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  deleteBucketFB,
  removeBucket,
  updateBucket,
  updateBucketFB,
} from "./redux/modules/bucket";

const Detail = (props) => {
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{bucket_list[bucket_index] ? bucket_list[bucket_index].text : ""}</h1>
      <button
        onClick={() => {
          // dispatch(updateBucket(bucket_index));
          console.log(bucket_list[bucket_index].id);
          dispatch(updateBucketFB(bucket_list[bucket_index].id));
        }}
      >
        완료하기
      </button>
      <button
        onClick={() => {
          console.log("삭제하기");
          // dispatch(removeBucket(bucket_index));
          console.log(bucket_list[bucket_index].id);
          dispatch(deleteBucketFB(bucket_list[bucket_index].id));
          history.goBack();
        }}
      >
        삭제하기
      </button>
    </div>
  );
};
export default Detail;
