# 08-React-TS-login

## 第一章 课程代码

Git仓库地址: https://github.com/hemiahwu/08react-ts-ele

百度网盘链接: https://pan.baidu.com/s/15rT8Ayc62h_hGdKcu4OFRg?pwd=e6by 提取码: e6by



课程答疑微信: 

web1024b

### 1. 创建项目

- 命令

```bash
npm create vite@latest react-ts-ele
```

- react typescript
- npm install && npm run dev

- index.css 样式初始化

```css
/* 全局样式初始化 */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button,
input,
textarea {
  outline: none;
  border: none;
  background: none;
}

/* index.html */
html,
body {
  width: 100%;
  height: 100%;
}
/* App.tsx */
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
  background: #f1f1f1;
}
```

### 2. App.tsx

```tsx
import React from "react";
import Login from "./pages/login/Login";

function App() {
  return (
    <div id="app">
      <Login />
    </div>
  );
}

export default App;
```

### 3. 创建 src/pages/Login.tsx

```tsx
import React from "react";

export default function Login() {
  return <div>login</div>;
}
```

### 4. 实现 header

```tsx
import Logo from "../../assets/react.svg";
import "./login.css";

const Login = () => {
  return (
    <section className="login-component">
      <header className="logo">
        <img src={Logo} alt="my login image" />
      </header>
      {/* <LoginForm /> */}
    </section>
  );
};

export default Login;
```

### 5. 创建 src/pages/login.css

```css
/* Login.tsx */
.login-component {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}

.login-component .logo {
  text-align: center;
}

.login-component .logo img {
  width: 150px;
}

.login-component .input-group,
.login-component .login-des,
.login-component .login-btn {
  margin-top: 20px;
}

.login-component .login-des {
  color: #aaa;
  line-height: 22px;
}

.login-component .login-des span {
  color: #4d90fe;
}

.login-component .login-btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}

.login-component .login-btn button[disabled] {
  background-color: #8bda81;
}

.login-component .input-group {
  border: 1px solid #ccc;

  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.login-component .input-group input {
  height: 100%;
  width: 60%;
  outline: none;
}

.login-component .input-group button {
  border: none;
  outline: none;
  background: #fff;
}

.login-component .input-group button[disabled] {
  color: #aaa;
}

.login-component .is-invalid {
  border: 1px solid red;
}

.login-component .invalid-feedback {
  color: red;
  padding-top: 5px;
}
```

## 2. 配置别名

### 1. Vite.config.ts

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 1
import path from "path";

export default defineConfig({
  plugins: [react()],
  // 2
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### 2. App.tsx 引入

```tsx
import Login from "@/pages/login/Login";
```

### 3. Login.tsx

```tsx
import Logo from "@/assets/react.svg";
```

### 4. tsconfig.json

```json
"compilerOptions": {
  ...
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  }
},
```

## 3. Login.tsx

### 1. 搭建 Form 表单的基本结构

```tsx
...
import LoginForm from "@/components/login/LoginForm";

const Login = () => {
  return (
    <section className="login-component">
     	....
      <LoginForm />
    </section>
  );
};

export default Login;
```

### 2. 创建 components/login/LoginForm.tsx

```tsx
import React, { ChangeEvent, FormEvent, useState } from "react";

const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone((e.target as HTMLInputElement).value);
  };

  const handleVerifyCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerifyCode(e.target as HTMLInputElement).value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

  };

  const handleGetVerifyCode = async () => {

  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
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
      ...
    </>
  );
};

export default React.memo(LoginForm);
```

## 4. Login.tsx 更新值

### 1. 更新值

```tsx
import React, { ChangeEvent, FormEvent, useState } from "react";

const LoginForm = () => {
  ...

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone((e.target as HTMLInputElement).value);
  };

  const handleVerifyCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerifyCode(e.target as HTMLInputElement).value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  };

  const handleGetVerifyCode = async () => {

  };
```

## 5. Login.tsx

### 1. 如果 phone 为空

```tsx
const [errorMsg, setErrorMsg] = useState<string>("");

const handleGetVerifyCode = async () => {
  if (!phone) {
    setInvalid(true);
    setErrorMsg("手机号码不能为空");
    return;
  }
};
```

### 2. 安装 axios

```bash
npm i axios
```

### 3. 发起请求

```tsx
const handleGetVerifyCode = async () => {
  ...
  try {
    const response = await axios.post("https://www.thenewstep.cn/backend/8000/api/posts/sms_send", {
      phone,
    });
    console.log(response.data);
    if (response.data.msg == "OK") {
      const digits = response.data.msg.match(/\d+/g)?.join("");
      setVerifyCode(digits);

      toast.success(response.data.msg);
    } else {
      toast.success("短信发送成功，请查收验证码");
    }
  } catch (error) {
    toast.error("短信发送失败，请重试");
  }
};
```

## 6. 实现通知

### 1. LoginForm.tsx

- 安装 react-toastify

```bash
npm i react-toastify
```

- 引入模块

```tsx
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
```

- 弹窗

```tsx
const handleGetVerifyCode = async () => {
  ...
  try {
    ...
    if (response.data.msg == "OK") {
      // 3.
      const digits = response.data.msg.match(/\d+/g)?.join("");
      setVerifyCode(digits);

      toast.success(response.data.msg);
    } else {
      // 1.
      toast.success("短信发送成功，请查收验证码");
    }
  } catch (error) {
    // 2
    toast.error("短信发送失败，请重试");
  }
};
```

- 弹窗容器

```tsx
<ToastContainer position="top-center" />
```

## 7. 校验验证码

### 1. LoginForm.tsx

```tsx
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (phone && verifyCode) {
    try {
      const response = await axios.post(
         ,
        {
          phone: phone,
          code: verifyCode,
        }
      );
      console.log(response.data);
      // 在这里处理登录成功的情况
    } catch (error) {
      console.log(error);
      // 在这里处理登录失败的情况
    }
  } else {
    setInvalid(true);
  }
};
```
