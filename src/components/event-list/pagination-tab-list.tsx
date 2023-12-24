import Link from "next/link";

const PaginationTabList = ({ currentPage, totalPages }) => {
  return (
    <div>
      {totalPages.map((page, index) => (
        <Link href={`/events/${index}`}>
          <a>{index}</a>
        </Link>
      ))}
    </div>
  );
};

export default PaginationTabList;
