import React from 'react';
import { useFormik } from 'formik';

import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, changeInput } from './store/basicFormSlice';

const BasicForm = () => {
  const basicForm = useSelector((state) => state.basicForm);
  const { dataRows, input } = basicForm;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      todo: '',
    },
    onSubmit: () => {
      input && !dataRows.includes(input) && dispatch(addTodo(input));
    },
  });

  return (
    <div>
      <Typography variant='h1' gutterBottom>
        Todo List
      </Typography>{' '}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          size='small'
          variant='filled'
          sx={{ mr: 2 }}
          id='todo'
          name='todo'
          label='Add Todo Items'
          placeholder='Take out the trash'
          helperText='Click Submit To Create Your Todo List'
          value={input}
          onChange={(e) => dispatch(changeInput(e.target.value))}
        />
        <Button color='primary' variant='contained' size='large' type='submit'>
          Submit
        </Button>
      </form>
      {dataRows.length > 0 && (
        <TableContainer sx={{ m: 2, maxWidth: 650 }} component={Paper}>
          <Table aria-label='simple table'>
            <TableBody>
              {dataRows.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell component='th' scope='row'>
                    <Checkbox />
                    {row}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <Button
                      startIcon={<DeleteIcon />}
                      variant='outlined'
                      size='small'
                      color='error'
                      onClick={() => {
                        dispatch(deleteTodo(idx));
                      }}
                    >
                      Delete Row
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default BasicForm;
