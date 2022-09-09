import botany from "./../../data/botany.png";
import { Container, MessageBox } from "./MyPage-style";
import { Button } from "@mui/material";
import { useState } from "react";
import OnGo from "../GoingonPage/OnGo";

const MyPage = () => {
  const [click, setClick] = useState(false);

  const showQuestions = () => {
    setClick(!click);
  };
  return (
    <>
      {click ? (
        <>
          <OnGo />
        </>
      ) : (
        <div style={Container}>
          <div>
            <Button variant="contained" color="error" onClick={showQuestions}>
              မလုပ်ပါနဲ့ဆရာကြီး။
            </Button>
          </div>
          <div>
            <MessageBox>
              ""ဟေ့ကောင်တွေမင်းတို့ကောင်တွေလုပ်နေတာတွေငါသိတယ်နော်။မင်းတို့ဆရာမကြီးကိုပြောလိုက်ရမလား။""
            </MessageBox>
            <div>
              <img
                src={botany}
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

export default MyPage;
