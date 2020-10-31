import {Button, Breadcrumb, Icon, Input, Menu} from 'ant-design-vue'

const antd = {
  install: (Vue => {
    Vue.use(Button)
    Vue.use(Breadcrumb)
    Vue.use(Icon)
    Vue.use(Input)
    Vue.use(Menu)
  })
}

export default antd