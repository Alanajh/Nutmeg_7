import React from 'react';

const TakeTestFun = (props) =>{
    const firstAnswer = props.test_1[0].target;
    const secondAnswer = props.test_1[1].target;
    const thirdAnswer = props.test_1[2].target;
    const fourthAnswer = props.test_1[3].target;
    const results = firstAnswer.map((item) => 
        <li key="1"><input type="radio"/>{item.option_1}</li>    
    );
    const results2 = secondAnswer.map((item) => 
        <li key="2"><input type="radio"/>{item.option_1}</li>
    );
    const results3 = thirdAnswer.map((item) => 
        <li key="3"><input type="radio"/>{item.option_1}</li>    
    );
    const results4 = fourthAnswer.map((item) => 
        <li key="4"><input type="radio"/>{item.option_1}</li>    
    );
 
    return (
        <div><ul>{results}{results2}{results3}{results4}</ul></div>
    ); 
}
export default TakeTestFun;