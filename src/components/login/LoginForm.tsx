import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const [phone, setPhone] = useState<string>("");
  const [verifyCode, setVerifyCode] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone((e.target as HTMLInputElement).value);
  };

  const handleVerifyCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerifyCode((e.target as HTMLInputElement).value);
  };

  // 获取验证码
  const handleGetVerifyCode = async () => {
    if (!phone) {
      setInvalid(true);
      setErrorMsg("手机号不能为空");
      return;
    }

    try {
      const response = await axios.post(
        "https://www.thenewstep.cn/backend/8000/api/posts/sms_send",
        { phone }
      );
      // 069183
      console.log(response);
      if (response.data.msg === "OK") {
        toast.success("短信发送成功,请查收验证码");
      } else {
        const digits = response.data.msg.match(/\d+/g)?.join("");
        setVerifyCode(digits);
        toast.success(response.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 登录操作
  const handleSubimit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phone && verifyCode) {
      try {
        const response = await axios.post(
          "https://www.thenewstep.cn/backend/8000/api/posts/sms_back",
          { phone, code: verifyCode }
        );
        toast.success(response.data.msg);
      } catch (error: any) {
        toast.error(error.message);
      }
    } else {
      setInvalid(true);
      setErrorMsg("手机号或验证码不能为空");
    }
  };

  return (
    <>
      <form onSubmit={handleSubimit} className="login-form">
        <div className="input-group">
          <input
            type="text"
            name="phone"
            placeholder="请输入手机号"
            value={phone}
            onChange={handlePhoneChange}
          />
          <button type="button" onClick={handleGetVerifyCode}>
            获取验证码
          </button>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="verifyCode"
            placeholder="验证码"
            value={verifyCode}
            onChange={handleVerifyCodeChange}
          />
        </div>
        {invalid && <div className="invalid-feedback">{errorMsg}</div>}
        <div className="login-btn">
          <button type="submit">登录</button>
        </div>
      </form>
      <div className="login-des">
        <p>
          新用户登录即自动注册，表示已同意
          <span>《用户服务协议》</span>
        </p>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}
