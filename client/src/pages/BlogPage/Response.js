import React, { Component } from "react";
import Button from "../../components/Buttons";
import Reply from "./Reply";
import bloggerAPI from "../../utils/bloggerAPI";

//EH just adding these styles to easier visualize the functionality
const responseStyle = {
    backgroundColor: "#f6f6f6",
    margin: "12px 0"
}

class Response extends Component {
    state = {
        replies: this.props.replies,
        reply: ""
    }

    addReply = () => {
        bloggerAPI.addReply({
            responseId: this.props.id,
            reply: this.state.reply
        }).then(res => {
            this.setState({ replies: [...this.state.replies, res.data.reply], reply: "" })
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        let replies;
        if (this.state.replies.length > 0) {
            replies = this.state.replies.map(reply => {
                const { date, name, text, _id } = reply;
                return (
                    <Reply key={_id}
                        date={date}
                        name={name}
                        text={text}
                    />
                )
            })
        } else {
            replies = "There are no replies"
        }

        return (
            <div className="response" style={responseStyle}>
                <div>Name: {this.props.name}</div>
                <div>Date: {this.props.date}</div>
                <p>Response: {this.props.text}</p>
                <div>
                    <textarea
                        name="reply"
                        value={this.state.reply}
                        onChange={this.handleInputChange}
                    />
                    <Button onClick={this.addReply}>
                        <span>Add reply</span>
                    </Button>
                </div>
                <div>
                    {replies}
                </div>
            </div>
        )
    }
}

export default Response;