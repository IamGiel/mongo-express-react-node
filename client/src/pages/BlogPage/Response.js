import React, { Component } from "react";
import Button from "../../components/Buttons";
import Reply from "./Reply";
import bloggerAPI from "../../utils/bloggerAPI";

class Response extends Component {
    state = {
        replies: this.props.replies,
        reply: "",
        showReplyForm: false,
        showReplies: false,
    }

    addReply = () => {
        bloggerAPI.addReply({
            responseId: this.props.id,
            reply: this.state.reply
        }).then(res => {
            this.setState({ replies: [...this.state.replies, res.data.reply], reply: "" })
            this.toggleShowReplyForm();
        })
    }

    toggleShowReplyForm = () => {
        this.state.showReplyForm ? this.setState({ showReplyForm: false }) : this.setState({ showReplyForm: true })
    }

    toggleShowReplies = () => {
        this.state.showReplies ? this.setState({ showReplies: false }) : this.setState({ showReplies: true })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        //Show reply form conditional render

        let replyArea;
        let userResponses = this.state.reply.toString();

        if (this.state.showReplyForm) {
            replyArea = (
                <div>
                    <textarea
                        name="reply"
                        value={this.state.reply}
                        onChange={this.handleInputChange}
                    />
                    <Button disabled={userResponses.match((/.*\S.*/g))  ? false : true} onClick={this.addReply}>
                        <span>Submit reply</span>
                    </Button>
                </div>
            )
        } else {
            replyArea = (
                <div>
                    <div>{this.state.replies.length} replies</div>
                    <Button onClick={this.toggleShowReplyForm}>
                        <span>Add reply</span>
                    </Button>

                </div>
            )
        }

        //Show all replies conditional render
        let replies;
        if (this.state.replies.length > 0 && this.state.showReplies) {
            replies = this.state.replies.map(reply => {
                const { date, name, text, _id } = reply;
                return (
                    <Reply key={_id}
                        date={date}
                        name={name}
                        text={text}
                    />
                )
            }
            )
        }

        //Show/hide replies conditional render
        let showRepliesButton;
        if (this.state.replies.length) {
            showRepliesButton = <Button onClick={this.toggleShowReplies}>
                {this.state.showReplies ? "Hide replies" : "Show replies"}
            </Button>
        }

        return (
            <div className="response">
                <div>Name: {this.props.name}</div>
                <div>Date: {this.props.date}</div>
                <p>Response: {this.props.text}</p>
                {replyArea}
                {showRepliesButton}
                <div>
                    {replies}
                </div>
            </div>
        )
    }
}

export default Response;