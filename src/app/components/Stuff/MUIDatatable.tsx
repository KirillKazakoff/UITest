// import MUIDataTable, { MUIDataTableOptions } from 'mui-datatables';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { CacheProvider } from '@emotion/react';
// import createCache from '@emotion/cache';
// import { data } from './data';

// const muiCache = createCache({
//     key: 'mui-datatables',
//     prepend: true,
// });

// export default function App() {
//     const columns = [
//         { name: 'Name', options: { filterOptions: { fullWidth: true } } },
//         'Title',
//         'Location',
//     ];

//     const options: MUIDataTableOptions = {
//         rowsPerPageOptions: [100, 1000],
//         rowsPerPage: 100,
//         search: true,
//         download: true,
//         print: true,
//         viewColumns: true,
//         filter: true,
//         filterType: 'dropdown',
//         tableBodyHeight: '800px',
//         tableBodyMaxHeight: '800px',
//         onTableChange: (action: any, state: any) => {
//             console.log(action);
//             console.dir(state);
//         },
//     };

//     return (
//         <div className='container'>
//             <CacheProvider value={muiCache}>
//                 <ThemeProvider theme={createTheme()}>
//                     <MUIDataTable
//                         title={'ACME Employee list'}
//                         data={data}
//                         columns={columns}
//                         options={options}
//                     />
//                 </ThemeProvider>
//             </CacheProvider>
//         </div>
//     );
// }

// ReactDOM.render(<App />, document.getElementById('root'));
