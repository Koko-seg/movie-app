// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "./ui/pagination";

// export const PaginationPages = () => {
//   const [totalPages, setTotalPages] = useState(0);
//   const paginations = new Array(totalPages)
//     .fill(null)
//     .map((_, index) => index + 1)
//     .slice(0, 3);
//   console.log(paginations);
//   return (
//     <div>
//       <Pagination>
//         <PaginationContent>
//           <PaginationItem className="cursor-pointer">
//             <PaginationPrevious onClick={handlePrevPage} />
//           </PaginationItem>

//           {paginations?.map((pageNumber) => {
//             return (
//               <PaginationItem className="cursor-pointer">
//                 <PaginationLink onClick={() => handleSelectPage(pageNumber)}>
//                   {pageNumber}
//                 </PaginationLink>
//               </PaginationItem>
//             );
//           })}
//           <PaginationItem className="cursor-pointer">
//             <PaginationNext onClick={handleNextPage} />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//       ;
//     </div>
//   );
// };
