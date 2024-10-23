import React, { useState } from 'react';
import './Invoice.css';


    const Invoice = () => {
        const [data, setData] = useState({
          companyName: "บริษัท ร่ำรวยยิ่ง จำกัด",
          companybook: "4",
          companynumber: "24",
          companyAddress: "3/107 ถนนศรีนครินทร์ แขวงหนองบอน เขตประเวศ กรุงเทพมหานคร 10260",
          companyPhonenumber: "โทร. 0 2744 9077 , 0 2746 6808",
          companyIduser: "3 01192198 2",
          companyDate: "7 เมษายน 2548",
          items: [
            { ลำดับ: 1, รายการ: "กระดาษห่อพัสดุสีน้ำตาล", จำนวน: 2.0, ราคาต่อหน่วย: 4.0 },
            { ลำดับ: 2, รายการ: "แผ่นพลาสติกลูกฟูก", จำนวน: 2.0, ราคาต่อหน่วย: 28.0 },
          ],
        });
      
        const calculateTotal = () => {
          return data.items.reduce(
            (acc, item) => acc + item.จำนวน * item.ราคาต่อหน่วย,
            0
          );
        };
      

        return (
            <div className="invoice">
              <h2 className='invoice-title'>ใบเสร็จรับเงิน</h2>
              <h4 className='invoice-container'>
                เล่มที่ <span dangerouslySetInnerHTML={{ __html: data.companybook }}></span> เลขที่{" "}
                <span dangerouslySetInnerHTML={{ __html: data.companynumber }}></span>
              </h4>
              <p>{data.companyName}</p>
              <p>{data.companyAddress}</p>
              <p>{data.companyPhonenumber}</p>
              <p>เลขประจำตัวผู้เสียภาษี {data.companyIduser}</p>
              <h4>วันที่ {data.companyDate}</h4>
        
              <table>
                <thead>
                  <tr>
                    <th >ลำดับ</th>
                    <th>รายการ</th>
                    <th>จำนวน</th>
                    <th>ราคาต่อหน่วย</th>
                    <th>จำนวนเงิน</th>
                  </tr>
                </thead>
                <tbody>
                  {data.items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.ลำดับ}</td>
                      <td>{item.รายการ}</td>
                      <td>{item.จำนวน.toFixed(2)}</td>
                      <td>{item.ราคาต่อหน่วย.toFixed(2)}</td>
                      <td>{(item.จำนวน * item.ราคาต่อหน่วย).toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <th colSpan="4" style={{ textAlign: "center" }}>
                      รวม
                    </th>
                    <th>{calculateTotal().toFixed(2)}</th>
                  </tr>
                </tbody>
              </table>
              <h3 className='invoice-signature'>ลงชื่อ .............................................. ผู้รับเงิน</h3>
            </div>
          );
        };

export default Invoice;
