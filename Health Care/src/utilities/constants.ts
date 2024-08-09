// import { ToastPosition, toast } from "react-toastify";
import { head } from "lodash";
import { executiveDashIcon } from "../assets/Images";

// export type TableInfo = {
//   title: string;
//   accessor: sting;
//   type?: string;
// };

// const toastSuccessOptions = {
//   className: "toast_success",
//   position: "top_center" as ToastPosition,
//   autoClose: 3000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
// };

// const toastErrorOptions = {
//   position: "top_center" as ToastPosition,
//   autoClose: 3000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   progressStyle: {
//     backgroundColor: "red",
//   },
// };

// const toastWarningOption = {
//   position: "top_center" as ToastPosition,
//   autoClose: 3000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   progressStyle: {
//     backgroundColor: "#F1C411",
//   },
// };

// const toastInfoOption = {
//   position: "top_center" as ToastPosition,
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   progressStyle: {
//     backgroundColor: "#3698DB",
//   },
// };

// const Success = (message: string) => {
//   toast.success(message, toastSuccessOptions);
// };

// const Failure = (message: string) => {
//   toast.error(message, toastErrorOptions);
// };

// const Info = (message: string) => {
//   toast.info(message, toastInfoOption);
// };

// const Warning = (message: string) => {
//   toast.warn(message, toastWarningOption);
// };

// export { Success, Failure, Info, Warning };

export const DashboardTabs = [
  // {
  //   icon: executiveDashIcon,
  //   link: "/executive-dashboard",
  //   name: "HR Insights & Reporting",
  // },
  {
    icon: executiveDashIcon,
    link: "/dashboard-page-2",
    name: "Dashboard Page 2",
  },
  {
    icon: executiveDashIcon,
    link: "/dashboard-page-3",
    name: "Dashboard page 3",
  },
];

export const member_details_one = [
  { header: "Member Name", accessor: "membername" },
  { header: "Address", accessor: "address" },
  { header: "Email", accessor: "email" },
  { header: "Phone No", accessor: "phone_no" },
  { header: "Doctor", accessor: "doctor" },
];

export const member_details_two = [
  { header: "Vendor", accessor: "vendor" },
  { header: "ACO", accessor: "aco" },
  { header: "Insurence Type", accessor: "insurence_type" },
  { header: "Primary illness", accessor: "primary_illness" },
  { header: "Do not call List", accessor: "do_not_call_list" },
];
export const member_details_three = [
  { header: "Joined", accessor: "dateofjoin" },
  { header: "Total Premium ($)", accessor: "totalpremium" },
  { header: "No of Claims", accessor: "noofclaims" },
  { header: "Total Claim Amount ($)", accessor: "totalclaimamount" },
];
// {
//   "memberid": 7,
//   "membername": "Sophia Johnson",
//   "address": "Ahmedabad, India",
//   "email": "sophia.johnson@example.com",
//   "phone_no": "9412345678",
//   "doctor": "Dr. Kenneth J. Cherry Jr.",
//   "vendor": "",
//   "aco": "UnityPoint Health ACO",
//   "insurence_type": "Medicaid - State",
//   "primary_illness": "Neurological Disorders",
//   "do_not_call_list": "Yes",
//   "dateofjoin": "2017-06-04T18:30:00.000Z",
//   "totalpremium": 1400,
//   "noofclaims": 3,
//   "totalclaimamount": 600
// }
