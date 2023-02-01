// import {
//     InputLabel, Select, MenuItem, FormControl,
// } from '@mui/material';
// import React from 'react';

// export default function Controls() {
//     return (
//         <div className='controls'>
//             <FormControl>
//                 <InputLabel id='demo-simple-select-label'>Print Button</InputLabel>
//                 <Select
//                     labelId='demo-simple-select-label'
//                     id='demo-simple-select'
//                     value={printBtn}
//                     style={{ width: '200px', marginBottom: '10px' }}
//                     onChange={(e) => setPrintBtn(e.target.value as boolean)}
//                 >
//                     <MenuItem value={'true'}>{'true'}</MenuItem>
//                     <MenuItem value={'false'}>{'false'}</MenuItem>
//                     <MenuItem value={'disabled'}>disabled</MenuItem>
//                 </Select>
//             </FormControl>
//             <FormControl>
//                 <InputLabel id='demo-simple-select-label'>View Column Button</InputLabel>
//                 <Select
//                     labelId='demo-simple-select-label'
//                     id='demo-simple-select'
//                     value={viewColumnBtn}
//                     style={{ width: '200px', marginBottom: '10px' }}
//                     onChange={(e) => setViewColumnBtn(e.target.value as boolean)}
//                 >
//                     <MenuItem value={'true'}>{'true'}</MenuItem>
//                     <MenuItem value={'false'}>{'false'}</MenuItem>
//                     <MenuItem value={'disabled'}>disabled</MenuItem>
//                 </Select>
//             </FormControl>
//             <FormControl>
//                 <InputLabel id='demo-simple-select-label'>Filter Button</InputLabel>
//                 <Select
//                     labelId='demo-simple-select-label'
//                     id='demo-simple-select'
//                     value={filterBtn}
//                     style={{ width: '200px', marginBottom: '10px' }}
//                     onChange={(e) => setFilterBtn(e.target.value as boolean)}
//                 >
//                     <MenuItem value={'true'}>{'true'}</MenuItem>
//                     <MenuItem value={'false'}>{'false'}</MenuItem>
//                     <MenuItem value={'disabled'}>disabled</MenuItem>
//                 </Select>
//             </FormControl>
//             <FormControl>
//                 <InputLabel id='demo-simple-select-label'>Responsive Option</InputLabel>
//                 <Select
//                     labelId='demo-simple-select-label'
//                     id='demo-simple-select'
//                     value={responsive}
//                     style={{
//                         width: '200px',
//                         marginBottom: '10px',
//                         marginRight: 10,
//                     }}
//                     onChange={(e) => setResponsive(e.target.value)}
//                 >
//                     <MenuItem value={'vertical'}>vertical</MenuItem>
//                     <MenuItem value={'standard'}>standard</MenuItem>
//                     <MenuItem value={'simple'}>simple</MenuItem>

//                     <MenuItem value={'scroll'}>scroll (deprecated)</MenuItem>
//                     <MenuItem value={'scrollMaxHeight'}>
//                         scrollMaxHeight (deprecated)
//                     </MenuItem>
//                     <MenuItem value={'stacked'}>stacked (deprecated)</MenuItem>
//                 </Select>
//             </FormControl>
//         </div>
//     );
// }
