import { DeleteOutline, Edit } from "@mui/icons-material";
import { useEffect, useReducer } from "react";
import { dayFocus } from "../../reducers/dayFocus";
import CloseIcon from "@mui/icons-material/Close";
import "./dayfocus.css";
const DayFocus = () => {
  const initialState = {
    goalFinal: "",
    goal: "",
    todoCompleted: false,
    edit: false,
  };
  const [state, dispatch] = useReducer(dayFocus, initialState);

  const inputGoalHandler = () => {
    const finalgoal = JSON.parse(localStorage.getItem("goal"));
    dispatch({ type: "SET_FINAL_GOAL", payload: { value: finalgoal } });
    dispatch({ type: "SET_EDIT", payload: { value: false } });
  };

  const onChangeHandler = (e) => {
    localStorage.setItem(
      "goal",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("goal")),
        goal: e.target.value,
      })
    );
    dispatch({
      type: "SET_GOAL",
      payload: { value: e.target.value },
    });
  };

  useEffect(() => {
    const goal = JSON.parse(localStorage.getItem("goal")) ?? {};
    dispatch({ type: "SET_FINAL_GOAL", payload: { value: goal } });
  }, []);

  return (
    <>
      {state.goalFinal && !state.edit ? (
        <>
          <div className='main-goal-sec'>
            Your main focus for today is
            <div className='todo-sec'>
              <div className=''>
                <input
                  type='checkbox'
                  checked={
                    JSON.parse(localStorage.getItem("goal")).todoCompleted
                  }
                  className='goal-input'
                  onClick={() =>
                    dispatch({
                      type: "SET_TODO_COMPLETED",
                    })
                  }
                />
              </div>
              <div className={`mygoal ${state.todoCompleted && "completed"}`}>
                {state.goalFinal}
              </div>
              <div className='btn-goal'>
                <Edit
                  onClick={() =>
                    dispatch({ type: "SET_EDIT", payload: { value: true } })
                  }
                />
              </div>
              <div className='btn-cont'>
                <CloseIcon onClick={() => dispatch({ type: "CLEAR_GOAL" })} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='goal-ques'>What your wanna focus for today?</div>
          <input
            type='text'
            className='userInput input'
            value={
              state.edit
                ? JSON.parse(localStorage.getItem("goal")).goal
                : state.goal
            }
            onChange={(e) => onChangeHandler(e)}
            onKeyPress={(e) => {
              e.key === "Enter" && inputGoalHandler();
            }}
          />
        </>
      )}
    </>
  );
};

export default DayFocus;
