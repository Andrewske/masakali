import React, { Fragment, useMemo, useCallback } from 'react';
import { useTable, useExpanded, useSortBy, usePagination } from 'react-table';
import { connect } from 'react-redux';
import moment from 'moment';

const Table = ({ columns, data, renderRowSubComponent }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    pageOptions,
    page,
    state: { expanded, pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable(
    { columns, data, initialState: { hiddenColumns: ['details'] } },
    useSortBy,
    useExpanded,
    usePagination
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? 'y' : 'n') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              <Fragment key={rowProps.key}>
                <tr {...rowProps}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous Page
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page
        </button>
        <div>
          Page{' '}
          <em>
            {pageIndex + 1} of {pageOptions.length}
          </em>
        </div>
      </div>
    </>
  );
};

const Errors = ({ users, errors }) => {
  const columns = React.useMemo(
    () => [
      {
        id: 'expander',
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? '👇' : '👉'}
          </span>
        ),
        Cell: ({ row }) =>
          row.canExpand ? (
            <span {...row.getToggleRowExpandedProps()}>
              {row.isExpanded ? '👇' : '👉'}
            </span>
          ) : null,
      },
      {
        Header: 'Errors',
        columns: [
          {
            Header: 'CreatedAt',
            accessor: 'createdAt',
          },
          {
            Header: 'User',
            accessor: 'user',
          },
          {
            Header: 'Error Type',
            accessor: 'errorType',
          },
          {
            Header: 'Details',
            accessor: 'details',
            isVisible: false,
            totalWidth: 0,
          },
        ],
      },
    ],
    []
  );

  const tableData = useMemo(() => {
    let data = errors.map((error) => {
      let user = users.filter((user) => user._id === error.userId);
      return {
        createdAt: moment(error.createdAt).format('YYYY-MM-DD'),
        user: user[0]?.name || 'No User',
        errorType: error.error?.type,
        details: JSON.stringify({ error: error.error }, null, 2),
        subRows: [
          {
            details: JSON.stringify({ error: error.error }, null, 2),
          },
        ],
      };
    });

    return data;
  }, [errors, users]);

  const renderRowSubComponent = useCallback(({ row }) => {
    return (
      <pre>
        <code>{row.values.details}</code>
      </pre>
    );
  }, []);

  return (
    <span className='errors-table'>
      <Table
        columns={columns}
        data={tableData}
        renderRowSubComponent={renderRowSubComponent}
      />
    </span>
  );
};

const mapStateToProps = (state) => ({
  users: state.admin.users,
  errors: state.admin.errors,
});

export default connect(mapStateToProps, null)(Errors);
