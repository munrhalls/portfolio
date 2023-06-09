import { createSlice } from "@reduxjs/toolkit";

export const aboutSlice = createSlice({
  name: "home",
  initialState: {
    value: "",
  },
  reducers: {
    edit: (state) => {
      state.value = "";
    },
  },
});

export const { edit } = aboutSlice.actions;

export default aboutSlice.reducer;
// comment
// <Form onSubmit={handleEdit} className="text-center mb-3">
//   <Form.Group className="mb-3">
//     <Form.Label>Element text</Form.Label>
//     <Form.Control name="element" type="text" placeholder="Element text" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>;
