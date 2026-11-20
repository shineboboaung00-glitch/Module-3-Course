// onclick — ခလုတ်နှိပ်လိုက်သည့်အခါ သတ်မှတ်ထားသော 
// JavaScript Code ကို ချက်ချင်း အလုပ်လုပ်စေသည့် Event ဖြစ်သည်။

// .value — <input> အကွက်အတွင်းရှိ တန်ဖိုး (စာသား/ဂဏန်း) ကို 
// ယူသုံးရန် သို့မဟုတ် အသစ်ထည့်ရန် သုံးသည်။

// .slice(0, -1) — စာသား၏ နောက်ဆုံးတစ်လုံးကို ဖြတ်ထုတ်ပေးသည် 
// (Calculator တွင် DEL / Backspace ခလုတ်အတွက် သုံးသည်)။

// eval() — String (စာသား) ပုံစံဖြင့် ရှိနေသော သင်္ချာပုစ္ဆာကို 
// အမှန်တကယ် တွက်ချက်ပြီး အဖြေထုတ်ပေးသည် (= ခလုတ် အတွက် သုံးသည်)။ 
// (မှတ်ချက် - လုံခြုံရေးအရ အစစ်အမှန် Website ကြီးများတွင် မသုံးသင့်ပါ)။




let result = document.querySelector("#result")

function addValue(uservalue) {
    if(result.value === "0"){
        result.value = uservalue
    }else{
        result.value += uservalue
    }
}

function clearResult(){
    result.value = "0";
}

function deleteResult(){
    result.value = result.value.slice(0, -1)
}

function calculate(){
    try{
        result.value = eval(result.value)
    }catch{
        result.value = "Error"
    }
}

