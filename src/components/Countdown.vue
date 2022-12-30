<template>
	<div class="box-timer">
		<div class="single-count">
			<span class="count-timer">{{ days }}</span>
			<span class="count-format">Days</span>
		</div>
		<div class="single-count">
			<span class="count-timer">{{ hours }}</span>
			<span class="count-format">Hours</span>
		</div>
		<div class="single-count">
			<span class="count-timer">{{ minutes }}</span>
			<span class="count-format">Minutes</span>
		</div>
		<div class="single-count">
			<span class="count-timer">{{ seconds }}</span>
			<span class="count-format">Seconds</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		deadline: {
			type: String,
			default: "october 31, 2023",
		},
	},

	data() {
		return {
			now: Math.trunc(new Date().getTime() / 1000),
		};
	},

	computed: {
		dateInMilliseconds() {
			return Math.trunc(Date.parse(this.deadline) / 1000);
		},
		seconds() {
			const sec = (this.dateInMilliseconds - this.now) % 60;
			return `${sec}`.padStart(2, "0");
		},
		minutes() {
			const min = Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
			return `${min}`.padStart(2, "0");
		},
		hours() {
			const hrs = Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
			return `${hrs}`.padStart(2, "0");
		},
		days() {
			const day = Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
			return `${day}`.padStart(2, "0");
		},
	},
	mounted() {
		setInterval(() => {
			this.now = Math.trunc(new Date().getTime() / 1000);
		}, 1000);
	},
};
</script>