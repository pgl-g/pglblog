import React, { memo } from 'react';


import ResumeListStyle from '../../assets/css/components/resumeList.module.css';

const Resume = memo(() => {

  return (
    <div className={ResumeListStyle.resumeList_container}>
      <div className={ResumeListStyle.resume_personal}>
        <h1>个人信息</h1>
        <div className={ResumeListStyle.personal_content}>
          <ul className={ResumeListStyle.personal_content_ul}>
            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>姓名：</span>
              <span className={ResumeListStyle.personal_value}>pgl</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>工作年限：</span>
              <span className={ResumeListStyle.personal_value}>3年</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>意向城市：</span>
              <span className={ResumeListStyle.personal_value}>杭州</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>邮箱：</span>
              <span className={ResumeListStyle.personal_value}>1801688332@qq.com</span>
            </li>
          </ul>

          <ul className={ResumeListStyle.personal_content_ul}>
            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>年龄：</span>
              <span className={ResumeListStyle.personal_value}>24岁</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>求职岗位：</span>
              <span className={ResumeListStyle.personal_value}>前端开发工程师</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>电话：</span>
              <span className={ResumeListStyle.personal_value}>15870842969</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>github：</span>
              <span className={ResumeListStyle.personal_value}>https://github.com/pgl-g</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={ResumeListStyle.resume_educationList}>
        <h1>教育</h1>
        <div className={ResumeListStyle.personal_content}>
          <ul className={ResumeListStyle.personal_content_ul}>
            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>姓名：</span>
              <span className={ResumeListStyle.personal_value}>pgl</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>工作年限：</span>
              <span className={ResumeListStyle.personal_value}>3年</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>意向城市：</span>
              <span className={ResumeListStyle.personal_value}>杭州</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>邮箱：</span>
              <span className={ResumeListStyle.personal_value}>1801688332@qq.com</span>
            </li>
          </ul>

          <ul className={ResumeListStyle.personal_content_ul}>
            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>年龄：</span>
              <span className={ResumeListStyle.personal_value}>24岁</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>求职岗位：</span>
              <span className={ResumeListStyle.personal_value}>前端开发工程师</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>电话：</span>
              <span className={ResumeListStyle.personal_value}>15870842969</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>github：</span>
              <span className={ResumeListStyle.personal_value}>https://github.com/pgl-g</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={ResumeListStyle.resume_skillList}>
        <h1>专业技能</h1>
        <div className={ResumeListStyle.personal_content}>
          <ul className={ResumeListStyle.personal_content_ul}>
            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>姓名：</span>
              <span className={ResumeListStyle.personal_value}>pgl</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>工作年限：</span>
              <span className={ResumeListStyle.personal_value}>3年</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>意向城市：</span>
              <span className={ResumeListStyle.personal_value}>杭州</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>邮箱：</span>
              <span className={ResumeListStyle.personal_value}>1801688332@qq.com</span>
            </li>
          </ul>

          <ul className={ResumeListStyle.personal_content_ul}>
            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>年龄：</span>
              <span className={ResumeListStyle.personal_value}>24岁</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>求职岗位：</span>
              <span className={ResumeListStyle.personal_value}>前端开发工程师</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>电话：</span>
              <span className={ResumeListStyle.personal_value}>15870842969</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>github：</span>
              <span className={ResumeListStyle.personal_value}>https://github.com/pgl-g</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={ResumeListStyle.resume_projectList}>
        <h1>项目经历</h1>
        <div className={ResumeListStyle.personal_content}>
          <ul className={ResumeListStyle.personal_content_ul}>
            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>姓名：</span>
              <span className={ResumeListStyle.personal_value}>pgl</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>工作年限：</span>
              <span className={ResumeListStyle.personal_value}>3年</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>意向城市：</span>
              <span className={ResumeListStyle.personal_value}>杭州</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>邮箱：</span>
              <span className={ResumeListStyle.personal_value}>1801688332@qq.com</span>
            </li>
          </ul>

          <ul className={ResumeListStyle.personal_content_ul}>
            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>年龄：</span>
              <span className={ResumeListStyle.personal_value}>24岁</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>求职岗位：</span>
              <span className={ResumeListStyle.personal_value}>前端开发工程师</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>电话：</span>
              <span className={ResumeListStyle.personal_value}>15870842969</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>github：</span>
              <span className={ResumeListStyle.personal_value}>https://github.com/pgl-g</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={ResumeListStyle.resume_workExpList}>
        <h1>工作经历</h1>
        <div className={ResumeListStyle.personal_content}>
          <ul className={ResumeListStyle.personal_content_ul}>
            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>姓名：</span>
              <span className={ResumeListStyle.personal_value}>pgl</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>工作年限：</span>
              <span className={ResumeListStyle.personal_value}>3年</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>意向城市：</span>
              <span className={ResumeListStyle.personal_value}>杭州</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>邮箱：</span>
              <span className={ResumeListStyle.personal_value}>1801688332@qq.com</span>
            </li>
          </ul>

          <ul className={ResumeListStyle.personal_content_ul}>
            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>年龄：</span>
              <span className={ResumeListStyle.personal_value}>24岁</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>求职岗位：</span>
              <span className={ResumeListStyle.personal_value}>前端开发工程师</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>电话：</span>
              <span className={ResumeListStyle.personal_value}>15870842969</span>
            </li>

            <li className={ResumeListStyle.personal_flex}>
              <span className={ResumeListStyle.personal_key}>github：</span>
              <span className={ResumeListStyle.personal_value}>https://github.com/pgl-g</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
})


export default Resume;