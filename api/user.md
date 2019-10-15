# 登录接口(返回值中有token)
- **接口地址** : /users/login
- **请求方式** : POST
- **字段**
    - userId :   用户名  Y  String
    - password : 密码    Y  String




# 注册接口
- **接口地址** : /users/register
- **请求方式** : POST
- **字段**
    - userId : 用户名  Y   String
    - password : 密码  Y   String




# 修改个人信息接口 (修改密码、修改昵称)
- **接口地址** : /users/updateInfo
- **请求方式** : POST
- **字段**
    userId:   用户名        Y  String
    password: 要修改的密码  N   String
    username: 要修改的昵称  N   String 




# 上传头像接口 
- **接口地址** : /users/updateUserPic
- **请求方式** : POST
- **字段**
    - userId :  用户名   Y  String
    - userPic : 用户头像 Y  File