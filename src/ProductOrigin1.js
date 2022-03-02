import React from "react";
import styled from "styled-components";
export const ProductOrigin1 = ({}) => {
  return (
    <ProductOriginRoot>
      <Element7>
        <Header>
          <SunsetOrangeParagraph>
            Gratis pengirima untuk pembelanjaan diatas{"  "}Rp.750.00 atau lebih
          </SunsetOrangeParagraph>
          <WhiteFlexRow>
            <Text1>Home</Text1>
            <Element8>
              <Image1
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/756e67ec-6c2f-43d4-9e36-427cefd020cd.svg?alt=media&token=86c671b4-6068-4f13-ad6c-968a8e8a86a0"
                }
              />
              <Text2>Products</Text2>
              <Element6
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/e4979b9b-3c17-4fa5-b56f-7c51fa344c34.svg?alt=media&token=8ab95b67-0e82-47bb-9ce1-5186f24f1ac0"
                }
              />
            </Element8>
            <Element9>
              <Text3>Journal</Text3>
              <Element5
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/85caf04d-5750-4def-8579-b73b48abfda6.svg?alt=media&token=52dc91f3-b5b7-417f-bae7-b6de331d552d"
                }
              />
            </Element9>
            <Element10>
              <Text4>Fishop-Go</Text4>
              <Text5>Customer Care</Text5>
              <Text6>About Us</Text6>
            </Element10>
            <Element3
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/f1539ec5-ad89-419b-bb55-eb5e2f334b1b.svg?alt=media&token=5472ad2a-2483-468e-9efa-7529c9737d9f"
              }
            />
            <Element1
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/96d1e95d-ca81-471c-9645-f2e319266423.svg?alt=media&token=3af8c392-31cf-41c7-b50c-59be1f58c560"
              }
            />
            <Element2
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/35338883-3d54-466a-8c05-a41a91760e29.svg?alt=media&token=3963cb64-c89a-4a1e-b149-dcaf99d6026d"
              }
            />
            <Element4
              src={
                "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/845ae059-d57f-46aa-96db-89effefcc53e.svg?alt=media&token=03192a45-97c4-4d41-9ceb-d03ed4952000"
              }
            />
          </WhiteFlexRow>
          <Untitled
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/a51c95b1-0069-4377-b429-e7e6b7f3c38b.png?alt=media&token=00f73d51-474b-45ea-bb90-26bc21dac94f"
            }
          />
        </Header>
        <Text7>Our Product Come From.....</Text7>
      </Element7>
      <Text8>Click the maps to find out !</Text8>
      <WorldMaps
        src={
          "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/0dde9f62-4013-45d9-9c04-8db05b0b785c.png?alt=media&token=ca5b75d7-38e5-4852-87e6-359c7e57eb12"
        }
      />
      <Footer>
        <WildBlueYonderFlexRow>
          <FlexRow>
            <Text9 marginLeft={"15px"}>Quick links</Text9>
            <Text10>FAQ</Text10>
            <Text11 alignSelf={"flex-end"}>Business inquiries</Text11>
            <Text11 alignSelf={"stretch"}>Terms of service</Text11>
            <Text11 alignSelf={"stretch"}>Refund & Policy</Text11>
          </FlexRow>
          <FlexRow1>
            <Text9 marginLeft={"39px"}>Powered by</Text9>
            <Text15 marginBottom={"8px"}>PT. Ruangan Pendingi Indonesia</Text15>
            <Text9 marginLeft={"39px"}>Supplied by</Text9>
            <Text15 marginBottom={"0px"}>PT. Ruangan Pendingi Indonesia</Text15>
          </FlexRow1>
          <FlexRow2>
            <Text18>Newsletter</Text18>
            <SilverRectangle />
          </FlexRow2>
        </WildBlueYonderFlexRow>
        <Paragraph>copyright reserved ©2021. Fishop Indonesia</Paragraph>
      </Footer>
    </ProductOriginRoot>
  );
};
const Text9 = styled.div`
  color: #2e57a5;
  text-align: center;
  width: 159px;
  height: 30px;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 700;
  margin-bottom: 23px;
  margin-left: ${(props) => props.marginLeft};
`;
const Text11 = styled.div`
  color: #345fb2;
  text-align: center;
  width: 189px;
  height: 33px;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 400;
  align-self: ${(props) => props.alignSelf};
`;
const Text15 = styled.div`
  color: #345fb2;
  text-align: center;
  width: 363px;
  height: 33px;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 400;
  align-self: stretch;
  margin-bottom: ${(props) => props.marginBottom};
`;
const ProductOriginRoot = styled.div`
  background-color: #ffffff;
  height: 1890px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
  min-width: 1920px;
`;
const Element7 = styled.div`
  height: 47px;
  margin-bottom: 13px;
  width: 1920px;
  position: relative;
`;
const Header = styled.div`
  width: 1920px;
  height: 175px;
  position: absolute;
  top: -230px;
`;
const SunsetOrangeParagraph = styled.div`
  color: #fffbfb;
  display: flex;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 400;
  background-color: #fa6060;
  width: 1920px;
  height: 28px;
  position: absolute;
  top: 8px;
  flex-direction: row;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 6px;
  white-space: pre-wrap;
`;
const WhiteFlexRow = styled.div`
  background-color: rgba(255, 254, 249, 0.5);
  width: 1720px;
  position: absolute;
  top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 30px;
  align-items: flex-start;
`;
const Text1 = styled.div`
  color: #345fb2;
  width: 98px;
  height: 19px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  margin-top: 6px;
  margin-right: 2px;
`;
const Element8 = styled.div`
  align-self: stretch;
  width: 155px;
  margin-right: 12px;
  height: 40px;
  position: relative;
`;
const Image1 = styled.img`
  width: 150px;
  height: 40px;
  position: absolute;
`;
const Text2 = styled.div`
  color: #345fb2;
  width: 141px;
  height: 19px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 5px;
  left: 14px;
`;
const Element6 = styled.img`
  width: 8.23px;
  height: 23.64px;
  position: absolute;
  top: 17px;
  left: 119px;
`;
const Element9 = styled.div`
  width: 126px;
  height: 19px;
  margin-top: 6px;
  margin-right: 25px;
  position: relative;
`;
const Text3 = styled.div`
  color: #345fb2;
  width: 126px;
  height: 19px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
`;
const Element5 = styled.img`
  width: 8.23px;
  height: 23.64px;
  position: absolute;
  top: 10.23px;
  left: 90px;
`;
const Element10 = styled.div`
  align-self: stretch;
  width: 479px;
  margin-right: 242px;
  height: 40px;
  position: relative;
`;
const Text4 = styled.div`
  color: #345fb2;
  width: 155px;
  height: 19px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 6px;
  left: 132px;
`;
const Text5 = styled.div`
  color: #345fb2;
  width: 202px;
  height: 25px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 5px;
  left: 277px;
`;
const Text6 = styled.div`
  color: #345fb2;
  width: 156px;
  height: 19px;
  font-size: 25px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 6px;
`;
const Element3 = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 2px;
  margin-right: 26px;
`;
const Element1 = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 3px;
  margin-right: 24px;
`;
const Element2 = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 3px;
  margin-right: 21px;
`;
const Element4 = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 3px;
`;
const Untitled = styled.img`
  width: 240px;
  height: 175px;
  position: absolute;
  left: 87px;
`;
const Text7 = styled.div`
  color: #345fb2;
  width: 600px;
  font-size: 40px;
  font-family: Roboto;
  font-weight: 700;
  position: absolute;
  left: 781px;
`;
const Text8 = styled.div`
  color: #2e57a5;
  width: 537px;
  height: 26px;
  font-size: 30px;
  font-family: Roboto;
  font-weight: 400;
  margin-right: 549px;
  margin-bottom: 27px;
  align-self: flex-end;
`;
const WorldMaps = styled.img`
  width: 1920px;
  height: 1240px;
  margin-bottom: 65px;
`;
const Footer = styled.div`
  width: 1924px;
  height: 250px;
  position: relative;
`;
const WildBlueYonderFlexRow = styled.div`
  background-color: rgba(163, 185, 228, 0.47);
  width: 1726px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 97px;
  padding-right: 97px;
  padding-top: 28px;
  padding-bottom: 37px;
`;
const FlexRow = styled.div`
  width: 198px;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Text10 = styled.div`
  color: #345fb2;
  text-align: center;
  width: 55px;
  height: 33px;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 400;
  margin-left: 15px;
`;
const FlexRow1 = styled.div`
  margin-right: 153px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
`;
const Text18 = styled.div`
  color: #2e57a5;
  text-align: center;
  width: 159px;
  height: 30px;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 700;
`;
const SilverRectangle = styled.div`
  background-color: #c4c4c4;
  width: 507px;
  height: 68px;
`;
const Paragraph = styled.div`
  color: #345fb2;
  text-align: center;
  width: 454px;
  height: 33px;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 217px;
  left: 1470px;
`;
