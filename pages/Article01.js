import React from "react";
const Article = ({ content, num }) => {
  return (
    <article className="Article">
      <div className="tit">
        <strong>{content[num].tit}</strong>&nbsp;&nbsp; / &nbsp;&nbsp;
        {content[0].tit}
      </div>
      <div className="bg">
        <div className="case">
          <div className="tit__log"></div>
          <h2>{content[num].tit}</h2>
          <p>{content[num].con}</p>
        </div>
      </div>

      <div className="sub__tit">기업 정신</div>

      <ul className="sub__ul">
        <li>
          <strong></strong> 기본에 충실한 기업
        </li>
        <li>
          <strong></strong> 고객과 직원을 존중하는 기업
        </li>
        <li>
          <strong></strong> 창의적이고 열정적인 기업
        </li>
      </ul>

      <div className="sub__tit">회사 조직도</div>

      <div className="sub__img">
        <figure>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/article01_1.png"}
            alt=""
          />
        </figure>
      </div>

      <div className="sub__tit">신시웨이 연혁 </div>

      <ul className="sub__service">
        <li>
          2005 - 2007
          <ul className="txt">
            <li>- 2005 01 주식회사 신시웨이 설립(대표이사 정재훈)</li>
            <li>- 2005.07 데이터베이스 접근제어 솔루션 dGriffin V1.0 출시</li>
            <li>
              - 2006.04 데이터베이스 접근제어 솔루션 dGriffin V1.0 GS 인증
            </li>
            <li>- 2006.05 국정원 보안적합성 검증(Oracle) 승인</li>
            <li>- 2006.06 (본사 이전)서울시 서초구 양재동</li>
            <li>- 2007.11 국정원 보안적합성 검증(Sybase, IQ, Altibase) 승인</li>
          </ul>
        </li>

        <li>
          2008 - 2010
          <ul className="txt">
            <li>- 2008.07 (본사 이전)경기도 성남시 중원구 상대원동</li>
            <li>- 2008.08 기업부설연구소 설립</li>
            <li>- 2008.08 한국산업기술진흥협회(KOITA) 인증</li>
            <li>
              - 2009.03 (특허 출원)데이터베이스 로그 정보 관리 장치 및 방법
            </li>
            <li>
              - 2009.03 (특허 출원)데이터베이스 툴 식별 장치 및 방법2008.08
              한국산업기술진흥협회(KOITA) 인증
            </li>
            <li>
              - 2009.04 (특허 출원)웹어플리케이션 서버를 통한 데이터베이스 접근
              감시 장치 및 방법
            </li>
            <li>- 2009.05 (특허 출원)SQL 마스킹 장치 및 방법</li>
            <li>
              - 2009.06 (특허 출원)에이전트를 이용한 데이터베이스 보안 장치 및
              방법
            </li>
            <li>- 2009.06 중소벤처기업부 INNO-BIZ 인증</li>
            <li>- 2009.06 데이터베이스 접근제어 솔루션 Petra v3.1 출시</li>
            <li>- 2010.01 Petra v3.1 Common Criteria(EAL4) 인증 획득</li>
            <li>- 2010.01 제주 R&D 센터 설립</li>
          </ul>
        </li>

        <li>
          2011 - 2013
          <ul className="txt">
            <li>
              - 2011.05 (특허 출원)개인정보 데이터베이스의 접근을 위한 전용 툴을
              포함한 접근 관리 시스템 및 방법
            </li>
            <li>
              - 2011.05 (특허 출원)개인정보 데이터베이스의 접근을 관리하는
              가상공간 시스템 및 접근 관리 방법
            </li>
            <li>- 2011.07 원장변경솔루션 Petra Tracker 출시</li>
            <li>- 2012.02 데이터베이스 암호화 솔루션 PetraCipher v1.0 출시</li>
            <li>
              - 2012.02 데이터베이스 암호화 솔루션 PetraCipher v1.0 GS 인증
            </li>
            <li>- 2013.05 개인정보 오남용 감사 솔루션 PetraPrimon v1.1 출시</li>
          </ul>
        </li>

        <li>
          2014 - 2016
          <ul className="txt">
            <li>- 2015.08 최대주주 변경 (주)엑셈</li>
            <li>- 2015.01 데이터베이스 권한 결재 솔루션 PetraSign v1.0 출시</li>
            <li>- 2016.09 PetraCipher 파일 암호화 출시</li>
            <li>- 2016.11 Petra v4.1 출시 및 Common Criteria(EAL4) 인증</li>
          </ul>
        </li>

        <li>
          2017 - 2018
          <ul className="txt">
            <li>- 2017.06 Petra v4.1 GS인증</li>
            <li>- 2017.11 (본사 이전) 서울시 송파구 문정동</li>
            <li>- 2018.07 서울특별시 「서울형 강소기업」 선정</li>
            <li>- 2018.12 고용노동부 「2019 청년 친화 강소기업」 선정</li>
            <li>
              - 2018.12 과학기술정보통신부 「정보통신 중소기업 유공자」 포상
            </li>
          </ul>
        </li>

        <li>
          2019 - 2021
          <ul className="txt">
            <li>- 2019.04 서울산업진흥원 「HI SEOUL 브랜드 기업」 지정</li>
            <li>
              - 2019.12 (특허 출원)DB 접속을 위한 보안 세션의 장애 대응을
              지원하는 중계 시스템 및 방법
            </li>
            <li>
              - 2019.12 (특허 출원)웹 기반 SQL 툴을 이용한 접근 제어 시스템 및
              방법
            </li>
            <li>- 2019.12 여성가족부 「2019 가족친화인증기업」 선정</li>
            <li>- 2019.12 고용노동부 「2020 청년친화강소기업」 선정</li>
            <li>- 2020.04 PetraCipher v3.2 Common Criteria(PP준수) 인증</li>
            <li>- 2020.04 PetraCipher v3.2 출시</li>
            <li>- 2020.07 중소벤처기업부 MAIN-BIZ 인증</li>
            <li>- 2020.09 고용노동부 「근무혁신 인센티브제 우수 기업」 선정</li>
            <li>- 2020.11 서울특별시 「일·생활균형 우수 기업」 선정</li>
            <li>- 2020.11 PetraCipher v3.2 GS 인증</li>
            <li>- 2020.12 고용노동부 「2021 청년친화강소기업」 선정</li>
            <li>- 2021.06 중소벤처기업부 「2021 인재육성형 중소기업」 선정</li>
          </ul>
        </li>

        <li>
          2022
          <ul className="txt">
            <li>
              - 2022.06 (특허 등록) 데이터베이스에 저장된 데이터에 대한 접근
              제어를 위한 서비스 제공 시스템 및 방법
            </li>
            <li>- 2022.06 「2022 중소기업인 대회」 국무총리 표창 수상</li>
          </ul>
        </li>
      </ul>

      <div className="sub__tit">신시웨이 오시는 길 </div>

      <table summary="티켓 (A, B, C,D)" className="tb_org02 mt10">
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "15%" }} />
        </colgroup>

        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">오시는 길</th>
            <th scope="col">전화번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>본사</td>
            <td>
              서울특별시 송파구 법원로 9길 26(문정동) 에이치비지니스파크 D동 4층
            </td>
            <td> 02) 6281-9607</td>
          </tr>
          <tr>
            <td>제주R&D센터</td>
            <td>제주특별자치도 제주시 첨단로 213-3 319호(스마트빌딩)</td>
            <td>02) 6281-9607</td>
          </tr>
          <tr>
            <td className="bdOrg">대전기술지원센터</td>
            <td className="bdOrg">
              대전광역시 유성구 테크노9로 35 대전테크노파크 IT 전용벤처타운
              304호
            </td>
            <td className="bdOrg">02) 6281-9607</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default Article;
