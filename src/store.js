import Vue from 'vue';
import Vuex from 'vuex';
import ActivityApi from './api';
import DirectionApi from './api';
import DolzhApi from './api';
import EventApi from './api';
import FacultyApi from './api';
import KafedraApi from './api';
import StudentApi from './api';
import StudentActivityApi from './api';
import TeacherApi from './api';
import TeacherActivityApi from './api';
import TipApi from './api';

Vue.use(Vuex);

///////прописать фильтры в методах!!!!!

////////????????
export default new Vuex.Store({
	state: {
		activity: [],
		direction: [],
		dolzh: [],
		event: [],
		faculty: [],
		kafedra: [],
		student: [],
		student_activity: [],
		teacher: [],
		teacher_activity: [],
		tip: [],
		alertText: ""
	},
	getters: {
		impAct(state) {
			/*let sum = 0;
			state.storeSalaryList.map(item => {
				sum += item.salaryAmount;
			});
			return sum * 2;*/
			let arr=[];
			state.activity.map(item => {
				arr.push({ Мероприятие: item.eventResource.event_name, Тип: item.tipResource.tip_name, Направление:item.directionResource.direction_name,
					Название:item.work_name, Студент:item.studentResource.fio_stud, Преподаватель:item.teacherResource.fio_teacher,Дата:item.event_date,
					Аннотация:item.annotation })
			});
			return arr;
		},

		impCatDir(state) {
			let arr=[];
			arr.push({ name: 'Все направления', value: 'all' })
			state.direction.map(item => {
				arr.push({ name: item.direction_name, value: item.direction_name })
			});
			return arr;
		},

		impDir(state) {
			let arr=[];
			state.direction.map(item => {
				arr.push({ Направление: item.direction_name })
			});
			return arr;
		},

		impTip(state) {
			let arr=[];
			state.tip.map(item => {
				arr.push({ Тип: item.tip_name })
			});
			return arr;
		},

		impEv(state) {
			let arr=[];
			state.event.map(item => {
				arr.push({ Мероприятие: item.event_name, Место: item.place, Дата :item.date,
					Время:item.time, Ссылка:item.link })
			});
			return arr;
		},
	},
	mutations: {
		'SET_ALERT_TEXT'(state, alertText) {
			state.alertText = alertText;
		},

		'SET_ACTIVITY'(state, activity) {
			state.activity = activity;
		},
		'ADD_ACTIVITY'(state, activity) {
			state.activity.push(activity);
		},
		'EDIT_ACTIVITY'(state, activity) {
			const item = state.activity.find(item => item.id === activity.id);
			Object.assign(item, activity);
		},
		'REMOVE_ACTIVITY'(state, activity) {
			const index = state.activity.findIndex(item => item.id === activity.id);
			state.activity.splice(index, 1);
		},

		'SET_DIRECTION'(state, direction) {
			state.direction = direction;
		},
		'ADD_DIRECTION'(state, direction) {
			state.direction.push(direction);
		},
		'EDIT_DIRECTION'(state, direction) {
			const item = state.direction.find(item => item.id === direction.id);
			Object.assign(item, direction);
		},
		'REMOVE_DIRECTION'(state, direction) {
			const index = state.direction.findIndex(item => item.id === direction.id);
			state.direction.splice(index, 1);
		},

		'SET_DOLZH'(state, dolzh) {
			state.dolzh = dolzh;
		},
		'ADD_DOLZH'(state, dolzh) {
			state.dolzh.push(dolzh);
		},
		'EDIT_DOLZH'(state, dolzh) {
			const item = state.dolzh.find(item => item.id === dolzh.id);
			Object.assign(item, dolzh);
		},
		'REMOVE_DOLZH'(state, dolzh) {
			const index = state.dolzh.findIndex(item => item.id === dolzh.id);
			state.dolzh.splice(index, 1);
		},

		'SET_EVENT'(state, event) {
			state.event = event;
		},
		'ADD_EVENT'(state, event) {
			state.event.push(event);
		},
		'EDIT_EVENT'(state, event) {
			const item = state.event.find(item => item.id === event.id);
			Object.assign(item, event);
		},
		'REMOVE_EVENT'(state, event) {
			const index = state.event.findIndex(item => item.id === event.id);
			state.event.splice(index, 1);
		},

		'SET_FACULTY'(state, faculty) {
			state.faculty = faculty;
		},
		'ADD_FACULTY'(state, faculty) {
			state.faculty.push(faculty);
		},
		'EDIT_FACULTY'(state, faculty) {
			const item = state.faculty.find(item => item.id === faculty.id);
			Object.assign(item, faculty);
		},
		'REMOVE_FACULTY'(state, faculty) {
			const index = state.faculty.findIndex(item => item.id === faculty.id);
			state.faculty.splice(index, 1);
		},

		'SET_KAFEDRA'(state, kafedra) {
			state.kafedra = kafedra;
		},
		'ADD_KAFEDRA'(state, kafedra) {
			state.kafedra.push(kafedra);
		},
		'EDIT_KAFEDRA'(state, kafedra) {
			const item = state.kafedra.find(item => item.id === kafedra.id);
			Object.assign(item, kafedra);
		},
		'REMOVE_KAFEDRA'(state, kafedra) {
			const index = state.kafedra.findIndex(item => item.id === kafedra.id);
			state.kafedra.splice(index, 1);
		},

		'SET_STUDENT'(state, student) {
			state.student = student;
		},
		'ADD_STUDENT'(state, student) {
			state.student.push(student);
		},
		'EDIT_STUDENT'(state, student) {
			const item = state.student.find(item => item.id === student.id);
			Object.assign(item, student);
		},
		'REMOVE_STUDENT'(state, student) {
			const index = state.student.findIndex(item => item.id === student.id);
			state.student.splice(index, 1);
		},

		'SET_TEACHER'(state, teacher) {
			state.teacher = teacher;
		},
		'ADD_TEACHER'(state, teacher) {
			state.teacher.push(teacher);
		},
		'EDIT_TEACHER'(state, teacher) {
			const item = state.teacher.find(item => item.id === teacher.id);
			Object.assign(item, teacher);
		},
		'REMOVE_TEACHER'(state, teacher) {
			const index = state.teacher.findIndex(item => item.id === teacher.id);
			state.teacher.splice(index, 1);
		},

		'SET_STUDENT_ACTIVITY'(state, student_activity) {
			state.student_activity = student_activity;
		},
		'ADD_STUDENT_ACTIVITY'(state, student_activity) {
			state.student_activity.push(student_activity);
		},
		'EDIT_STUDENT_ACTIVITY'(state, student_activity) {
			const item = state.student_activity.find(item => item.id === student_activity.id);
			Object.assign(item, student_activity);
		},
		'REMOVE_STUDENT_ACTIVITY'(state, student_activity) {
			const index = state.student_activity.findIndex(item => item.id === student_activity.id);
			state.student_activity.splice(index, 1);
		},

		'SET_TEACHER_ACTIVITY'(state, teacher_activity) {
			state.teacher_activity = teacher_activity;
		},
		'ADD_TEACHER_ACTIVITY'(state, teacher_activity) {
			state.teacher_activity.push(teacher_activity);
		},
		'EDIT_TEACHER_ACTIVITY'(state, teacher_activity) {
			const item = state.teacher_activity.find(item => item.id === teacher_activity.id);
			Object.assign(item, teacher_activity);
		},
		'REMOVE_TEACHER_ACTIVITY'(state, teacher_activity) {
			const index = state.teacher_activity.findIndex(item => item.id === teacher_activity.id);
			state.teacher_activity.splice(index, 1);
		},

		'SET_TIP'(state, tip) {
			state.tip = tip;
		},
		'ADD_TIP'(state, tip) {
			state.tip.push(tip);
		},
		'EDIT_TIP'(state, tip) {
			const item = state.tip.find(item => item.id === tip.id);
			Object.assign(item, tip);
		},
		'REMOVE_TIP'(state, tip) {
			const index = state.tip.findIndex(item => item.id === tip.id);
			state.tip.splice(index, 1);
		},

	},
	actions: {
		async initializeActivity(context) {
			try {
				let response = await ActivityApi.activity.getAllWithExpand();
				context.commit('SET_ACTIVITY', response.data );

				response = await EventApi.event.getAll();
				context.commit('SET_EVENT', response.data );

				response = await TipApi.tip.getAll();
				context.commit('SET_TIP', response.data );

				response = await DirectionApi.direction.getAll();
				context.commit('SET_DIRECTION', response.data );

				response = await StudentApi.student.getAll();
				context.commit('SET_STUDENT', response.data );

				response = await TeacherApi.teacher.getAll();
				context.commit('SET_TEACHER', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		/*async initializeDisciplineFilt(context, disciplineId) {
			try {
				const response = await DisciplineApi.discipline.getByFiltering(disciplineId);
				context.commit('SET_DISCIPLINE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},*/
		async addActivity(context, item) {
			try {
				const response = await ActivityApi.activity.add(item);
				context.commit('ADD_ACTIVITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editActivity(context, item) {
			try {
				const response = await ActivityApi.activity.edit(item.id, item);
				context.commit('EDIT_ACTIVITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeActivity(context, id) {
			try {
				const response = await ActivityApi.activity.delete(id);
				context.commit('REMOVE_ACTIVITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},



		async initializeDirection(context) {
			try {
				const response = await DirectionApi.direction.getAll();
				context.commit('SET_DIRECTION', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addDirection(context, item) {
			try {
				const response = await DirectionApi.direction.add(item);
				context.commit('ADD_DIRECTION', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editDirection(context, item) {
			try {
				const response = await DirectionApi.direction.edit(item.id, item);
				context.commit('EDIT_DIRECTION', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeDirection(context, id) {
			try {
				const response = await DirectionApi.direction.delete(id);
				context.commit('REMOVE_DIRECTION', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},



		async initializeDolzh(context) {
			try {
				const response = await DolzhApi.dolzh.getAll();
				context.commit('SET_DOLZH', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addDolzh(context, item) {
			try {
				const response = await DolzhApi.dolzh.add(item);
				context.commit('ADD_DOLZH', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editDolzh(context, item) {
			try {
				const response = await DolzhApi.dolzh.edit(item.id, item);
				context.commit('EDIT_DOLZH', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeDolzh(context, id) {
			try {
				const response = await DolzhApi.dolzh.delete(id);
				context.commit('REMOVE_DOLZH', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},


		async initializeEvent(context) {
			try {
				const response = await EventApi.event.getAll();
				context.commit('SET_EVENT', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addEvent(context, item) {
			try {
				const response = await EventApi.event.add(item);
				context.commit('ADD_EVENT', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editEvent(context, item) {
			try {
				const response = await EventApi.event.edit(item.id, item);
				context.commit('EDIT_EVENT', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeEvent(context, id) {
			try {
				const response = await EventApi.event.delete(id);
				context.commit('REMOVE_EVENT', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},


		async initializeFaculty(context) {
			try {
				const response = await FacultyApi.faculty.getAll();
				context.commit('SET_FACULTY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addFaculty(context, item) {
			try {
				const response = await FacultyApi.faculty.add(item);
				context.commit('ADD_FACULTY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editFaculty(context, item) {
			try {
				const response = await FacultyApi.faculty.edit(item.id, item);
				context.commit('EDIT_FACULTY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeFaculty(context, id) {
			try {
				const response = await FacultyApi.faculty.delete(id);
				context.commit('REMOVE_FACULTY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},


		async initializeKafedra(context) {
			try {
				const response = await KafedraApi.kafedra.getAll();
				context.commit('SET_KAFEDRA', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addKafedra(context, item) {
			try {
				const response = await KafedraApi.kafedra.add(item);
				context.commit('ADD_KAFEDRA', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editKafedra(context, item) {
			try {
				const response = await KafedraApi.kafedra.edit(item.id, item);
				context.commit('EDIT_KAFEDRA', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeKafedra(context, id) {
			try {
				const response = await KafedraApi.kafedra.delete(id);
				context.commit('REMOVE_KAFEDRA', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},


		async initializeStudent(context) {
			try {
				let response = await StudentApi.student.getAllWithExpand();
				context.commit('SET_STUDENT', response.data );

				response = await FacultyApi.faculty.getAll();
				context.commit('SET_FACULTY', response.data );

			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		/*async initializeDisciplineFilt(context, disciplineId) {
			try {
				const response = await DisciplineApi.discipline.getByFiltering(disciplineId);
				context.commit('SET_DISCIPLINE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},*/
		async addStudent(context, item) {
			try {
				const response = await StudentApi.student.add(item);
				context.commit('ADD_STUDENT', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editStudent(context, item) {
			try {
				const response = await StudentApi.student.edit(item.id, item);
				context.commit('EDIT_STUDENT', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeStudent(context, id) {
			try {
				const response = await StudentApi.student.delete(id);
				context.commit('REMOVE_STUDENT', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},


		async initializeStudentActivity(context) {
			try {
				let response = await StudentActivityApi.student_activity.getAll();
				context.commit('SET_STUDENT_ACTIVITY', response.data );

				response = await ActivityApi.activity.getAll();
				context.commit('SET_ACTIVITY', response.data );

				response = await StudentApi.student.getAll();
				context.commit('SET_STUDENT', response.data );

			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		/*async initializeDisciplineFilt(context, disciplineId) {
			try {
				const response = await DisciplineApi.discipline.getByFiltering(disciplineId);
				context.commit('SET_DISCIPLINE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},*/
		async addStudentActivity(context, item) {
			try {
				const response = await StudentActivityApi.student_activity.add(item);
				context.commit('ADD_STUDENT_ACTIVITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editStudentActivity(context, item) {
			try {
				const response = await StudentActivityApi.student_activity.edit(item.id, item);
				context.commit('EDIT_STUDENT_ACTIVITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeStudentActivity(context, id) {
			try {
				const response = await StudentActivityApi.student_activity.delete(id);
				context.commit('REMOVE_STUDENT_ACTIVITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},


		async initializeTeacher(context) {
			try {
				let response = await TeacherApi.teacher.getAllWithExpand();
				context.commit('SET_TEACHER', response.data );

				response = await DolzhApi.dolzh.getAll();
				context.commit('SET_DOLZH', response.data );

				response = await KafedraApi.kafedra.getAll();
				context.commit('SET_KAFEDRA', response.data );

			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		/*async initializeDisciplineFilt(context, disciplineId) {
			try {
				const response = await DisciplineApi.discipline.getByFiltering(disciplineId);
				context.commit('SET_DISCIPLINE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},*/
		async addTeacher(context, item) {
			try {
				const response = await TeacherApi.teacher.add(item);
				context.commit('ADD_TEACHER', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editTeacher(context, item) {
			try {
				const response = await TeacherApi.teacher.edit(item.id, item);
				context.commit('EDIT_TEACHER', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeTeacher(context, id) {
			try {
				const response = await TeacherApi.teacher.delete(id);
				context.commit('REMOVE_TEACHER', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},


		async initializeTeacherActivity(context) {
			try {
				let response = await TeacherActivityApi.teacher_activity.getAll();
				context.commit('SET_STUDENT_ACTIVITY', response.data );

				response = await ActivityApi.activity.getAll();
				context.commit('SET_ACTIVITY', response.data );

				response = await TeacherApi.teacher.getAll();
				context.commit('SET_TEACHER', response.data );

			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		/*async initializeDisciplineFilt(context, disciplineId) {
			try {
				const response = await DisciplineApi.discipline.getByFiltering(disciplineId);
				context.commit('SET_DISCIPLINE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},*/
		async addTeacherActivity(context, item) {
			try {
				const response = await TeacherActivityApi.teacher_activity.add(item);
				context.commit('ADD_TEACHER_ACTIVITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editTeacherActivity(context, item) {
			try {
				const response = await TeacherActivityApi.teacher_activity.edit(item.id, item);
				context.commit('EDIT_TEACHER_ACTIVITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeTeacherActivity(context, id) {
			try {
				const response = await TeacherActivityApi.teacher_activity.delete(id);
				context.commit('REMOVE_TEACHER_ACTIVITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},


		async initializeTip(context) {
			try {
				const response = await TipApi.tip.getAll();
				context.commit('SET_TIP', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addTip(context, item) {
			try {
				const response = await TipApi.tip.add(item);
				context.commit('ADD_TIP', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editTip(context, item) {
			try {
				const response = await TipApi.tip.edit(item.id, item);
				context.commit('EDIT_TIP', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeTip(context, id) {
			try {
				const response = await TipApi.tip.delete(id);
				context.commit('REMOVE_TIP', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		}

	}
});
