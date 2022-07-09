import React,{useState} from "react";

export default function Pagination({ data, RenderComponent,onClickDelete, pageLimit, dataLimit,passToggle }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const previousArrow='<<'
  const nextArrow='>>'

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
  
      {/* show the posts, 10 posts at a time */}
      
      <ul className={passToggle?'users':'usersChange'}>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} passToggle={passToggle}
           onClickDelete={onClickDelete}/>
        ))}
        </ul>
  
      {/* show the pagiantion
          it consists of next and previous buttons
          along with page numbers, in our case, 5 page
          numbers at a time
      */}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={(currentPage===1)?'prevArrowDisabled myArrow':'prevArrow myArrow'}
        >
          {previousArrow}
        </button>
  
        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={(currentPage === item)?'myArrow':'myArrow'}
          >
            <span>{item}</span>
          </button>
        ))}
  
        {/* next button */}
        <button
          onClick={goToNextPage}
          className={(currentPage === pages)?'nxtArrowdisabled myArrow':'nxtArrow myArrow'}
        >
          {nextArrow}
        </button>
      </div>
    </div>
  );
}