import React from "react";

const background = {
  height: '100vh',
  backgroundColor: '#eee',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '50px',
}

const sellerName = {
  fontSize: '30px',
  fontWeight: 'bold',
  color: '#EB4F27',
  border: '1px solid #999',
  borderRadius: '10px',
  padding: '25px 0px',
  backgroundColor: '#fff',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

const starWrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#fff',
  marginTop: '40px',
  padding: '5px 0px',
}

const stars = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '60%',
}

const score = {
  marginLeft: '20px',
  fontSize: '30px',
  fontWeight: 'bold',
  color: '#EB4F27',
}

const user = {
  marginTop: '30px',
  width: '100%',
}

const userIcon = {
  borderRadius: '50%',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

const review = {
  marginTop: '10px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  alignItems: 'center',
}

const textareaWrapper = {
  backgroundColor: '#fff',
  padding: '5px',
  width: '100%',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '10px',
}

const reviewText = {
  borderRadius: '10px',
  height: '200px',
  outline: 'none',
  border: '0px solid transparent',
  width: '100%',
  
}

const imgToRight = {
  display: 'flex',
  justifyContent: 'flex-end',
}

const reviewImg = {
  width: '100px',
  height: '100px',
  margin: '10px',
}

const addImgBtn = {
  marginTop: '20px',
  border: '4px solid transparent',
  borderImage: 'linear-gradient(45deg, #FF6D1A 0%, #FAB55F 70%, #F4DE9A 100%)',
  borderImageSlice: '1',
  borderRadius: '10px',
  width: '100%',
  padding: '20px',
  backgroundColor: '#fff',
  fontSize: '25px',
  fontWeight: '400',
  color: '#EB4F27',
}

const bottomBtns = {
  marginTop: '80px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
}

const cancelBtn = {
  border: 'none',
  borderRadius: '10px',
  width: '170px',
  padding: '20px',
  backgroundColor: '#fff',
  fontSize: '30px',
  fontWeight: '900',
  color: '#999',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'.replace,
}

const submitBtn = {
  border: 'none',
  borderRadius: '10px',
  width: '170px',
  padding: '20px',
  backgroundColor: '#EB4F27',
  fontSize: '30px',
  fontWeight: '900',
  color: '#fff',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

const CreateReview = () => {

  return (
    <div style={background}>
      <div style={sellerName}>
        {data.name}
      </div>
      <div style={starWrapper}>
        <div style={stars}>
          <img width={50} alt="뭐가 궁금해" src="/images/review-star.png" />
          <img width={50} alt="뭐가 궁금해" src="/images/review-star.png" />
          <img width={50} alt="뭐가 궁금해" src="/images/review-star.png" />
          <img width={50} alt="뭐가 궁금해" src="/images/review-star-gray.png" />
          <img width={50} alt="뭐가 궁금해" src="/images/review-star-gray.png" />
        </div>
        <p style={score}>
          {data.stars}
        </p>
      </div>
      <div style={user}>
        <img width={80} style={userIcon} alt="뭐가 궁금해" src="/images/review-user-icon.png" />
      </div>
      <div style={review}>
        <div style={textareaWrapper}>
          <textarea style={reviewText} placeholder="리뷰를 작성해주세요." />
          <div style={imgToRight}>
            <img width={50} style={reviewImg} alt="뭐가 궁금해" src="/images/review-food.png" />
          </div>
        </div>
        <button style={addImgBtn}>사진 첨부하기⊕</button>
      </div>
      <div style={bottomBtns}>
        <button style={cancelBtn}>취소</button>
        <button style={submitBtn}>작성</button>
      </div>
    </div>
  );
};

export default CreateReview;

const data = {
  "id": 1,
  "name": "사모님 돈까스",
  "stars": '3.0',
}