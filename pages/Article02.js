import React from "react";

const Article = ({ content, num }) => {
  return (
    <article className="Article">
      <div className="tit">
        <strong>{content[num].tit}</strong>&nbsp;&nbsp; / &nbsp;&nbsp;
        {content[1].tit}
      </div>
      <div className="bg">
        <div className="case">
          <h2>{content[num].tit}</h2>
          <p>{content[num].con}</p>
        </div>
      </div>
      <div className="sub__tit">도서 대출 자격</div>
      <p className="sub__des">
        <strong></strong> 신시북 대출증 발급 회원
      </p>

      <div className="sub__tit">대여 요금 안내</div>

      <table summary="티켓 (A, B, C,D)" className="tb_org02 mt10">
        <colgroup>
          <col style={{ width: "15%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>

        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">3 일</th>
            <th scope="col">1 주일</th>
            <th scope="col">1 달</th>

            <th scope="col" className="last">
              비고
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>만 19세 이상</td>
            <td>무료</td>
            <td>무료</td>
            <td>1,000 원</td>

            <td rowspan="2" className="last alignL bdOrg">
              <ul className="td_listL">
                <li>
                  도서 분실 시 책임 비용 발생
                  <br /> ( 표기된 정가의 100% )
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="bdOrg">만 19세 미만</td>
            <td className="bdOrg">무료</td>
            <td className="bdOrg">무료</td>
            <td className="bdOrg">500 원</td>
          </tr>
        </tbody>
      </table>

      <div className="sub__img"></div>

      <div className="sub__tit">이용 정보</div>

      <ul className="sub__service">
        <li>
          도서대출
          <ul className="txt">
            <li>- 도서대출 : 신시북 정회원</li>
            <li>- 대출권수 : 1인 10권</li>
            <li>- 대출정지 : 연체일수만큼 대출 정지</li>
            <li>- 대출제한도서 : 참고도서</li>
          </ul>
        </li>

        <li>
          도서예약
          <ul className="txt">
            <li>예약방법</li>
            <li>
              - 원하는 도서가 대출된 경우, 해당 도서의 예약을 통해 반납시 우선
              이용 가능{" "}
            </li>
            <li>
              - 도서검색에서 원하는 도서 항목에서 예약신청 버튼 눌러서 예약
            </li>
            <li>- 도서예약은 1인 2권까지 가능</li>
            <li>- 도착 문자 받은 날 포함 3일이내 대출하지 않으면 자동 취소</li>
          </ul>
        </li>
        <li>
          대출방법
          <ul className="txt">
            <li>
              예약도서 도착 문자메시지를 받은 후 자료실 데스크에서 대출 가능
              <br />
              (문자메시지를 받은 날을 포함하여 3일 이내 대출하지 않으면
              자동취소)
            </li>
          </ul>
        </li>

        <li>
          대출도서 연장
          <ul className="txt">
            <li>연장방법 </li>
            <li>- 대출도서를 각 권당 1회에 한해서 7일 반납기한 연장 가능</li>
            <li>- 대출현황 페이지에서 반납연기 버튼 눌러서 연장</li>
          </ul>
        </li>
        <li>
          연장이 안되는 경우
          <ul className="txt">
            <li>- 연체도서가 있는 경우</li>
            <li>- 예약자료인 경우</li>
            <li>- 연장 횟수가 1회를 초과한 경우</li>
            <li>- 스마트도서관 자료</li>
          </ul>
        </li>
      </ul>
    </article>
  );
};

export default Article;
