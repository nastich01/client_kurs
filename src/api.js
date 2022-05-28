import { apiUrl } from "./config";
import axios from "axios";

export default {
	/////////
	tip: {
		tipUrl: "tip",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.tipUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.tipUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.tipUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.tipUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.tipUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.tipUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	///////
	faculty: {
		facultyUrl: "faculty",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.facultyUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.facultyUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.facultyUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.facultyUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.facultyUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.facultyUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	/////////
	student: {
		studentUrl: "student",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.studentUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.studentUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.studentUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.studentUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.studentUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.studentUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	/////////////
	teacher: {
		teacherUrl: "teacher",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.teacherUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.teacherUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.teacherUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.teacherUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.teacherUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.teacherUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	/////////
	teacher_activity: {
		teacher_activityUrl: "teacher_activity",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.teacher_activityUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.teacher_activityUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.teacher_activityUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.teacher_activityUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.teacher_activityUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.teacher_activityUrl}/${id}`,
				method: "DELETE"
			});
		}
	},


	/////
	activity: {
		activityUrl: "activity",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.activityUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.activityUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.activityUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.activityUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.activityUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.activityUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	/////
	dolzh: {
		dolzhUrl: "dolzh",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.dolzhUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.dolzhUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.dolzhUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.dolzhUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.dolzhUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.dolzhUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	/////
	kafedra: {
		kafedraUrl: "kafedra",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.kafedraUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.kafedraUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.kafedraUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.kafedraUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.kafedraUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.kafedraUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	/////
	student_activity: {
		student_activityUrl: "student_activity",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.student_activityUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.student_activityUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.student_activityUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.student_activityUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.student_activityUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.student_activityUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	/////
	event: {
		eventUrl: "event",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.eventUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.eventUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.eventUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.eventUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.eventUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.eventUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	/////
	direction: {
		directionUrl: "direction",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.directionUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.directionUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.directionUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.directionUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.directionUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.directionUrl}/${id}`,
				method: "DELETE"
			});
		}
	}

};
