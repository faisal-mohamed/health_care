// import  { useMemo } from 'react';
// import { Column, useTable, TableInstance } from 'react-table';
// import { Table as BootstrapTable, Spinner } from 'reactstrap';
// import '../../../css/custom.component.style.scss';
// import '../../../css/table.scss';

// type TableProps<D extends object> = {
//   data: D[];
//   headers: Column<D>[];
//   isLoading?: boolean;
//   headerClassName?: string;
//   tableClassName?: string;
// };

// const GridTable = <D extends object>(props: TableProps<D>) => {
//   const {
//     data,
//     headers,
//     isLoading = false,
//     headerClassName = '',
//     tableClassName = '',
//   } = props;

//   const columns = useMemo(() => [...headers], [headers]);
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   }: TableInstance<D> = useTable({ columns, data });

//   return (
//     <div className={tableClassName}>
//       <BootstrapTable {...getTableProps()} className="report-table">
//         <thead className={`thead ${headerClassName}`}>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()} className={column.headerClassName} key={column.id}>
//                   {column.render('Header')}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         {!isLoading && (
//           <tbody {...getTableBodyProps()}>
//             {rows.length > 0 ? (
//               rows.map(row => {
//                 prepareRow(row);
//                 return (
//                   <tr {...row.getRowProps()} className={`table-row ${tableClassName !== 'config-grp-table' ? 'table-hover' : ''}`} key={row.id}>
//                     {row.cells.map(cell => (
//                       <td className={`cell ${cell.column.dataClassName}`} {...cell.getCellProps()} key={cell.column.id}>
//                         {cell.render('Cell') || '-'}
//                       </td>
//                     ))}
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td className="text-center" colSpan={columns.length}>
//                   No records to display
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </BootstrapTable>
//       {isLoading && (
//         <div className="d-flex justify-content-center">
//           <Spinner color="primary" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default GridTable;
