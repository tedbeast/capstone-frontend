import { getAllGoalsAPI} from "../services/GoalsAPIService";
import { postGoalsAPI } from "../services/GoalsAPIService";
import React, { SyntheticEvent, useState } from "react";
import { ListGoal } from "./ListGoal";


interface GoalsModel {
    goalreviewA:string,
    goalreviewB:string,
    goalreviewC:string
    // goalreview:string,
    // goaltargetdate:string,
    // goalweightage:number
}
export function AddGoal(){
    // const [goaltype, setGoalType] = useState<string>("")
     const [goalreviewA, setGoalReviewA] = useState<string>("")
     const [goalreviewB, setGoalReviewB] = useState<string>("")
     const [goalreviewC, setGoalReviewC] = useState<string>("")
    // const [goaltargetdate, setGoalTargetDate] = useState<string>("")
    // const [goalweightage, setGoalWeightage] = useState<string>("")


    // function GoalTypeHandler(event:SyntheticEvent){
    //     let textBox = event.target as HTMLTextAreaElement;
    //     setGoalType (textBox.value);
    //     console.log(textBox.value);
    // }


    function GoalReviewHandlerA(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setGoalReviewA(textBox.value);
        console.log(textBox.value);
    }

    function GoalReviewHandlerB(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setGoalReviewB(textBox.value);
        console.log(textBox.value);
    }

    function GoalReviewHandlerC(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setGoalReviewC(textBox.value);
        console.log(textBox.value);
    }

    // function GoalTargetDateHandler(event:SyntheticEvent){
    //     let textBox = event.target as HTMLTextAreaElement;
    //     setGoalTargetDate(textBox.value);
    //     console.log(textBox.value);
    // }

    // function GoalWeightageHandler(event:SyntheticEvent){
    //     let textBox = event.target as HTMLTextAreaElement;
    //     setGoalWeightage(textBox.value);
    //     console.log(textBox.value);
    // }


function buttonClickHandler(){
    const GoalsData = {
        // goaltype:goaltype,
        goalreviewA:goalreviewA,
        goalreviewB:goalreviewB,
        goalreviewC:goalreviewC
        // goaltargetdate:goaltargetdate,
        // goalweightage:parseInt(goalweightage)
}

        postGoalsAPI(GoalsData).then(response =>{
            if (response.ok){
                console.log("Goal created successfully!");
 //               setGoalType("");
                setGoalReviewA("");
                setGoalReviewB("");
                setGoalReviewC("");
  //              setGoalTargetDate("");
  //              setGoalWeightage("");

            }else {
                console.log ("Failed to create Goal!" + response.statusText);
            }
        // }).catch(error => {
        //     console.error("Error is", error);
        // });}
});}


        return(<>
            <h1>Enter your Goals</h1>
            <div className="w3-half">
                <label>Goal Type: Agile / Team Work</label>
                {/* <input type="text" onChange={GoalTypeHandler} value={goaltype}></input> */}
            </div>
            <div className="w3-half">
                <label>Weightage (in %): 30  </label>
                {/* <input type="text" onChange={GoalWeightageHandler} value={goalweightage}></input> */}
            </div>
            <div className="w3-half">
                <label>Target (in mm/dd/yy): </label>
              <input type="text" value={"06/30/24"}></input>
            </div> 
            <div className="input-container">
                <label>Dsecription: </label>
                <input type="text" onChange={GoalReviewHandlerA} value={goalreviewA}></input>
            </div>
            <div className="w3-half">
                <label>Goal Type: Technical Skill / Expertise</label>
                {/* <input type="text" onChange={GoalTypeHandler} value={goaltype}></input> */}
            </div>
            <div className="w3-half">
                <label>Weightage (in %): 40  </label>
                {/* <input type="text" onChange={GoalWeightageHandler} value={goalweightage}></input> */}
            </div>
            <div className="w3-half">
                <label>Target (in mm/dd/yy): </label>
                <input type="text" value={"06/30/24"}></input> 
            </div> 
            <div className="input-container">
                <label>Description: </label>
                <input type="text" onChange={GoalReviewHandlerB} value={goalreviewB}></input>
            </div>
            <div className="w3-half">
                <label>Goal Type: Personal Development</label>
                {/* <input type="text" onChange={GoalTypeHandler} value={goaltype}></input> */}
            </div>
            <div className="w3-half">
                <label>Weightage(in %): 30  </label>
                {/* <input type="text" onChange={GoalWeightageHandler} value={goalweightage}></input> */}
            </div>
            <div className="w3-half">
                <label>Target (in mm/dd/yy): </label>
                <input type="text" value={"06/30/24"}></input>
            </div> 
            <div className="input-container">
                <label>Description: </label>
                <input type="text" onChange={GoalReviewHandlerC} value={goalreviewC}></input>
            </div>
                <button onClick={buttonClickHandler}>Submit</button>
            </>
            );


    }

// function parseDate(goaltargetdate: string) {
//     throw new Error("Function not implemented.");


