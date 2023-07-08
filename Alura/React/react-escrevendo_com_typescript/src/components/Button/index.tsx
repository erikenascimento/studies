import React from "react";
import style from "./Button.module.scss";

export default class Button extends React.Component<any, any> {
	render() {
		return <button className={style.button}>{this.props.children}</button>;
	}
}
