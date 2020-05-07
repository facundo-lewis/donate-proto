import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button,
  Layout,
  Row,
  Col,
  Card,
  Avatar,
  Form,
  Input,
  Icon,
  List,
  Rate,
  Tag,
  Menu,
  Modal,
  Table,
  Divider,
  Popover,
  Popconfirm,
  Skeleton,
  Steps
} from 'ant-design-vue'; 

Vue.component(Button.name, Button);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Card.name, Card);
Vue.component(Card.Meta.name, Card.Meta);
Vue.component(Icon.name, Icon);
Vue.component(Avatar.name, Avatar);
Vue.component(Rate.name, Rate);
Vue.component(Tag.name, Tag);
Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
Vue.component(Input.name, Input);
Vue.component(Input.Password.name, Input.Password);
Vue.component(Input.Search.name, Input.Search);
Vue.component(List.name, List);
Vue.component(List.Item.name, List.Item);
Vue.component(List.Item.Meta.name, List.Item.Meta);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
Vue.component(Modal.name, Modal);
Vue.component(Table.name, Table);
Vue.component(Divider.name, Divider);
Vue.component(Popover.name, Popover);
Vue.component(Popconfirm.name, Popconfirm);
Vue.component(Skeleton.name, Skeleton);
Vue.component(Steps.name, Steps);
Vue.component(Steps.Step.name, Steps.Step);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
