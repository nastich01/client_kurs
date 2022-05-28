import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/App';
import Loader from "./views/Loader";

import MainList from "./views/MainList";

import ActivityEdit from "./views/activity/ActivityEdit";
import ActivityList from "./views/activity/ActivityList";
import ActivityLoader from "./views/activity/ActivityLoader";

import DirectionEdit from "./views/direction/DirectionEdit";
import DirectionList from "./views/direction/DirectionList";
import DirectionLoader from "./views/direction/DirectionLoader";

import DolzhEdit from "./views/dolzh/DolzhEdit";
import DolzhList from "./views/dolzh/DolzhList";
import DolzhLoader from "./views/dolzh/DolzhLoader";

import EventEdit from "./views/event/EventEdit";
import EventList from "./views/event/EventList";
import EventLoader from "./views/event/EventLoader";

import FacultyEdit from "./views/faculty/FacultyEdit";
import FacultyList from "./views/faculty/FacultyList";
import FacultyLoader from "./views/faculty/FacultyLoader";

import KafedraLoader from "./views/kafedra/KafedraLoader";
import KafedraList from "./views/kafedra/KafedraList";
import KafedraEdit from "./views/kafedra/KafedraEdit";

import StudentLoader from "./views/student/StudentLoader";
import StudentList from "./views/student/StudentList";
import StudentEdit from "./views/student/StudentEdit";

import StudentActivityLoader from "./views/student_activity/StudentActivityLoader";
import StudentActivityList from "./views/student_activity/StudentActivityList";
import StudentActivityEdit from "./views/student_activity/StudentActivityEdit";

import TeacherActivityLoader from "./views/teacher_activity/TeacherActivityLoader";
import TeacherActivityList from "./views/teacher_activity/TeacherActivityList";
import TeacherActivityEdit from "./views/teacher_activity/TeacherActivityEdit";

import TeacherLoader from "./views/teacher/TeacherLoader";
import TeacherList from "./views/teacher/TeacherList";
import TeacherEdit from "./views/teacher/TeacherEdit";

import TipLoader from "./views/tip/TipLoader";
import TipList from "./views/tip/TipList";
import TipEdit from "./views/tip/TipEdit";


Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: "/", name: "loader", component: Loader },
		{ path: "/app", component: App, children: [
				{path:"/app", name:"mainList", component: MainList},
				//{path:"/app/:id", name: "editActivity", component: ActivityEdit}
			]},

		/*{ path: "/", name: "activityLoader", component: ActivityLoader },
		{ path: "/app", component: App, children: [
				{path:"/app", name:"app", component: ActivityList},
				{path:"/app/:id", name: "editActivity", component: ActivityEdit}
			]},*/

		/*//{ path: "/", name: "loader", component: Loader },
		{ path: "/app", component: App, children: [
				{path:"/app", name:"app", component: MainList},
				//{path:"/app/:id", name: "editUclass", component: UclassEdit}
			]},*/

		{path: "/activityLoader", name:"activityLoader", component:ActivityLoader},
		{path: "/activity", name: "activity", component: ActivityList},
		{path: "/activity/:id", name: "editActivity", component: ActivityEdit},

		{path: "/directionLoader", name:"directionLoader",component:DirectionLoader},
		{path: "/direction", name: "direction", component: DirectionList},
		{path:"/direction/:id", name:"editDirection",component:DirectionEdit},

		{path: "/dolzhLoader", name:"dolzhLoader",component:DolzhLoader},
		{path: "/dolzh", name: "dolzh", component: DolzhList},
		{path:"/dolzh/:id", name:"editDolzh", component:DolzhEdit},

		{path: "/eventLoader", name:"eventLoader",component:EventLoader},
		{path: "/event", name: "event", component: EventList},
		{path:"/event/:id", name:"editEvent", component:EventEdit},

		{path: "/facultyLoader", name:"facultyLoader",component:FacultyLoader},
		{path: "/faculty", name: "faculty", component: FacultyList},
		{path:"/faculty/:id", name:"editFaculty", component:FacultyEdit},

		{path: "/kafedraLoader", name:"kafedraLoader",component:KafedraLoader},
		{path: "/kafedra", name: "kafedra", component: KafedraList},
		{path:"/kafedra/:id", name:"editKafedra", component:KafedraEdit},

		{path: "/studentLoader", name:"studentLoader",component:StudentLoader},
		{path: "/student", name: "student", component: StudentList},
		{path:"/student/:id", name:"editStudent", component:StudentEdit},

		{path: "/studentActivityLoader", name:"studentActivityLoader",component:StudentActivityLoader},
		{path: "/student_activity", name: "student_activity", component: StudentActivityList},
		{path:"/student_activity/:id", name:"editStudentActivity", component:StudentActivityEdit},

		{path: "/teacherActivityLoader", name:"teacherActivityLoader",component:TeacherActivityLoader},
		{path: "/teacher_activity", name: "teacher_activity", component: TeacherActivityList},
		{path:"/teacher_activity/:id", name:"editTeacherActivity", component:TeacherActivityEdit},

		{path: "/teacherLoader", name:"teacherLoader",component:TeacherLoader},
		{path: "/teacher", name: "teacher", component: TeacherList},
		{path:"/teacher/:id", name:"editTeacher", component:TeacherEdit},

		{path: "/tipLoader", name:"tipLoader",component:TipLoader},
		{path: "/tip", name: "tip", component: TipList},
		{path:"/tip/:id", name:"editTip", component:TipEdit},
	]
});
