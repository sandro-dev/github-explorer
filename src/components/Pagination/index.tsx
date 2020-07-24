import React from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Container } from './styles';

interface PaginationProps {
  page: number;
  totalPages: number;
  handlePage: Function;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages = 1,
  handlePage,
}: PaginationProps) => {
  return (
    <Container page={page}>
      {totalPages > 0 ? (
        <button
          type="button"
          disabled={page === 1}
          onClick={() => handlePage(page - 1)}
        >
          <MdKeyboardArrowLeft size={23} />
        </button>
      ) : null}

      {[...Array(totalPages)].map((e, i) => (
        <button
          key={`btn_${i + 1}`}
          type="button"
          onClick={() => handlePage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      {totalPages > 0 ? (
        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => handlePage(page + 1)}
        >
          <MdKeyboardArrowRight size={23} />
        </button>
      ) : null}
    </Container>
  );
};

export default Pagination;
