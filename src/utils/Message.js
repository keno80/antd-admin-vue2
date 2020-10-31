import {message} from 'ant-design-vue'

//message全局配置
message.config({
  duration: 3,
  maxCount: 3,
  top: '60px'
})


/**
 * content of the message
 * @param {string} type
 * @param {string} text
 */
function ShowMessage(type, text) {
  message.open({
    type,
    content: text,
  })
}

export default ShowMessage