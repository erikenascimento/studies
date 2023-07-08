import React, { Component } from "react";
import Button from "../Button";
import style from "./Form.module.scss";

export default class Form extends Component {
	state = {
		task: "",
		time: "00:00:00",
	};

	addTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log("state", this.state);
	}
	render() {
		return (
			<form className={style.newTask} onSubmit={this.addTask.bind(this)}>
				<div className={style.inputContainer}>
					<label htmlFor="task">Add a new study.</label>
					<input
						type="text"
						name="task"
						id="task"
						value={this.state.task}
						onChange={event =>
							this.setState({ ...this.state, task: event.target.value })
						}
						placeholder="What do you want to study?"
					/>
				</div>
				<div className={style.inputContainer}>
					<label htmlFor="time">Time</label>
					<input
						type="time"
						step="1"
						name="time"
						value={this.state.time}
						onChange={event =>
							this.setState({ ...this.state, time: event.target.value })
						}
						id="time"
						min="00:00:00"
						max="01:30:00"
						required
					/>
				</div>
				<Button>Add</Button>
			</form>
		);
	}
}
