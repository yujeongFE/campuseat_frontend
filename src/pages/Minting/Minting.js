import React, {useState} from 'react';
import './Minting.css';
import Modal from './Modal/Modal';

const schools = [
  '건국대학교', '경희대학교', '고려대학교', '국민대학교', '동덕여자대학교',
  '동국대학교', '서강대학교', '서울교육대학교', '서울대학교', '서울시립대학교',
  '성균관대학교', '성신여자대학교', '세종대학교', '숙명여자대학교', '숭실대학교',
  '연세대학교', '이화여자대학교', '중앙대학교', '한국외국어대학교', '한양대학교'
]

const Minting =() => {
  const [search, setSearch] = useState(''); //검색
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [mintingMessage, setMintingMessage] = useState('');


  //학교선택창
  const chooseSchool = (event) => {
    const newSearch = event.target.value.toLowerCase();
    setSearch(newSearch);
    const filtered = schools.filter(school => school.toLowerCase().includes(newSearch));
    setFilteredSchools(filtered);
  };

  const clickSchool = (school) => {
    setSearch(school);
    setFilteredSchools([]);
  };

  //모달관련
  const clickMinting = () => {
    if (search === '') {
      setMintingMessage('학교 선택 후에 민팅할 수 있습니다.');
    } else {
      const selectedSchool = [schools][search];
      setMintingMessage(`${search} NFT를 민팅하시겠습니까?`);
    }
    setModalOpen(true); // 모달 오픈
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const cancelModal = () => {
    setModalOpen(false);
    setSearch(''); // 선택한 학교 초기화
  };

  //딥링크
  


  return (
    <div className="App">

      <header className="Header">
        <h1>대학가 멤버십 서비스<br/>
        <span>캠잇</span></h1>
      </header>


        <img src="/images/Minting/hamburger.svg" alt="햄버거" className="HamburgerImage" />
        <br/><br/><br/>
        <h1 className="exp">NFT 소유자 모두 <span>다른 디자인</span>의<br/>
        <span>랜덤 NFT</span>를 가질 수 있어요</h1>
      <div className='NFT'>
        <img src="/images/Minting/nft1.svg" className='nft1'></img>
        <img src="/images/Minting/nft2.svg" className='nft2'></img>
        <img src="/images/Minting/nft3.svg" classNamse='nft3'></img>
        <img src="/images/Minting/nft4.svg" className='nft4'></img>
        <img src="/images/Minting/nft5.svg" className='nft5'></img>
      </div>
      <h1 className="exp2">나만의 <span>NFT</span>를 발급하고<br/>
      <span>대학가 특별할인</span>을 받으세요</h1>


      <h1 className='choose'><br/><br/>학교를 선택하세요</h1>


      
      <input type="text" value={search} onChange={chooseSchool} placeholder="ex) 고려대학교" className='input'/>
      <div className="school-list">
        {filteredSchools.map((school, index) => (
          <div key={index} className="school-item" onClick={() => 
            clickSchool(school)}>{school}
          </div>
        ))}
      </div>




      <img src="/images/Minting/randomNFT.svg" className='randomNFT'></img>
      <h2>?</h2>

      <button className={`MintingButton ${search !== null ? 'ClickMinting' : ''}`} 
        onClick={clickMinting}>민팅하기</button>
      {modalOpen && (
        <Modal message={mintingMessage} onClose={closeModal} onCancel={cancelModal} />
      )}

    </div>
  );
  
}

export default Minting;