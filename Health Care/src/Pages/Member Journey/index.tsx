
// import SearchBar from '../../app/components/common/SearchBar';

// import  { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import PageHeader from "../../layouts/PageHeader";
// import { Row, Col } from "reactstrap";

// import "./member_journey.scss";
// import axios from "axios";


// import {
//   member_details_one,
//   member_details_three,
//   member_details_two,
// } from "../../utilities/constants";


// const Index = () => {
//   const API_URL = "http://localhost:3000/search";

//   const [searchValue, setSearchValue] = useState("");
//   const [patientDetails, setPatientDetails] = useState([]);
//   const [searchResult, setSearchResult] = useState<any>({});
//   const [isOpen, setIsOpen] = useState(false)


//   useEffect(() => {
//     if (searchValue.length > 0) setIsOpen(true);
//     if (searchValue.length == 0) setIsOpen(false);
//     console.log("searchValue: ", searchValue);
//     apiCall(searchValue).then((res) => {
//       console.log("res: ", res?.data);
//       setPatientDetails(res?.data ?? {});
//     });
//   }, [searchValue]);


//   useEffect(() => {
//     console.log("setIsOpen:", isOpen)
//   }, [isOpen])


//   const apiCall = async (name) => {
//     try {
//       const response = await axios.get(API_URL, {
//         params: {
//           name: name,
//         },
//       });
//       console.log(response.data);
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//     return null;
//   };

//   const onSelect = (e) => {
//     const name = e.target.value;
//     setSearchValue(e.target.value);
//     apiCall(name).then((res) => {
//       console.log("res: ", res?.data);
//       setSearchResult(res?.data[0] ?? {});
//       setIsOpen(false);
//     });
//   }

  



//   return (
//     <div>
//       <PageHeader headerName="Member Journey" />
//       <div className="page-content">

//         <Row>
//           <div className="id-container">
//               <span className='memberIdName'>Member ID: </span>

//               <span>{searchResult.memberid}</span>

//           </div>
//           <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
//             <SearchBar
//               searchValue={searchValue}
//               setSearchValue={setSearchValue}
//               placeholder="Search By Member ID or Name"
//             />


//             {isOpen && (<div className="search-result-container">

//               {patientDetails.map((data) => (<option onClick={(e) => {
//                 onSelect(e)
//               }} value={data.membername}>{data.membername} (ID : {data.memberid})</option>))
//               }
//             </div>)}

//           </Box>
//         </Row>
//         <div className="mainContentContainer">
//           <div className="row1">
//             <div className="content1 content">
//               <table width={'100%'} >

//                 <tbody>

//                   {member_details_one.map((item, index) => (

//                     <tr key={index}  >
//                       <td style={{ fontWeight: '600', color: 'black', width: '35%' }}>{item.header}</td>
//                       <td>{searchResult[item.accessor]}</td>
//                     </tr>
//                   ))}
                 
//                 </tbody>
//               </table>
              
//             </div>
//             <div className="content2 content">
//               <table width={'100%'} >

//                 <tbody>

//                   {member_details_two.map((item, index) => (

//                     <tr key={index} >
//                       <td style={{ fontWeight: '600', background: '', color: 'black', width: '35%',letterSpacing:'1px' }}>{item.header}</td>
//                       <td>{searchResult[item.accessor]}</td>
//                     </tr>
//                   ))}     
//                 </tbody>
//               </table>

//             </div>
//           </div>
//           <div className="row2 ">
//             <div className="content3 content">
//               <table border="1" width={'100%'} >
//                 <tbody>
//                   {member_details_three.map((item, index) => (

//                     <tr key={index} >
//                       <td  style={{ fontWeight: '600', background: '#303030', color: 'white', width: '45%'  }}>{item.header}</td>
//                       <td>{searchResult[item.accessor]}</td>
//                     </tr>
//                   ))}

                 
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>


//       </div>

//       <Row className="member-vendor-details">
//         <Col xl={4} sm={5}>

//         </Col>
//         <Col xl={4} sm={5}>

//         </Col>
//       </Row>
//       <Row className="justify-content-center">
//         <Col xl={4} sm={5}>



//         </Col>
//       </Row>

//     </div>
//   );
// };

// export default Index;

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

interface MemberDetail {
  header: string;
  accessor: string;
}

interface PatientDetails {
  memberid: string;
  membername: string;
  [key: string]: any; // To handle dynamic keys in searchResult
}

const Index: React.FC = () => {
  const API_URL = "http://localhost:3000/search";

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
      const response = await axios.get<PatientDetails[]>(API_URL, {
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
                    onClick={(e : any) => onSelect(e)}
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
                <tbody>
                  {member_details_one.map((item: MemberDetail, index: number) => (
                    <tr key={index}>
                      <td
                        style={{
                          fontWeight: "600",
                          color: "black",
                          width: "35%",
                        }}
                      >
                        {item.header}
                      </td>
                      <td>{searchResult[item.accessor]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="content2 content">
              <table width={"100%"}>
                <tbody>
                  {member_details_two.map((item: MemberDetail, index: number) => (
                    <tr key={index}>
                      <td
                        style={{
                          fontWeight: "600",
                          color: "black",
                          width: "35%",
                        }}
                      >
                        {item.header}
                      </td>
                      <td>{searchResult[item.accessor]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row2">
            <div className="content3 content">
              <table width={"100%"} border={1}>
                <tbody>
                  {member_details_three.map(
                    (item: MemberDetail, index: number) => (
                      <tr key={index}>
                        <td
                          style={{
                            fontWeight: "600",
                            background: "#303030",
                            color: "white",
                            width: "45%",
                          }}
                        >
                          {item.header}
                        </td>
                        <td>{searchResult[item.accessor]}</td>
                      </tr>
                    )
                  )}
                </tbody>
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









