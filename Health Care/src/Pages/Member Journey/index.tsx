
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import PageHeader from "../../layouts/PageHeader";
import { Row, Col } from "reactstrap";
import axios from "axios";
import SearchBar from '../../app/components/common/SearchBar';
import "./member_journey.scss";

import {
  member_details_one,
  member_details_two,
  member_details_three,
} from "../../utilities/constants";
import MemberInfoCard from "../../app/components/MemberInfoCard"



interface PatientDetails {
  memberid: string;
  membername: string;
  [key: string]: any; // To handle dynamic keys in searchResult
}

const Index: React.FC = () => {
  

  const [searchValue, setSearchValue] = useState<string>("");
  const [patientDetails, setPatientDetails] = useState<PatientDetails[]>([]);
  const [searchResult, setSearchResult] = useState<any>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (searchValue.length > 0) setIsOpen(true);
    if (searchValue.length === 0) setIsOpen(false);

    apiCall(searchValue).then((res) => {
      setPatientDetails(res?.data ?? []);
    });
  }, [searchValue]);

  useEffect(() => {
    console.log("setIsOpen:", isOpen);
  }, [isOpen]);

  const apiCall = async (name: string) => {
    try {
      const response = await axios.get<PatientDetails[]>(`${import.meta.env.VITE_API_URL}/search`, {
        params: {
          name: name,
        },
      });
      return response;
    } catch (error) {
      console.error(error);
    }
    return null;
  };

  const onSelect = (e: React.ChangeEvent<HTMLOptionElement>) => {
    const name = e.target.value;
    setSearchValue(name);
    apiCall(name).then((res) => {
      setSearchResult(res?.data[0] ?? {});
      setIsOpen(false);
    });
  };

  const memberDetails = member_details_three.map(item => ({
    header: item.header,
    value: searchResult[item.accessor]
  }));

  const Style1: React.CSSProperties = {
    fontWeight: "600",
    background: "#303030",
    color: "white",
    width: "45%",
  };
  const Style2: React.CSSProperties = {
    fontWeight: "600",
    color: "black",
    width: "35%",
  };

  return (
    <div>
      <PageHeader headerName="Member Journey" />
      <div className="page-content">
        <Row>
          <div className="id-container">
            <span className="memberIdName">Member ID: </span>
            <span>{searchResult.memberid}</span>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              placeholder="Search By Member ID or Name"
            />

            {isOpen && (
              <div className="search-result-container">
                {patientDetails.map((data) => (
                  <option
                    key={data.memberid}
                    onClick={(e: any) => onSelect(e)}
                    value={data.membername}
                  >
                    {data.membername} (ID: {data.memberid})
                  </option>
                ))}
              </div>
            )}
          </Box>
        </Row>
        <div className="mainContentContainer">
          <div className="row1">
            <div className="content1 content">
              <table width={"100%"}>
                <MemberInfoCard memberDetails={member_details_one.map(item => ({
                  header: item.header,
                  value: searchResult[item.accessor]
                }))} style={Style2} />
              </table>
            </div>
            <div className="content2 content">
              <table width={"100%"}>
                <MemberInfoCard memberDetails={member_details_two.map(item => ({
                  header: item.header,
                  value: searchResult[item.accessor]
                }))} style={Style2} />
              </table>
            </div>
          </div>
          <div className="row2">
            <div className="content3 content">
              <table width={"100%"} border={1}>
                <MemberInfoCard memberDetails={memberDetails} style={Style1} />
              </table>
            </div>
          </div>
        </div>
      </div>
      <Row className="member-vendor-details">
        <Col xl={4} sm={5}></Col>
        <Col xl={4} sm={5}></Col>
      </Row>
      <Row className="justify-content-center">
        <Col xl={4} sm={5}></Col>
      </Row>
    </div>
  );
};

export default Index;


















