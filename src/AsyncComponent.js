import React, {Component} from 'react';

/**
 * 动态加载组件
 * @param {functions} importComponent => import('componentPath') 使用了 import() 的函数
 * 为什么不把路径传递过来呢？因为在使用 import() 时，必须显式地声明要导入的组件路径，webpack 在打包时，会根据显式的声明拆分代码，否则，webpack 无法获得足够的关于拆分代码的信息。
 */
export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null // 动态加载的组件
            }
        }

        componentDidMount() {
            importComponent().then(module => {
                this.setState({
                    // 同时兼容 ES6 和 CommonJS的模块
                    component: module.default ? module.default : module
                });
            });
        }

        render () {
            // 渲染动态加载的组件
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
    return AsyncComponent;
};
