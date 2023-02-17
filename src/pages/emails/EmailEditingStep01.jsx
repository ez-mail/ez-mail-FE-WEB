import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import EmailBottomButton from '../../components/EmailBottomButton';

export default function EmailEditingStep01() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    console.log('이메일 수정 api 실행');
    const emailId = 'test';
    navigate(`/emails/${emailId}/step02`);
  };

  const subscribersData = [
    {
      _id: '12315',
      email: 'abcd@test.com',
      name: '김개똥',
      adAgreement: true,
    },
    {
      _id: '123151',
      email: 'abcd@test.com',
      name: '김개똥',
      adAgreement: true,
    },
    {
      _id: '123152',
      email: 'abcd@test.com',
      name: '김개똥',
      adAgreement: false,
    },
    {
      _id: '123153',
      email: 'abcd@test.com',
      name: '김개똥',
      adAgreement: false,
    },
    {
      _id: '123154',
      email: 'abcd@test.com',
      name: '김개똥',
      adAgreement: false,
    },
    {
      _id: '123155',
      email: 'abcd@test.com',
      name: '김개똥',
      adAgreement: false,
    },
    {
      _id: '123156',
      email: 'abcd112342345@test.com',
      name: '김개똥',
      adAgreement: false,
    },
    {
      _id: '123157',
      email: 'abcd@test.com',
      name: '김개똥',
      adAgreement: true,
    },
    {
      _id: '123158',
      email: 'abcd@test.com',
      name: '김개똥',
      adAgreement: false,
    },
    {
      _id: '123159',
      email: 'abcd@test.com',
      name: '김개똥',
      adAgreement: false,
    },
  ];

  const tableHead = (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>이메일주소</td>
      <td>이름</td>
      <td>광고성 정보 수신 동의</td>
    </tr>
  );

  const subscribers = subscribersData.map(item => {
    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{item.email}</td>
        <td>{item.name}</td>
        <td>{item.adAgreement ? '동의' : '거부'}</td>
      </tr>
    );
  });

  return (
    <>
      <SubNav>
        <Step>구독자</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>발송정보</Step>
        <StyledFaAngleRight icon={faAngleRight} />
        <Step>콘텐츠</Step>
      </SubNav>
      <section>
        <MainContainer>
          <Title>구독자를 선택하세요</Title>
          <SubscriberTable>
            <table>
              <thead>{tableHead}</thead>
              <tbody>{subscribers}</tbody>
            </table>
          </SubscriberTable>
        </MainContainer>
      </section>
      <BottomButtons>
        <EmailBottomButton color="#bdbdbd" cursor="default">
          이전
        </EmailBottomButton>
        <EmailBottomButton onClick={handleNextClick}>다음</EmailBottomButton>
      </BottomButtons>
    </>
  );
}

const SubNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 50px;
  border-bottom: 1px solid #dfe0e4;
  text-align: center;
  color: #bdbdbd;
`;

const Step = styled.span`
  flex: 2;
  &:nth-child(1) {
    font-weight: 500;
    color: black;
  }
`;

const StyledFaAngleRight = styled(FontAwesomeIcon)`
  font-size: 20px;
  flex: 0.5;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: auto;
`;

const Title = styled.span`
  padding: 38px 0;
  margin-bottom: 50px;
  font-size: 28px;
  font-weight: 500;
`;

const SubscriberTable = styled.div`
  overflow: auto;
  height: 300px;
  table {
    width: 100%;
    thead {
      position: sticky;
      top: -1px;
      background-color: #f5f5f5;
      tr {
        padding: 30px 0;
        border-top: 2px solid #b5acac;
        &:last-child {
          border-bottom: 2px solid #b5acac;
        }
      }
      td {
        padding: 16px 0;
        text-align: center;
        &:nth-child(1) {
          width: 7%;
        }
        &:nth-child(2) {
          width: 15%;
        }
        &:nth-child(3) {
          width: 15%;
        }
        &:nth-child(4) {
          padding: 0 400px 0 0;
          width: 60%;
        }
      }
    }
    tbody {
      tr {
        padding: 30px 0;
        border-top: 2px solid #b5acac;
        &:last-child {
          border-bottom: 2px solid #b5acac;
        }
      }
      td {
        padding: 10px 0;
        text-align: center;
        &:nth-child(1) {
          width: 7%;
        }
        &:nth-child(2) {
          width: 15%;
        }
        &:nth-child(3) {
          width: 15%;
        }
        &:nth-child(4) {
          padding: 0 400px 0 0;
          width: 60%;
        }
      }
    }
  }
  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const BottomButtons = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
`;
