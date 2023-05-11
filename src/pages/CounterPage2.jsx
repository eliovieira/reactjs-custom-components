import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change_value_to_add";
const ADD_VALUE_TO_COUNT = "add_value";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT_COUNT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case SET_VALUE_TO_ADD: {
      return {
        ...state,
        valueToAdd: action.payload,
      };
    }
    case ADD_VALUE_TO_COUNT: {
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    }
    default:
      return state;
  }
};

const CounterPage2 = ({ initialCount }) => {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valuetoAdd: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  const handleChange = (value) => {
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  return (
    <Panel className="m-3 flex flex-col items-center justify-center gap-4">
      <h1 className="text-lg bold">Current Count: {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form
        className="flex flex-col gap-1 items-center"
        onSubmit={handleSubmit}
      >
        <input
          value={state.valueToAdd || ""}
          className=" p-1 m-3 bg-gray-50 border border-gray-300"
          type="number"
          onChange={(e) => handleChange(Number(e.target.value))}
          placeholder="enter a value to add"
        />
        <Button type="submit">Add</Button>
      </form>
    </Panel>
  );
};

export default CounterPage2;
