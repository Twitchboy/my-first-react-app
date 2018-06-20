import react, {Component} from 'react';
import '../assets/css/postEditor.css';

class PostEditor extends Component {
    constructor(props) {
        super(props);

        const {post} = this.props;
        this.state = {
            title: post && post.title || '',
            content: post && post.content || ''
        }

        this.handelChange = this.handelChange.bind(this);
        this.handelCancelClick = this.handelCancelClick.bind(this);
        this.handelSaveClick = this.handelSaveClick.bind(this);
    }

    handelChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelCancelClick () {
        this.props.onCancel();
    }

    handelSaveClick () {
        const data = {
            title: this.state.title,
            content: this.state.content
        };

        // 调用父组件的 onSave 方法，执行保存的真正逻辑
        this.props.onSave(data);
    }


    render () {
        return(
            <div className="postEditor">
                <input
                    type="text"
                    placeholder="标题"
                    name="title"
                    value={this.state.title}
                    onChange={this.handelChange}
                />
                <textarea
                    name="content"
                    placeholder="内容"
                    value={this.state.content}
                    onChange={this.handelChange}
                />
                <button onClick={this.handelCancelClick}>取消</button>
                <button onClick={this.handelSaveClick}>保存</button>
            </div>
        );
    }
};

export default PostEditor
