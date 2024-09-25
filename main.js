function getStudents(){

    const studentsAsString=localStorage.getItem('students');
    const students=JSON.parse(studentsAsString);

    return students;
}


const content={

    data(){
        return{

            id:'',
            name:'',
            className:'',
            grade:'',


            isAdding:false,
            students:getStudents(),

        };
    },

    methods:{
        save(){
            this.students.push({
                id:this.students.length+1,
                name:this.name,
                className:this.className,
                grade:this.grade,
            })
            

            this.id='';
            this.name='';
            this.className='';
            this.grade='';

            this.isAdding=false;

            const studentsAsString=JSON.stringify(this.students);
            localStorage.setItem('students',studentsAsString);
           
        },
        search(event) {
            const value = event.target.value.toLowerCase();
            // Filter the students based on the search term
            const filteredStudents = getStudents().filter(student =>
                student.name.toLowerCase().startsWith(value)
            );
            this.students = filteredStudents;
        },

        
    }



}

const app=Vue.createApp(content);
app.mount('#app');