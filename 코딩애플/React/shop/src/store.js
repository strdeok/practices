import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    /** 개수변경 **/
    changeCount(state, action) {
      state.find((find) => {
        if (find.id === action.payload) {
          find.count++;
        }
      });
    },
    /** 상품추가(중복방지) **/
    productPlus(state, action) {
      let product_new = {};
      let product_name = state.map((a) => {
        return a.name;
      });
      // 이미 있을때
      if (product_name.includes(action.payload.title)) {
        state.find((find) => {
          if (find.name == action.payload.title) {
            find.count++;
          }
        });
        // 없을때
      } else {
        product_new.id = state.length
        product_new.name = action.payload.title;
        product_new.count = 1;
        state.push(product_new);
      }
    },
    /** 삭제버튼 **/
    deleteProduct(state, action) {
      let new_arr = [];

      state.map((a) => {
        let new_obj = {};
        new_obj.id = a.id;
        new_obj.name = a.name;
        new_obj.count = a.count;
        new_arr.push(new_obj);
      });

      let find = new_arr.find((find) => {
        return find.name === action.payload;
      });
      new_arr.forEach((e, i) => {
        if (e === find) {
          new_arr.splice(i, 1);
        }
      });

      return new_arr;
    },
  },
});

export let { changeCount, productPlus, deleteProduct } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
