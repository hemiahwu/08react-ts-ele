import React, { useState } from "react";

export default function LoginForm() {
  const [phone, setPhone] = useState<number>();
  const [verifyCode, setVerifyCode] = useState<number>();
  const [invalid, setInvalid] = useState<boolean>(false);

  const handleSubimit = () => {};
  const handlePhoneChange = () => {};
  const handleGetVerifyCode = () => {};
  const handleVerifyCodeChange = () => {};
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
        {invalid && <div className="invalid-feedback">报错信息</div>}
        <div className="login-btn">
          <button>登录</button>
        </div>
      </form>
      <div className="login-des">
        <p>
          新用户登录即自动注册，表示已同意
          <span>《用户服务协议》</span>
        </p>
      </div>
    </>
  );
}
