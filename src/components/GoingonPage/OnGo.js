import botanyOne from "../../data/botanyOne.png";
import { Container, MessageBox } from "./OnGo-style";
import { Button } from "@mui/material";
import { useState } from "react";
import Header from "./../Header";
import Form from "./../Form";

const OnGo = () => {
  const [click, setClick] = useState(false);

  const showQuestions = () => {
    setClick(!click);
  };
  return (
    <>
      {click ? (
        <>
          <Header />
          <Form />
        </>
      ) : (
        <div style={Container}>
          <div>
            <Button variant="contained" color="success" onClick={showQuestions}>
              ဟုတ်ကဲ့။
            </Button>
          </div>
          <div>
            <MessageBox>
              ""ကဲကဲ ဒါဆိုမင်းတို့ကောင်တွေZoo Mcqမေးခွန်းလိုချင်လား။။။။""
            </MessageBox>
            <div>
              <img
                src={botanyOne}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OnGo;
