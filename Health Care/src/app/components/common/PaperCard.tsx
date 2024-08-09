import React from 'react';
import { Card, CardBody } from 'reactstrap';

interface PaperCardProps {
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  borderRadius?: string | number;
  className?: string;
  animationClass?: string;
}

const PaperCard: React.FC<PaperCardProps> = ({
  children,
  width =  '100%',
  height = 'auto',
  padding = '1rem',
  borderRadius = '8px',
  className,
  animationClass = 'card-animate'
}) => {
  return (
    <Card
      className={`${className} ${animationClass}`}
      style={{
        width,
        height,
        padding,
        borderRadius,
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        
      }}
    >
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};

export default PaperCard;
