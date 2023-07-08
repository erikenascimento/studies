import style from "./Chronometer.module.scss";
import Button from "../Button";
import Clock from "./clock";

export default function Chronometer() {
	return (
		<div className={style.chronometer}>
			<p className={style.title}>Select a card and start the chronometer</p>
			<div className={style.clockWrapper}>
				<Clock />
			</div>
			<Button>Start!</Button>
		</div>
	);
}
