/**
 * api接口
 * author: wuxingliu
 * date : 2019年12月19日
 * @type {{}}
 */
var $api = {};

/**
 * login - 注册
 * @param params
 * @param callback
 */
$api.register = function(params , callback){
    $cs.ajax("login/register",params,function(ret){
        callback(ret);
    },'POST')
};

/**
 * login - 获取国家
 * @param params
 * @param callback
 */
$api.getCountryCode = function(params , callback){
    $cs.ajax("login/countryList",params,function(ret){
        callback(ret);
    },'POST')
};
/**
 * login - 获取验证码
 * @param params
 * @param callback
 * 1注册验证码 2忘记密码
 */
$api.getVerify = function(params , callback){
    $cs.ajax("Login/getVerify",params,function(ret){
        callback(ret);
    },'POST')
};

/**
 * login - 用户登录
 * @param params
 * @param callback
 */
$api.login = function(params , callback){
    $cs.ajax("Login/index",params,function(ret){
        callback(ret)
    },'POST')
};


/**
 * login - 找回密码
 * @param params
 * @param callback
 */
$api.forgetLoginPass = function(params , callback){
    $cs.ajax("login/forgetLoginPass",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * login - 修改登陆或支付密码
 * @param params
 * @param callback
 */
$api.changePass = function(params , callback){
    $cs.ajax("Member/changePass",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * login - 用户协议-社区公约
 * @param params
 * @param callback
 * 1用户协议 2社区公约 type
 */
$api.aboutUs = function(params , callback){
    $cs.ajax("Login/aboutUs",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * login - 发送邮箱验证码
 * @param params
 * @param callback
 * 类型 1-登录 2-忘记密码 type
 */
$api.sendEmail = function(params , callback){
    $cs.ajax("login/sendEmail",params,function(ret){
        callback(ret)
    },'POST')
};
// --------我的-----------
/**
 * 安全中心
 * @param params
 * @param callback
 */
$api.securityCenter = function(params , callback){
    $cs.ajax("Member/securityCenter",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 绑定谷歌秘钥
 * @param params
 * @param callback
 */
$api.bindGoogle = function(params , callback){
    $cs.ajax("member/bindGoogle",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 发送邮箱验证
 * @param params
 * @param callback
 */
$api.sendEmailVerify = function(params , callback){
    $cs.ajax("member/sendEmailVerify",params,function(ret){
        callback(ret)
    },'POST')
};
/**
 * 验证邮箱
 * @param params
 * @param callback
 */
$api.emailVerify = function(params , callback){
    $cs.ajax("member/emailVerify",params,function(ret){
        callback(ret)
    },'POST')
};
/**
 * 是否展示用户信息给团队
 * @param params
 * @param callback
 */
$api.isTeamShowed = function(params , callback){
    $cs.ajax("Member/isTeamShowed",params,function(ret){
        callback(ret)
    },'POST')
};
/**
 * 上传图片
 * 1身份认证，7头像
 * @param params
 * @param callback
 */
$api.image_upload = function(params , callback){
    $cs.ajax("Syspara/image_upload",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 修改头像
 * @param params
 * @param callback
 */
$api.editHeadImg = function(params , callback){
    $cs.ajax("Member/editHeadImg",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 修改花名（用户名）
 * @param params
 * @param callback
 */
$api.editUsername = function(params , callback){
    $cs.ajax("Member/editUsername",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 身份证信息
 * @param params
 * @param callback
 */
$api.authInformation = function(params , callback){
    $cs.ajax("Member/authInformation",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 提交身份认证
 * @param params
 * @param callback
 */
$api.auth = function(params , callback){
    $cs.ajax("Member/auth",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 财务中心
 * @param params
 * @param callback
 */
$api.financialCenter = function(params , callback){
    $cs.ajax("Member/financialCenter",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 分享二维码
 * @param params
 * @param callback
 */
$api.shareQrcode = function(params , callback){
    $cs.ajax("Member/shareQrcode",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 消息中心列表
 * @param params
 * @param callback
 * 1系统消息 2社区消息 3任务消息
 */
$api.messageCenter = function(params , callback){
    $cs.ajax("Member/messageCenter",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 消息中心列表详情
 * @param params
 * @param callback
 * 1系统消息 2社区消息 3任务消息
 */
$api.messageCenterDetails = function(params , callback){
    $cs.ajax("Member/messageCenterDetails",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 帮助中心
 * @param params
 * @param callback
 */
$api.helpList = function(params , callback){
    $cs.ajax("Help/helpList",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 帮助中心search
 * @param params
 * @param callback
 */
$api.helpSearchList = function(params , callback){
    $cs.ajax("Help/helpSearchList",params,function(ret){
        callback(ret)
    },'POST')
};
/**
 * 帮助中心详情
 * @param params
 * @param callback
 */
$api.helpDetail = function(params , callback){
    $cs.ajax("Help/helpDetail",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 首页时钟数据
 * @param params
 * @param callback
 * 
 */
$api.userData = function(params , callback){
    $cs.ajax("Member/userData",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 首页消息数量
 * @param params
 * @param callback
 * 
 */
$api.messageCount = function(params , callback){
    $cs.ajax("Member/messageCount",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 首页数据
 * @param params
 * @param callback
 * 
 */
$api.tjIssue = function(params , callback){
    $cs.ajax("Member/tjIssue",params,function(ret){
        callback(ret)
    },'POST')
};
// ----------------------懂得-----------------------------------
/**
 * 文章分类列表
 * @param params
 * @param callback
 */
$api.categorys = function(params , callback){
    $cs.ajax("News/categorys",params,function(ret){
        callback(ret)
    },'POST')
};
/**
 * 文章列表
 * @param params
 * @param callback
 */
$api.newsSpecialList = function(params , callback){
    $cs.ajax("News/newsSpecialList",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 文章详情
 * @param params
 * @param callback
 */
$api.newsDetails = function(params , callback){
    $cs.ajax("News/newsDetails",params,function(ret){
        callback(ret)
    },'POST')
};
/**
 * 轮播
 * @param params
 * @param callback
 */
$api.sliders = function(params , callback){
    $cs.ajax("System/sliders",params,function(ret){
        callback(ret)
    },'POST')
};
// --------看见-------
/**
 * 公告列表
 * @param params
 * @param callback
 * 1横条公共公告 2公共公告 3个人社区公告 4-公共生态事件
 */
$api.noticeList = function(params , callback){
    $cs.ajax("Notice/noticeList",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 公告列表详情
 * @param params
 * @param callback
 * 1横条公共公告 2公共公告 3个人社区公告 4-公共生态事件
 */
$api.noticeDetail = function(params , callback){
    $cs.ajax("Notice/noticeDetail",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 前台发布公告
 * @param params
 * @param callback
 */
$api.addNotice = function(params , callback){
    $cs.ajax("Notice/addNotice",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 创建社区
 * @param params
 * @param callback
 */
$api.createCommuntiy = function(params , callback){
    $cs.ajax("Communtiy/createCommuntiy",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 创建社区
 * @param params
 * @param callback
 */
$api.CommuntiyRank = function(params , callback){
    $cs.ajax("Communtiy/CommuntiyRank",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 加入社区
 * @param params
 * @param callback
 */
$api.addCommuntiy = function(params , callback){
    $cs.ajax("Communtiy/addCommuntiy",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 退出社区
 * @param params
 * @param callback
 */
$api.exitCommuntiy = function(params , callback){
    $cs.ajax("Communtiy/exitCommuntiy",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 获取社区信息
 * @param params
 * @param callback
 */
$api.getCommuntiyInfo = function(params , callback){
    $cs.ajax("Communtiy/getCommuntiyInfo",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 编辑社区信息
 * @param params
 * @param callback
 */
$api.editCommuntiy = function(params , callback){
    $cs.ajax("Communtiy/editCommuntiy",params,function(ret){
        callback(ret)
    },'POST')
};
/**
 * 我的社区
 * @param params
 * @param callback
 */
$api.myCommuntiy = function(params , callback){
    $cs.ajax("Communtiy/myCommuntiy",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 职位列表
 * @param params
 * @param callback
 */
$api.positionList = function(params , callback){
    $cs.ajax("Communtiy/positionList",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 参加选举
 * @param params
 * @param callback
 */
$api.election = function(params , callback){
    $cs.ajax("Communtiy/election",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 被弹劾用户列表
 * @param params
 * @param callback
 */
$api.impeachUsers = function(params , callback){
    $cs.ajax("Communtiy/impeachUsers",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 弹劾
 * @param params
 * @param callback
 */
$api.impeach = function(params , callback){
    $cs.ajax("Communtiy/impeach",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 议事
 * @param params
 * @param callback
 */
$api.deliberation = function(params , callback){
    $cs.ajax("Communtiy/deliberation",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 上传文件
 * @param params
 * @param callback
 */
$api.file_upload = function(params , callback){
    $cs.ajax("Syspara/file_upload",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 选举列表
 * @param params
 * @param callback
 */
$api.electionList = function(params , callback){
    $cs.ajax("Communtiy/electionList",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 议事列表
 * @param params
 * @param callback
 */
$api.discussList = function(params , callback){
    $cs.ajax("Communtiy/discussList",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 弹劾列表
 * @param params
 * @param callback
 */
$api.impeachList = function(params , callback){
    $cs.ajax("Communtiy/impeachList",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 社区治理推荐任务列表
 * @param params
 * @param callback
 */
$api.newsConsenses = function(params , callback){
    $cs.ajax("Communtiy/newsConsenses",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 获取任务详情
 * @param params
 * @param callback
 */
$api.getDetail = function(params , callback){
    $cs.ajax("Communtiy/getDetail",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 对选举 弹劾 议事进行投票操作
 * @param params
 * @param callback
 */
$api.communtiyAction = function(params , callback){
    $cs.ajax("Communtiy/communtiyAction",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 团队任命
 * @param params
 * @param callback
 */
$api.comAppointment = function(params , callback){
    $cs.ajax("Communtiy/comAppointment",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 获取群用户
 * @param params
 * @param callback
 * 1-团队任命 0-群员管理
 */
$api.getComUsers = function(params , callback){
    $cs.ajax("Communtiy/getComUsers",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 获取处罚天数
 * @param params
 * @param callback
 * 1-团队任命 0-群员管理
 */
$api.punishList = function(params , callback){
    $cs.ajax("Communtiy/punishList",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 群员管理
 * @param params
 * @param callback
 * 1-团队任命 0-群员管理
 */
$api.comManage = function(params , callback){
    $cs.ajax("Communtiy/comManage",params,function(ret){
        callback(ret)
    },'POST')
};
/**
 * 团队成员列表
 * @param params
 * @param callback
 * 
 */
$api.myComUsersList = function(params , callback){
    $cs.ajax("Communtiy/myComUsersList",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 团队成员列表
 * @param params
 * @param callback
 * 
 */
$api.myComUsers = function(params , callback){
    $cs.ajax("Communtiy/myComUsers",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 获取用户投票明细
 * @param params
 * @param callback
 * 
 */
$api.getVoteDetail = function(params , callback){
    $cs.ajax("Communtiy/getVoteDetail",params,function(ret){
        callback(ret)
    },'POST')
};
/**
 * 评论列表
 * @param params
 * @param callback
 * 
 */
$api.commentsList = function(params , callback){
    $cs.ajax("Comments/commentsList",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 添加评论
 * @param params
 * @param callback
 * 
 */
$api.commentsAdd = function(params , callback){
    $cs.ajax("Comments/commentsAdd",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 添加子评论
 * @param params
 * @param callback
 * 
 */
$api.commentsChildAdd = function(params , callback){
    $cs.ajax("Comments/commentsChildAdd",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 评论点赞操作
 * @param params
 * @param callback
 * 
 */
$api.commentsPraise = function(params , callback){
    $cs.ajax("Comments/commentsPraise",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 举报评论
 * @param params
 * @param callback
 * 
 */
$api.commentsReport = function(params , callback){
    $cs.ajax("Comments/commentsReport",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 举报评论
 * @param params
 * @param callback
 * 
 */
$api.commentsDel = function(params , callback){
    $cs.ajax("Comments/commentsDel",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 荣耀排行
 * @param params
 * @param callback
 * 
 */
$api.topGlory = function(params , callback){
    $cs.ajax("Task/topGlory",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 任务列表
 * @param params
 * @param callback
 * 
 */
$api.gainTask = function(params , callback){
    $cs.ajax("Task/gainTask",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 任务详情
 * @param params
 * @param callback
 * 
 */
$api.gainTaskDetails = function(params , callback){
    $cs.ajax("Task/gainTaskDetails",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 任务投票
 * @param params
 * @param callback
 * 
 */
$api.taskAction = function(params , callback){
    $cs.ajax("Task/taskAction",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 今日的日常任务
 * @param params
 * @param callback
 * 
 */
$api.dailyTasks = function(params , callback){
    $cs.ajax("Task/dailyTasks",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 推荐任务
 * @param params
 * @param callback
 * 
 */
$api.recommendedTasks = function(params , callback){
    $cs.ajax("Task/recommendedTasks",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 推荐任务
 * @param params
 * @param callback
 * 
 */
$api.chat_upload = function(params , callback){
    $cs.ajax("Syspara/chat_upload",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 直播流
 * @param params
 * @param callback
 * 
 */
$api.getStreaming = function(params , callback){
    $cs.ajax("live/getStreaming",params,function(ret){
        callback(ret)
    },'POST')
};

/**
 * 直播首次开始
 * @param params
 * @param callback
 */
$api.startPlay = function(params, callback){
    $cs.ajax("live/startPlay",params,function(ret){
        callback(ret);
    },'POST')
};
/**
 * 直播重新开始
 * @param params
 * @param callback
 */
$api.restartPlay = function(params, callback){
    $cs.ajax("live/restartPlay",params,function(ret){
        callback(ret);
    },'POST')
};
/**
 * 直播暂停
 * @param params
 * @param callback
 */
$api.pausePlay = function(params, callback){
    $cs.ajax("live/pausePlay",params,function(ret){
        callback(ret);
    },'POST')
};

/**
 * 直播暂停
 * @param params
 * @param callback
 */
$api.getPull = function(params, callback){
    $cs.ajax("live/getPull",params,function(ret){
        callback(ret);
    },'POST')
};

/**
 * 直播暂停
 * @param params
 * @param callback
 */
$api.getIsAnchor = function(params, callback){
    $cs.ajax("live/getIsAnchor",params,function(ret){
        callback(ret);
    },'POST')
};

/**
 * 规则
 * @param params
 * @param callback
 */
$api.rulesContent = function(params, callback){
    $cs.ajax("Member/rulesContent",params,function(ret){
        callback(ret);
    },'POST')
};

/**
 * 用户信息
 * @param params
 * @param callback
 */
$api.getUserDetail = function(params, callback){
    $cs.ajax("Communtiy/getUserDetail",params,function(ret){
        callback(ret);
    },'POST')
};
/**
 * 选张详情
 * @param params
 * @param callback
 */
$api.medalDetails = function(params, callback){
    $cs.ajax("member/medalDetails",params,function(ret){
        callback(ret);
    },'POST')
};

/**
 * xzlist
 * @param params
 * @param callback
 */
$api.medalList = function(params, callback){
    $cs.ajax("member/medalList",params,function(ret){
        callback(ret);
    },'POST')
};