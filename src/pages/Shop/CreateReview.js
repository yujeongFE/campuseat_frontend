import React ,{useState}from "react";
import ReactRating from "react-rating";
import  Modal from "../../components/Modal/Modal";
import { useNavigate } from 'react-router-dom';

const background = {
  background: "#eee",
  backgroundSize: "cover",
  width: "393px",
  height: "860px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  fontFamily: "Noto Sans KR",
}

const sellerName = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#EB4F27',
  border: '0px solid #999',
  borderRadius: '10px',
  backgroundColor: '#fff',
  marginTop: "50px",
  width: '300px',
  height: '56px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  
}

const sellerModalName = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'black',
  border: '0px solid #999',
  borderRadius: '10px',
  padding: '25px 0px',
  backgroundColor: '#fff',
  width: '100%',
  height: '2px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

const sellerModalQuestName = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'black',
  border: '0px solid #999',
  borderRadius: '10px',
  padding: '25px 0px',
  width: '100%',
  height: '2px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontFamily:'Noto Sans KR'
}


const starWrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: '40px',
  padding: '5px 0px',
}

const stars = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
}

const score = {
  fontSize: '30px',
  fontWeight: 'bold',
  color: '#EB4F27',
  margin:"0",
  padding:'0',

}

const user = {
  marginTop: '30px',
  width: '100%',
}

const userIcon = {
  borderRadius: '50%',
  marginLeft:"10%"

}

const review = {
  marginTop: '10px',
  width: '304px',
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
  height: '150px',
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
  display: 'flex',
  justifyContent: 'flex-end',
}

const addImgBtn = {
  marginTop: '50px',
  border: '2px solid #FF8F36',
  borderImageSlice: '1',
  borderRadius: '10px',
  width: '304px',
  padding: '10px',
  backgroundColor: '#fff',
  fontSize: '18px',
  fontWeight: '400',
  textAlign: 'center',
  color: '#EB4F27',
}

const photoInputStyle = {
  display: 'none',
  alignItems: 'center',
}

const bottomBtns = {
  marginTop: '10px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
}

const cancelBtn = {
  border: 'none',
  borderRadius: '10px',
  width: '88px',
  padding: '20px',
  backgroundColor: '#fff',
  fontSize: '20px',
  fontWeight: '900',
  color: '#999',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'.replace,
}

const submitBtn = {
  border: 'none',
  borderRadius: '10px',
  width: '88px',
  padding: '20px',
  backgroundColor: '#EB4F27',
  fontSize: '20px',
  fontWeight: '900',
  color: '#fff',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

const cancelModalBtn = {
  border: 'none',
  borderRadius: '10px',
  width: '100px',
  padding: '20px',
  backgroundColor: '#fff',
  fontSize: '15px',
  fontWeight: '900',
  color: '#999',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'.replace,
}

const submitModalBtn = {
  border: 'none',
  borderRadius: '10px',
  width: '100px',
  padding: '20px',
  backgroundColor: '#EB4F27',
  fontSize: '15px',
  fontWeight: '900',
  color: '#fff',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

const bottomPhotoBtn = {
  marginTop: '10px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  alignItems: 'center',

}

const CreateReview = () => {
//사진관련
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setSelectedImages(selectedFiles);
  };
//별점관련
  const [data, setData] = useState({
    id: 1,
    name: "이세 돈까스",
    stars: 3.0,
  });
  const handleStarsChange = (newStars) => {
    setData((prevData) => ({
      ...prevData,
      stars: newStars,
    }));
  };

//모달관련
const [isModalOpen, setIsModalOpen] = useState(false);
const [reviewContent, setReviewContent] = useState(""); // 리뷰 내용
const openModal = () => {
  setIsModalOpen(true);
};
const closeModal = () => {
  setIsModalOpen(false);
};
 const handleReviewContentChange = (event) => {
  setReviewContent(event.target.value);
};
const navigate = useNavigate();
const handleComplete = () => {
  // 리뷰 작성 완료 처리 로직

  navigate('/AfterReview');
};


  return (
    <div style={background}>
      <div style={sellerName}>
        {data.name}
      </div>
      <div style={starWrapper}>
        <div style={stars}>
        <ReactRating
            initialRating={data.stars} 
            emptySymbol={<img width={40} alt="뭐가 궁금해" src="/images/review-star-gray.png" />}
            fullSymbol={<img width={40} alt="뭐가 궁금해" src="/images/review-star.png" />}
           step={1}
           onChange={handleStarsChange}
         />
        </div>
        <p style={score}>
          {data.stars}
        </p>
      </div>
      <div style={user}>
        <img width={80} style={userIcon} alt="뭐가 궁금해" src="/images/review-user-icon.svg" />
      </div>
  
  <div style={review}>
  <div style={textareaWrapper}>
  <textarea
            style={reviewText}
            placeholder="리뷰를 작성해주세요."
            value={reviewContent} // 리뷰 내용 상태와 연결
            onChange={handleReviewContentChange} // 리뷰 내용 변경 시 처리
          />
  </div>
  <div style={bottomPhotoBtn}>
    <label htmlFor="input-file" style={addImgBtn}>
      사진 첨부하기⊕
    </label>
    <input
      id="input-file"
      type="file"
      accept="image/png, image/jpeg"
      placeholder="Photo"
      onChange={handleImageUpload}
      multiple
      style={photoInputStyle} // 실제로 보이지 않도록 함
    />
    {selectedImages.map((file, index) => (
      <div key={index}>
        <img
          width={50}
          style={reviewImg}
          alt={file.name}
          src={URL.createObjectURL(file)} // 이미지 URL 생성
        />
      </div>
    ))}
  </div>
</div>

<div style={bottomBtns}>
        <button style={cancelBtn} onClick={closeModal}>
          취소
        </button>
        <button style={submitBtn} onClick={openModal}>
          작성
        </button>
      </div>

     {isModalOpen && (
        <Modal closeModal={closeModal}>
            <div style={sellerModalName}>
        {data.name}
      </div>
          <div style={review}>
  <div style={textareaWrapper}>
  <textarea
            style={reviewText}
            placeholder="리뷰를 작성해주세요."
            value={reviewContent}
            readOnly
          />
  </div>
</div>
          {selectedImages.map((file, index) => (
            <img
              key={index}
              width={50}
              style={reviewImg}
              alt={file.name}
              src={URL.createObjectURL(file)}
            />
          ))}
          <p  style={sellerModalQuestName}>작성 완료 하시겠습니까?</p>
          <div style={bottomBtns}>
          <button style={cancelModalBtn} onClick={closeModal}>
            취소
          </button>
          <button style={submitModalBtn} onClick={handleComplete}>완료</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CreateReview;