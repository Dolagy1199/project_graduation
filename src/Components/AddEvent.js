import './index.css'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import TextField from '@mui/joy/TextField';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import InputLabel from "@mui/material/InputLabel";
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { authorizedAPIs } from "../API/axiosSetup";
import { FormHelperText } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function AddEvent() {
    const [hall, setHall] = useState([{}]);
    useEffect(() => {
        authorizedAPIs.get("/halls/showMany/100")
            .then((res) => {
                console.log(res);
                let hallInformation = [];
                res.data.result.forEach((hall) => {
                    let label = hall.hallName;
                    let value = hall._id;
                    hallInformation.push({ label, value });
                });
                setHall(hallInformation);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='team' >
            <Typography fontSize={45} gutterBottom variant="h1" component="div" color="#BB3B62" fontWeight="bold" textAlign="center">
                ADD EVENT
            </Typography>

            <div className="div1">
            </div>
            {<Formik
                initialValues={{
                    eventTitle: '',
                    poster: '',
                    department: '',
                    presenter: '',
                    hallId: '',
                    startTime: new Date().toISOString().slice(0, 16),
                    endTime: new Date().toISOString().slice(0, 16),
                    CostClassA: '',
                    CostClassB: '',
                    CostClassC: ''
                }}
                validationSchema={
                    Yup.object().shape({
                        eventTitle: Yup.string().max(40).required('event title is required'),
                        poster: Yup.string().required("poster is required"),
                        department: Yup.string().required()
                        , presenter: Yup.string().required()
                        , startTime: Yup.string().required()
                        , endTime: Yup.string().required()
                        , hallId: Yup.string()
                        , CostClassA: Yup.number().required()
                        , CostClassB: Yup.number().required()
                        , CostClassC: Yup.number().required()
                    })}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    touched,
                    values
                }) => (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                    }} >
                        <div className='divinput'>
                            <TextField
                                error={Boolean(touched.eventTitle && errors.eventTitle)}
                                helperText={touched.eventTitle && errors.eventTitle}
                                type="text"
                                id="eventTitle"
                                label={"Event Title"}
                                name="eventTitle"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.eventTitle}
                                key="eventTitleText"
                                size="lg"
                                placeholder="Enter  Event Name"
                                aria-label='Frist'
                                className='inputt'
                            />
                            <TextField
                                error={Boolean(touched.poster && errors.poster)}
                                helperText={touched.poster && errors.poster}
                                type="file"
                                id="poster"
                                label={"poster"}
                                name="poster"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.poster}
                                key="posterText"
                                size="lg"
                                placeholder="Choose File From Your Device "
                                aria-label='Frist'
                                className='inputt2'

                            />
                            <FormControl
                                error={Boolean(touched.department && errors.department)}
                                key="DepartmentOption"
                                className='inputt2'
                            >
                                <InputLabel id="demo-simple-select-label">
                                    Department
                                </InputLabel>
                                <Select
                                    type="text"
                                    id="department"
                                    label="Department"
                                    name="department"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.department}
                                    key="departmentText"
                                >
                                    <MenuItem key="Cinema" value="cinema">
                                        cinema
                                    </MenuItem>
                                    <MenuItem key="threate" value="threate">
                                        threate
                                    </MenuItem>
                                    <MenuItem key="concerts" value="concerts">
                                        concerts
                                    </MenuItem>
                                    <MenuItem key="standup" value="standup-comedy">
                                        standup comedy
                                    </MenuItem>
                                </Select>
                                <FormHelperText>
                                    {touched.department && errors.department}
                                </FormHelperText>
                            </FormControl>
                            <TextField
                                error={Boolean(touched.presenter && errors.presenter)}
                                helperText={touched.presenter && errors.presenter}
                                type="text"
                                id="presenter"
                                label={"presenter"}
                                name="presenter"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.presenter}
                                key="presenterText"
                                size="lg"
                                placeholder="Enter Presenter"
                                aria-label='Frist'
                                className='inputt'
                            />
                            <TextField
                                error={Boolean(touched.startTime && errors.startTime)}
                                helperText={touched.startTime && errors.startTime}
                                name="startTime"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.startTime}
                                key="startTime"
                                size="lg"
                                placeholder="From"
                                aria-label='Frist'
                                className='inputt'
                                id="datetime-local"
                                label="From"
                                type="datetime-local"
                                defaultValue={values.startTime}
                                sx={{ width: 250 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                error={Boolean(touched.endTime && errors.endTime)}
                                helperText={touched.endTime && errors.endTime}
                                name="endTime"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.endTime}
                                key="endTime"
                                size="lg"
                                placeholder="To"
                                aria-label='Frist'
                                className='inputt'
                                id="datetime-local"
                                label="To"
                                type="datetime-local"
                                defaultValue={values.endTime}
                                sx={{ width: 250 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {/* <FormControl
                                error={Boolean(touched.hallId && errors.hallId)}
                                key="hallOpten"
                                className='inputt2'
                            >
                                <InputLabel id="simple-select-label">
                                    hall name
                                </InputLabel>
                                <Select
                                    type="text"
                                    id="hallId"
                                    label="hall Name"
                                    name="hallId"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.hallId}
                                    key="departmentText"
                                >
                                    {
                                        hall.map((element) => {
                                            <MenuItem>
                                                {element.label}
                                            </MenuItem>
                                        })
                                    }
                                </Select>
                                <FormHelperText>
                                    {touched.hallId && errors.hallId}
                                </FormHelperText>
                            </FormControl> */}
                            <Typography className='labelevent'> Cost  </Typography>
                            <TextField
                                error={Boolean(touched.CostClassA && errors.CostClassA)}
                                helperText={touched.CostClassA && errors.CostClassA}
                                id="CostClassA"
                                label="CostClassA"
                                name="CostClassA"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.CostClassA}
                                key="CostClassA"
                                size="lg"
                                aria-label='Frist'
                                className='inputt'
                                placeholder="Cost class a"
                                type="number"

                            />
                            <TextField
                                error={Boolean(touched.CostClassB && errors.CostClassB)}
                                helperText={touched.CostClassB && errors.CostClassB}
                                id="CostClassB"
                                label="CostClassB"
                                name="CostClassB"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.CostClassB}
                                key="CostClassB"
                                size="lg"
                                aria-label='Frist'
                                className='inputt'
                                placeholder="Cost class b"
                                type="number"

                            />
                            <TextField
                                error={Boolean(touched.CostClassC && errors.CostClassC)}
                                helperText={touched.CostClassC && errors.CostClassC}
                                id="CostClassC"
                                label="CostClassC"
                                name="CostClassC"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.CostClassC}
                                key="CostClassC"
                                size="lg"
                                aria-label='Frist'
                                className='inputt'
                                placeholder="Cost class c"
                                type="number"
                            />

                            <div >
                                <ColorButton type="submit" variant="contained" className="addevent3" >Submit</ColorButton>
                            </div>

                        </div>
                    </form>
                )}</Formik>}
        </div>
    );
}