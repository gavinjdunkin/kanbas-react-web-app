import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import ParentStateComponent from "./ParentStateComponent";
import ArrayStateVariable from "./ArrayStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import DateStateVariable from "./DateStateVariables";
import StringStateVariables from "./StringStateVariables";
import BooleanStateVariables from "./BooleanStateVariables";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
    function sayHello() {
      alert("Hello");
    }
  return(
    <>
      <h1>Assignment 4</h1>
      <ReduxExamples/>
      <ParentStateComponent/>
      <ArrayStateVariable/>
      <ObjectStateVariable/>
      <DateStateVariable/>
      <StringStateVariables/>
      <BooleanStateVariables/>
      <Counter/>
      <EventObject/>
      <PassingFunctions theFunction={sayHello} />
      <PassingDataOnEvent/>
      <ClickEvent/>
    </>
  );
};
export default Assignment4;