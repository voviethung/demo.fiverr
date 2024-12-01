"use client"
"use client";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateJobTypeApi } from "../../redux/reducers/adminReducer";

const UpdateJobType = forwardRef(({ jobtype }, ref) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const frm = useFormik({
    initialValues: {
      id: jobtype?.id || "",
      tenLoaiCongViec: jobtype?.tenLoaiCongViec || "",
    },
    onSubmit: (values) => {
      dispatch(updateJobTypeApi(jobtype.id, values))
        .then(() => handleClose())
        .catch((err) => console.error(err));
    },
  });

  useImperativeHandle(ref, () => ({
    open: (data) => {
      if (data) {
        frm.setValues(data);
      }
      handleClickOpen();
    },
    close: handleClose,
  }));

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="update-jobtype">
      <DialogTitle id="update-jobtype">Update Job Type</DialogTitle>
      <DialogContent>
        <form onSubmit={frm.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="id"
                name="id"
                label="ID"
                value={frm.values.id}
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="tenLoaiCongViec"
                name="tenLoaiCongViec"
                label="Job Type"
                value={frm.values.tenLoaiCongViec}
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
            </Grid>
          </Grid>
          <DialogActions>
            <Button type="submit" color="primary">
              Save
            </Button>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
});

export default UpdateJobType;

// import * as React from "react";
// import { forwardRef, useImperativeHandle, useState } from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import { Grid, Input, TextField, useMediaQuery, useTheme } from "@mui/material";
// import { useFormik } from "formik";
// import { useDispatch } from "react-redux";
// // import { AppDispatch } from "../../redux/configStore";
// import { updateJobTypeApi } from "../../redux/reducers/adminReducer";
// import _ from "lodash";
// // import { LoaiCongViec } from "../../redux/models/JobModel";


// const UpdateJobType = ({ jobtype }, ref) => {
//   const dispatch = useDispatch();
//   const [open, setOpen] = useState(false);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   //
//   const frm = useFormik({
//     initialValues: {
//       id: jobtype.id,
//       tenLoaiCongViec: jobtype.tenLoaiCongViec,
//     },
//     onSubmit: (values) => {
//       const payload = values;
//       dispatch(updateJobTypeApi(jobtype.id, payload))
//         .then((res) => {
//           handleClose();
//         })
//         .catch((err) => {});
//     },
//   });

//   useImperativeHandle(ref, () => ({
//     open: (data?) => {
//       console.log(data);
//       setOpen(true);
//     },
//     close: () => setOpen(false),
//   }));

//   return (
//     <div className="mb-3">
//       <Dialog
//         className="dialog_admin"
//         open={open}
//         onClose={handleClose}
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle className="dialogTitle_admin">UPDATE JOBTYPE</DialogTitle>
//         <DialogContent className="dialogContent_admin">
//           <form className="form" onSubmit={frm.handleSubmit}>
//             <Grid spacing={1} container mt={1}>
//               <Grid item xs={12} md={6} mt={1}>
//                 <TextField
//                   fullWidth
//                   disabled
//                   id="id"
//                   name="id"
//                   type="text"
//                   label="ID"
//                   value={frm.values.id}
//                   onChange={frm.handleChange}
//                   onBlur={frm.handleBlur}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6} mt={1}>
//                 <TextField
//                   fullWidth
//                   name="tenLoaiCongViec"
//                   type="text"
//                   value={frm.values.tenLoaiCongViec}
//                   onChange={frm.handleChange}
//                   onBlur={frm.handleBlur}
//                   label="JobType"
//                 />
//               </Grid>
//             </Grid>

//             <DialogActions className="dialogActions_admin">
//               <Button type="submit" className="btn_add">
//                 Save
//               </Button>
//               <Button onClick={handleClose} autoFocus className="btn_cancel">
//                 Cancel
//               </Button>
//             </DialogActions>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };
// export default forwardRef(UpdateJobType);
