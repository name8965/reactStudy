import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  deleteBucketFB,
  removeBucket,
  updateBucket,
  updateBucketFB,
} from "./redux/modules/bucket";
import Button from "@material-ui/core/Button";

const Detail = (props) => {
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{bucket_list[bucket_index] ? bucket_list[bucket_index].text : ""}</h1>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          // dispatch(updateBucket(bucket_index));
          console.log(bucket_list[bucket_index].id);
          dispatch(updateBucketFB(bucket_list[bucket_index].id));
        }}
      >
        완료하기
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          console.log("삭제하기");
          // dispatch(removeBucket(bucket_index));
          console.log(bucket_list[bucket_index].id);
          dispatch(deleteBucketFB(bucket_list[bucket_index].id));
          history.goBack();
        }}
      >
        삭제하기
      </Button>
    </div>
  );
};
export default Detail;
