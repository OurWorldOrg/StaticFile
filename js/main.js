function sooncoming() {
  automsg({ buttonText: "关闭", message: "开发中..." });
}
Ow_Server = "";
//服务器通信============================
function AjaxFn(url, data, callbackFn) {
  data.token = Cookies.get("token");
  $.ajax({
    url: Ow_Server + url,
    type: "POST",
    data: data,
    success: function (d) {
      if(d.message){
        automsg({ buttonText: "关闭", message: d.message });
        console.log(d.message)

      }
      callbackFn(d);

    },
    error: function (err) {
      automsg(err);
      console.log(err)
    },
  });
}
//服务器通信============================
function AjaxGet(url, data, callbackGet, needauth) {
  if (needauth == true) {
    data.token = Cookies.get("token");
  }
  //data.token = Cookies.get('token');
  $.ajax({
    url: Ow_Server + url,
    type: "GET",
    data: data,
    success: function (d) {
      if(d.message){
        automsg({ buttonText: "关闭", message: d.message });
        console.log(d.message)
      }
      callbackGet(d);
    },
    error: function (err) {
      automsg(err);
      console.log(err)

    },
  });
}
//生成随机字符串

//文本格式检查功能函数============================
var phoneTest = function (No) {
  var reg = /^1[3456789]\d{9}$/;
  return reg["test"](No);
};
var emailTest = function (pw) {
  var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return reg["test"](pw);
};

var userpasswordTest = function (pw) {
  var reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
  return reg["test"](pw);
};
var spaceTest = function (str) {
  var reg = /^\s*$/;
  return reg["test"](str);
};
var emailTest = function (EMail) {
  var reg =
    /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
  return reg["test"](EMail);
};
var strTest = function (v) {
  var reg = new RegExp(
    "[`~!@%#$^&*()=|{}':;',\\[\\]<>/?\\.；：%……+￥‘”“'。，？]"
  );
  return reg.test(v);
};
var codeTest = function (v) {
  var reg = /^([A-Za-z0-9]+){6,10}$/;
  return reg["test"](v);
};
var domainTest = function (v) {
  var reg = /^([a-z0-9]+){1,16}$/;
  return reg["test"](v);
};
var numberTest = function (v) {
  var reg = /^([0-9]+){1,24}$/;
  return reg["test"](v);
};
