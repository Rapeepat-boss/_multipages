import Card from "react-bootstrap/Card";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-body-1">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://studentscms.spu.ac.th/stdempimg.cfm?empstdtype=STD&vdata=01D6C4EDD682FDA50528CEDFDE05C9DC82E1190DD7F6DEDF"
          />
          <Card.Body>
            <Card.Title>
              <b>นาย ระพีภัธท ผาพันธุ์</b>
            </Card.Title>
            <Card.Text>
              เลขประจำตัว 66091338 <br />
              อายุ 20 ปี
              <br />
              เป็นนักศึกษามหาวิทยาลัยศรีปทุม
              <br />
              คณะเทคโนโลยีสารสนเทศ
              <br />
              สาขาวิทยาการคอมพิวเตอร์
              <br />
              และนวัตกรรมการพัฒนาซอฟต์แวร์
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="home-body-2">
        <h4 className="home-text">
          สวัสดีครับ ผมมีความสนใจในการเขียนโปรแกรม และมีประสบการณ์ในด้านการเขียนโปรแกรมพื้นฐาน
          ผมเชื่อมั่นในการทำงานที่มีประสิทธิภาพและมุ่งมั่นสู่ความสำเร็จ
          ยินดีที่ได้รู้จักและหวังว่าจะได้ร่วมงานหรือแลกเปลี่ยนความรู้กันในอนาคตครับ
        </h4>
        <span class="bi bi-laptop"></span>
      </div>
    </div>
  );
}

export default Home;
