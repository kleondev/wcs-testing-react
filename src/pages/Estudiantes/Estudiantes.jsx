import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import TablePaginator from '../../components/AutoTablePaginator/AutoTablePaginator';
import { getMoviesFromApiAsync } from '../../providers/Estudiantes/Estudiantes.service'
import './css/Estudiantes.css'

export default function Estudiantes() {

  const header = [
    { id: 'name', headName: 'Name', sort: true, align: 'left'}, 
    { id: 'patronus', headName: 'Patronus', sort: true, align: 'left'},
    { id: 'age', headName: 'Age', sort: true, align: 'left' },
    { id: 'image', headName: 'Image', sort: false, align: 'center'}
  ];

  const [rows, setRows] = useState([]);

  // const rows = [
  //   {id: 1, name: 'keke', calorias: 159, fat: 9.0, fa2: 37, fa3: 4.3, align: 'center'},
  //   {id: 2, name: 'keke(t3)', calorias: 159, fat: 9.0, fa2: 37, fa3: 4.3, align: 'center'},
  //   {id: 3, name: 'keke(t1)', calorias: 152, fat: 9.0, fa2: 37, fa3: 4.3, align: 'center'},
  //   {id: 4, name: 'keke(t2)', calorias: 156, fat: 9.0, fa2: 37, fa3: 4.3, align: 'center'},
  //   {id: 5, name: 'Protein&nbsp;(g', calorias: 150, fat: 9.0, fa2: 37, fa3: 4.3, align: 'center'},
  //   {id: 6, name: 'Protein&nbsp;(g', calorias: 15, fat: 9.0, fa2: 37, fa3: 4.3, align: 'center'},
  //   {id: 7, name: 'Protein&nbsp;(g', calorias: 12, fat: 9.0, fa2: 37, fa3: 4.3, align: 'center'},
  // ];

  useEffect(() => {
    getMoviesFromApiAsync().then(r => {
      let formatRows = r.map((element) => { 
        return { 
          name:     { type: 'text', align: 'left', value: element.name }, 
          patronus: { type: 'text', align: 'left', value: element.patronus }, 
          age:      { type: 'text', align: 'left', value: element.yearOfBirth }, 
          image:    { type: 'img',  align: 'center', value: element.image ? element.image : 'https://vignette.wikia.nocookie.net/hanabira/images/6/60/No_Image_Available.png/revision/latest?cb=20180619160503' }
        }; 
      });
      setRows(formatRows);
    })
  }, []);

  return (
    <div className="container-students">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" className="p-b-20 title">
            Estudiante
          </Typography>
          <div style={{ minHeight: 400, width: '70vw' }}>
            {
              rows.length && (<TablePaginator rows={rows} header={header} />)
            }
          </div>
        </CardContent>
      </Card>
    </div>
  );
}