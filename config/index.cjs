/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfcc51394ef11e376',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '01f21d6cbe141500f6fb78678a90892e',

  PROVINCE: '河南',
  CITY: '周口',

  USERS: [
    {
      // 想要发送的人的名字
      name: '张羽',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJN4m6okh3Hzj6uqA1uZ3At_ZKnQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	9PMLDqA7i6ACYtNW6UlktB_wEzAQLJ0ME0XUDCFTLfU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-25',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '张羽', year: '1997', date: '09-25',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'u9vvIc_f7iuKMaPdmyyp01wQ9e-iCoRxifUmOJsBEbM',

  CALLBACK_USERS: [
    {
      name: '张羽',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oJN4m6okh3Hzj6uqA1uZ3At_ZKnQ',
    }
  ],

}

module.exports = USER_CONFIG

