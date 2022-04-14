import {
  fireEvent,
  getAllByText,
  getByTestId,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import Page from "./components/Page";
import store from "./store/store";

const testStore = store();

test("a first test", () => {
  const test = render(<Page store={testStore} />);
  const submitBtnn = test.getByText("add button");

  const submit_takebtn = test.getByText("take outtt");

  for (let i = 1; i <= 1000; ++i) {
    fireEvent.click(submitBtnn);
    expect(document.getElementById("value-display")).toHaveTextContent(
      "value: " + i
    );
  }

  for (let i = 999; i >= 0; i--) {
    fireEvent.click(submit_takebtn);
    expect(document.getElementById("value-display")).toHaveTextContent(
      "value: " + i
    );
  }

  // const submitBtn=test.getAllByText('add buttosn meri pls')

  // console.log(valueOfCount)
  // fireEvent.click(submitBtn)
  // submitBtnn.forEach((e)=>{
  // e.click(submitBtn)
  // expect(valueOfCount[0].toBe(1))

  // })

  // expect('test')
  // screen.debug
  // const { queryByTestId } = render(<Page />);
  // render(<Page/>)
  // console.log('test');
  // // console.log(JSON.stringify())

  // const increaseButton = queryByTestId('increase-button');

  // console.log(increaseButton.ATTRIBUTE_NODE)
  // const result=queryByTestId('result')  ;
  // userEvent.click(increaseButton);

  // fireEvent(
  // getByText()
  // )

  // const addButton = screen.findByText('add button meri pls');
  // console.log(addButton)
  // fireEvent.click(addButton)
  // expect(screen.findByTestId('value: '))
  // expect()
  // expect(linkElement).toBeInTheDocument();
});
