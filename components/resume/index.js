import React, { forwardRef } from 'react';


import ResumeListStyle from '../../assets/css/components/resumeList.module.css';

const Resume = (props, resumeRef) => {

  return (
    <div id="resumeId" ref={resumeRef} className={ResumeListStyle.resumeList_container}>
      {/* 个人信息 */}
      <div className={`${ResumeListStyle.resume_personal} ${ResumeListStyle.resume_con}`}>
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
      {/* 教育经历 */}
      <div className={`${ResumeListStyle.resume_educationList} ${ResumeListStyle.resume_con}`}>
        <h1>教育</h1>
        <div className={ResumeListStyle.educationList_content}>
          <ul className={ResumeListStyle.educationList_content_ul}>
            <li className={ResumeListStyle.educationList_flex}>
              <span className={ResumeListStyle.educationList_key}>2017-09 ~ 2021-06</span>
            </li>

            <li className={ResumeListStyle.educationList_flex}>
              <span className={ResumeListStyle.educationList_key}>南昌航空大学</span>
            </li>

            <li className={ResumeListStyle.educationList_flex}>
              <span className={ResumeListStyle.educationList_key}>软件技术（本科）</span>
            </li>
          </ul>
        </div>
      </div>
      {/* 专业技能 */}
      <div className={`${ResumeListStyle.resume_skillList} ${ResumeListStyle.resume_con}`}>
        <h1>专业技能</h1>
        <div className={ResumeListStyle.skillList_content}>
          <ol className={ResumeListStyle.skillList_content_ol}>
            <li className={ResumeListStyle.skillList_flex}>
              熟悉HTML、CSS语言，兼容主浏览器页面
            </li>

            <li className={ResumeListStyle.skillList_flex}>
              熟悉React、Vue等框架，熟悉router、render props、Hooks、组件开发等概念、了解render、diff等运行时机制
            </li>

            <li className={ResumeListStyle.skillList_flex}>
              熟悉常见的数据结构、设计模式能够运用设计模式写出良好的前端代码

            </li>

            <li className={ResumeListStyle.skillList_flex}>
              熟系的使用uniapp，以及常用api
            </li>

            <li className={ResumeListStyle.skillList_flex}>
              熟练的使用css的预编辑语言如less、scss等
            </li>

            <li className={ResumeListStyle.skillList_flex}>
              熟练的使用git、sourceTree等版本控制工具，并在团队开发中应用，能够合理沟通解决冲突问题等
            </li>

            <li className={ResumeListStyle.skillList_flex}>
              熟系常见的工程化打包工具，如webpack等
            </li>

            <li className={ResumeListStyle.skillList_flex}>
              熟系并在项目中使用vant、Ant-design等ui框架
            </li>

            <li className={ResumeListStyle.skillList_flex}>
              在工作总经常和后台配合联调工作，在配合的过程中也了解后端的基本知识
            </li>

            <li className={ResumeListStyle.skillList_flex}>
              了解并使用typeScript、接口、泛型、等概念
            </li>

            <li className={ResumeListStyle.skillList_flex}>
              了解并使用node中koa相关框架开发，以及实现数据库中的增删改查等操作·
            </li>
          </ol>
        </div>
      </div>
      {/* 项目经历 */}
      <div className={`${ResumeListStyle.resume_projectList} ${ResumeListStyle.resume_con}`}>
        <h1>项目经历</h1>
        <div className={ResumeListStyle.projectList_item}>
          <div className={ResumeListStyle.projectList_title}>
            <span className={ResumeListStyle.projectList_time}>2020-04 ~ 2021-10</span>
            <span className={ResumeListStyle.projectList_name}>toshake 交易所</span>
            <span className={ResumeListStyle.projectList_project}>前端开发</span>
          </div>
          <ul className={ResumeListStyle.projectList_content_ul}>
            <li className={ResumeListStyle.projectList_flex}>
              <span className={ResumeListStyle.projectList_key}>主要技术栈：</span>
              <span className={ResumeListStyle.projectList_value}>React 16.3、scss、ant design react、heightCharts、websocket</span>
            </li>

            <li className={ResumeListStyle.projectList_flex}>
              <span className={ResumeListStyle.projectList_key}>项目描述：</span>
              <span className={ResumeListStyle.projectList_value}>
                该项目为前台交易所，对主流币进行用户交易。其主要的功能有，首页、
                行情页、币币交易、合约交易、资产页记录显示，以及实时显示数据更新。
              </span>
            </li>

            <li className={ResumeListStyle.projectList_flex}>
              <span className={ResumeListStyle.projectList_key}>主要工作：</span>
              <ol>
                <li>
                  负责二次迭代工程、整个合约交易部分以及部分币币交易
                </li>
                <li>
                  整合之前代码设计、重新进行开发生产
                </li>
                <li>
                  根据产品的需求、以及项目需求整合产品文档、确定项目功能点和开发周期
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
      {/* 工作经历 */}
      <div className={`${ResumeListStyle.resume_workExpList} ${ResumeListStyle.resume_con}`}>
        <h1>工作经历</h1>
        <div className={ResumeListStyle.workExpList_content}>
          <div className={ResumeListStyle.workExpList_title}>
            <span className={ResumeListStyle.workExpList_time}>2020-04 ~ 2021-10</span>
            <span className={ResumeListStyle.workExpList_name}>toshake 交易所</span>
            <span className={ResumeListStyle.workExpList_project}>前端开发</span>
          </div>
          <div className={ResumeListStyle.workExpList_workProject}>
            <ul className={ResumeListStyle.workExpList_ul}>
              <li>
                负责前端页面的开发与设计，并在技术经理指导下进行开发工作；
              </li>
              <li>
                根据设计文档戒需求完成软件的设计、开发、测试、修改 bug 等工作，包括业务需求的沟通，功能模 块详绅设计，业务功能实现与单元测试，系统维护。实时了解行业的变化，跟踪客户的详绅数据，为客户制定更完善的投放计划；	
              </li>
              <li>
                按照项目的计划行事，在确保质量的前提下按时戒提前完成任务;并总结项目经验,归納案例，实现经验共享;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


export default forwardRef(Resume);