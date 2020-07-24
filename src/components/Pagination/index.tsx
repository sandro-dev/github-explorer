import React, { useState } from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Container } from './styles';

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages = 1,
}: PaginationProps) => {
  const [actualPage, setActualPage] = useState(1);

  console.log('actualPage', actualPage);
  console.log('totalPages', totalPages);

  return (
    <Container page={actualPage}>
      {totalPages > 0 ? (
        <button
          type="button"
          disabled={actualPage === 1}
          onClick={() => setActualPage(actualPage - 1)}
        >
          <MdKeyboardArrowLeft size={23} />
        </button>
      ) : null}

      {[...Array(totalPages)].map((e, i) => (
        <button
          key={`btn_${i + 1}`}
          type="button"
          onClick={() => setActualPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      {totalPages > 0 ? (
        <button
          type="button"
          disabled={actualPage === totalPages}
          onClick={() => setActualPage(actualPage + 1)}
        >
          <MdKeyboardArrowRight size={23} />
        </button>
      ) : null}
    </Container>
  );
};

export default Pagination;
