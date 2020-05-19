import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    
    const { getByText } = render(<CheckoutForm/>);
    const header = getByText(/checkout form/i); //test fails if text query is changed
   
    expect(header).toBeInTheDocument();
});


test("form shows success message on submit with form details ", async () => {
    
    const { queryByTestId } = render(<CheckoutForm/>);
    let message = queryByTestId("successMessage");
    
    expect(message).toBeNull();
    
    const submitButton = queryByTestId("submitButton");
    fireEvent.click(submitButton);                      //test fails if click event is not fired
    message = await queryByTestId("successMessage");
    
    expect(message).toBeInTheDocument();
    
    });




   
   
    // test("form shows success message on submit with form details", () => {
    
// const { queryByTestId } = render(<CheckoutForm/>);
// const message = queryByTestId("successMessage");
// console.log('message value', message)

// expect(message).toBeNull()

// });