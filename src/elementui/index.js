import {
    Button,
    Input,
    Container,
    Header,
    Main,
    Footer,
    Aside,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    RadioGroup,
    RadioButton,
    Avatar,
    Divider,
    Tooltip,
    Form,
    FormItem,
} from 'element-ui'
import Vue from "vue";

const ele = Vue.use(Button)
    .use(Container)
    .use(Input)
    .use(Header)
    .use(Main)
    .use(Footer)
    .use(Aside)
    .use(Menu)
    .use(Submenu)
    .use(MenuItemGroup)
    .use(MenuItem)
    .use(RadioGroup)
    .use(RadioButton)
    .use(Avatar)
    .use(Divider)
    .use(Tooltip)
    .use(Form)
    .use(FormItem)

export default ele