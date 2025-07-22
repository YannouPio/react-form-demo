import React from 'react';

export const Step2Content = ({ register, errors }) => (
  <div>
    <div>
      <label>手机号码</label>
      <input 
        type="tel"
        {...register("phone", { 
          required: "手机号码为必填项",
          pattern: {
            value: /^1[3-9]\d{9}$/,
            message: "请输入正确的手机号码"
          }
        })} 
      />
      {errors.phone && <p className="error">{errors.phone.message}</p>}
    </div>
    
    <div>
      <label>公司名称</label>
      <input 
        {...register("company", { required: "公司名称为必填项" })} 
      />
      {errors.company && <p className="error">{errors.company.message}</p>}
    </div>
    
    <div>
      <label>职位</label>
      <select {...register("position", { required: "请选择职位" })}>
        <option value="">请选择</option>
        <option value="developer">开发工程师</option>
        <option value="designer">设计师</option>
        <option value="manager">项目经理</option>
        <option value="other">其他</option>
      </select>
      {errors.position && <p className="error">{errors.position.message}</p>}
    </div>
  </div>
);