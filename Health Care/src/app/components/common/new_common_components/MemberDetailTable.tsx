import React from "react";

interface MemberDetail {
  header: string;
  accessor: string;
}

interface MemberDetailTableProps {
  details: MemberDetail[];
  searchResult: { [key: string]: any };
  headerStyle?: React.CSSProperties;
}

const MemberDetailTable: React.FC<MemberDetailTableProps> = ({
  details,
  searchResult,
  headerStyle = {},
}) => {
  return (
    <table width="100%">
      <tbody>
        {details.map((item, index) => (
          <tr key={index}>
            <td style={{ fontWeight: "600", color: "black", width: "35%", ...headerStyle }}>
              {item.header}
            </td>
            <td>{searchResult[item.accessor]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MemberDetailTable;
