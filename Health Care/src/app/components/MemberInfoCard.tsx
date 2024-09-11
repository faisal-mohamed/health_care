import React from 'react';

interface MemberInfoCardProps {
  memberDetails: { header: string, value: any }[];
    style?: React.CSSProperties; 
}

const MemberInfoCard: React.FC<MemberInfoCardProps> = ({style, memberDetails }) => {
  return (
        <tbody>
          {memberDetails.map((item, index) => (
            <tr key={index}>
              <td
                style={style}
              >
                {item.header}
              </td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
  );
};

export default MemberInfoCard;
