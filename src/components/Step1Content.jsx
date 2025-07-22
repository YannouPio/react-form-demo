import React from 'react';

export const Step1Content = ({ register, errors }) => (
  <div>
    <div>
      <label>用户名</label>
      <input {...register("username", { required: "用户名为必填项" })} />
      {errors.username && <p className="error">{errors.username.message}</p>}
    </div>
    
    <div>
      <label>邮箱</label>
      <input 
        type="email"
        {...register("email", { 
          required: "邮箱为必填项", 
          pattern: { 
            value: /^\S+@\S+$/i, 
            message: "邮箱格式不正确" 
          } 
        })} 
      />
      {errors.email && <p className="error">{errors.email.message}</p>}
    </div>
  </div>
);