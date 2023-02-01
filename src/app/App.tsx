import React from 'react';
import Paper from '@mui/material/Paper';
import { Column } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { generateRows } from './utils/generator';

export default function App() {
    const rows = [
        {
            flight: '31_Асача',
            receipt: '09/50',
            loadDate: '03.12.2022',
            boat: 'СРТМ Си-Хантер',
            consignee: 'ТРК',
            product: 'Филе сельди',
            sort: '',
            package: 22.5,
            placeAmount: 374,
            productAmountKg: 8415,
            operation: 'inner market',
        },
    ];
    const columns = [
        { name: 'flight', title: '№ Рейса' },
        { name: 'receipt', title: 'Коносамент' },
        { name: 'loadDate', title: 'Дата перегруза' },
        { name: 'boat', title: 'Судно' },
        { name: 'consignee', title: 'Транспорт' },
        { name: 'product', title: 'Продукция' },
        { name: 'sort', title: 'Сорт' },
        { name: 'package', title: 'Упаковка' },
        { name: 'placeAmount', title: 'Кол-во мест' },
        { name: 'productAmountKg', title: 'Объем, кг' },
        { name: 'operation', title: 'Вид операции' },
    ];
    return (
        <Paper>
            <Grid />
        </Paper>
    );
}
