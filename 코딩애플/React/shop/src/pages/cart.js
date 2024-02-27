import { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, deleteProduct } from "../store.js";

function Cart() {
  let cart = useSelector((state) => {
    return state.cart;
  });

  let dispatch = useDispatch();
  
  
  
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{parseInt(a.id)+1}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeCount(a.id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button onClick={()=>{
                    dispatch(deleteProduct(a.name))
                  }}>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
