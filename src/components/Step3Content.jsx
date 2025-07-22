import React from 'react';

export const Step3Content = ({ register, errors }) => (
  <div>
    <div>
      <label>兴趣爱好</label>
      <div>
        <label>
          <input 
            type="checkbox" 
            value="reading" 
            {...register("hobbies", { required: "请至少选择一项兴趣爱好" })}
          />
          阅读
        </label>
        <label>
          <input 
            type="checkbox" 
            value="sports" 
            {...register("hobbies")}
          />
          运动
        </label>
        <label>
          <input 
            type="checkbox" 
            value="music" 
            {...register("hobbies")}
          />
          音乐
        </label>
        <label>
          <input 
            type="checkbox" 
            value="travel" 
            {...register("hobbies")}
          />
          旅行
        </label>
      </div>
      {errors.hobbies && <p className="error">{errors.hobbies.message}</p>}
    </div>
    
    <div>
      <label>自我介绍</label>
      <textarea 
        {...register("introduction", { 
          required: "请输入自我介绍",
          minLength: {
            value: 10,
            message: "自我介绍至少需要10个字符"
          }
        })} 
        rows="4"
        placeholder="请简单介绍一下自己..."
      />
      {errors.introduction && <p className="error">{errors.introduction.message}</p>}
    </div>
    
    <div>
      <label>
        <input 
          type="checkbox" 
          {...register("agreement", { required: "请同意用户协议" })}
        />
        我同意用户协议和隐私政策
      </label>
      {errors.agreement && <p className="error">{errors.agreement.message}</p>}
    </div>
  </div>
);