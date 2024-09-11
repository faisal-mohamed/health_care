// import { ToastPosition, toast } from "react-toastify";
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

export const reportTypes = [
  {label: "Members", value: "MEMBER.csv"},
  {label: "Membership", value: "MEMBERSHIP.csv"},
  {label: "Member Identifier", value: "MEMBER_IDENTIFIER.csv"},
  {label: "Member Attribution", value: "MEMBER_ATTRIBUTION.csv"},

]